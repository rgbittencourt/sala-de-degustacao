/**
 * SALA DE DEGUSTAÇÃO — ponte com a Planilha Google
 * Prof. Jucelio Kulmann de Medeiros
 * IFSC · Câmpus Florianópolis-Continente
 *
 * ---------------------------------------------------------------
 * COMO INSTALAR (uma vez, leva uns 5 minutos)
 * ---------------------------------------------------------------
 * 1. Crie uma planilha nova no Google Planilhas. O nome é livre.
 * 2. Menu  Extensões → Apps Script.  Apague o conteúdo do editor e
 *    cole este arquivo inteiro. Salve (ícone de disquete).
 * 3. Clique em  Implantar → Nova implantação.
 *    - Engrenagem "Selecionar tipo" →  Aplicativo da Web
 *    - Descrição: Sala de Degustação
 *    - Executar como:  Eu
 *    - Quem pode acessar:  Qualquer pessoa          ← indispensável,
 *      senão o celular do aluno recebe "não autorizado".
 *    - Implantar → Autorizar acesso → escolha sua conta →
 *      "Avançado" → "Acessar (não seguro)" → Permitir.
 *      (O aviso aparece porque o script é seu e não foi revisado
 *       pelo Google; ele só acessa esta planilha.)
 * 4. Copie o  URL do aplicativo da web  (termina em /exec).
 * 5. No aplicativo, vá em  Dados → Endpoint da planilha, cole o URL
 *    e clique em Salvar e depois em Testar conexão.
 *
 * As abas Aulas, Envios e Detalhe são criadas sozinhas no primeiro uso.
 *
 * IMPORTANTE: chamadas de rede só funcionam quando o aplicativo está
 * hospedado por você (Moodle, Drive, site próprio). Aberto dentro do
 * claude.ai, o navegador bloqueia a chamada e o aplicativo volta
 * automaticamente para o envio por código — nada quebra.
 *
 * Ao alterar este script, use  Implantar → Gerenciar implantações →
 * editar → Versão: Nova versão. Sem isso o URL continua servindo a
 * versão antiga.
 * ---------------------------------------------------------------
 */

var ABA_AULAS   = 'Aulas';
var ABA_ENVIOS  = 'Envios';
var ABA_DETALHE = 'Detalhe';

var CAB_AULAS = ['id','titulo','data','turma','ficha','fichaNome','cego','amostras','atualizado'];
var CAB_ENVIOS = ['id','aulaId','aulaTitulo','amostraId','amostraRot','pessoa','turma','papel',
                  'ficha','total','maximo','penalidade','quando','respostas'];
var CAB_DETALHE = ['aulaId','aulaTitulo','pessoa','papel','amostraId','amostraRot','item','valor','quando'];

function doPost(e) {
  var trava = LockService.getScriptLock();
  try {
    trava.waitLock(20000);
    var d = JSON.parse(e.postData.contents);
    switch (d.acao) {
      case 'ping':   return json({ ok: true, versao: 1 });
      case 'aula':   return salvarAula(d.aula);
      case 'envio':  return salvarEnvio(d.envio);
      case 'listar': return listarEnvios(d.aulaId);
      default:       return json({ ok: false, erro: 'ação desconhecida: ' + d.acao });
    }
  } catch (err) {
    return json({ ok: false, erro: String(err) });
  } finally {
    try { trava.releaseLock(); } catch (_) {}
  }
}

/* Visitar o /exec no navegador mostra que a ponte está de pé. */
function doGet() {
  return json({ ok: true, versao: 1, mensagem: 'Sala de Degustação — ponte ativa.' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function aba(nome, cabecalho) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName(nome);
  if (!s) {
    s = ss.insertSheet(nome);
    s.appendRow(cabecalho);
    s.getRange(1, 1, 1, cabecalho.length).setFontWeight('bold');
    s.setFrozenRows(1);
  }
  return s;
}

function linhaPorId(s, id) {
  var col = s.getRange(2, 1, Math.max(s.getLastRow() - 1, 1), 1).getValues();
  for (var i = 0; i < col.length; i++) if (String(col[i][0]) === String(id)) return i + 2;
  return 0;
}

function salvarAula(a) {
  if (!a || !a.id) return json({ ok: false, erro: 'aula sem id' });
  var s = aba(ABA_AULAS, CAB_AULAS);
  var linha = [a.id, a.titulo, a.data, a.turma, a.ficha, a.fichaNome,
               a.cego ? 'sim' : 'não', JSON.stringify(a.amostras || []), new Date()];
  var r = linhaPorId(s, a.id);
  if (r) s.getRange(r, 1, 1, linha.length).setValues([linha]);
  else s.appendRow(linha);
  return json({ ok: true, aula: a.id });
}

function salvarEnvio(e) {
  if (!e || !e.id) return json({ ok: false, erro: 'envio sem id' });
  var s = aba(ABA_ENVIOS, CAB_ENVIOS);
  if (linhaPorId(s, e.id)) return json({ ok: true, repetido: true });

  s.appendRow([e.id, e.aulaId, e.aulaTitulo, e.amostraId, e.amostraRot, e.pessoa, e.turma,
               e.papel, e.ficha, e.total, e.max, e.penal ? 'sim' : '', e.quando,
               JSON.stringify(e.resp || {})]);

  /* Aba Detalhe: uma linha por resposta — é a que alimenta tabelas dinâmicas. */
  var d = aba(ABA_DETALHE, CAB_DETALHE);
  var resp = e.resp || {}, linhas = [];
  for (var k in resp) {
    if (!resp.hasOwnProperty(k)) continue;
    var v = resp[k];
    if (v === null || v === '' || (Array.isArray(v) && !v.length)) continue;
    linhas.push([e.aulaId, e.aulaTitulo, e.pessoa, e.papel, e.amostraId, e.amostraRot,
                 k, Array.isArray(v) ? v.join(' | ') : v, e.quando]);
  }
  if (linhas.length) d.getRange(d.getLastRow() + 1, 1, linhas.length, CAB_DETALHE.length).setValues(linhas);

  return json({ ok: true, envio: e.id });
}

function listarEnvios(aulaId) {
  var s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_ENVIOS);
  if (!s || s.getLastRow() < 2) return json({ ok: true, envios: [] });
  var vals = s.getRange(2, 1, s.getLastRow() - 1, CAB_ENVIOS.length).getValues();
  var out = [];
  for (var i = 0; i < vals.length; i++) {
    var v = vals[i];
    if (aulaId && String(v[1]) !== String(aulaId)) continue;
    var resp = {};
    try { resp = JSON.parse(v[13] || '{}'); } catch (_) {}
    out.push({
      id: v[0], aulaId: v[1], aulaTitulo: v[2], amostraId: v[3], amostraRot: v[4],
      pessoa: v[5], turma: v[6], papel: v[7], ficha: v[8],
      quando: v[12] instanceof Date ? v[12].toISOString() : v[12], resp: resp
    });
  }
  return json({ ok: true, envios: out });
}
