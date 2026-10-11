# Ligar a planilha do Google

Opcional. Sem ela, o aplicativo funciona inteiro — o recolhimento é por QR ou código. Com ela,
cada envio cai direto numa planilha sua e você dispensa o recolhimento manual.

> **Só funciona com o aplicativo hospedado por você**, em `https://`. Aberto por duplo clique
> (`file://`) ou dentro do claude.ai, o navegador bloqueia a chamada e o aplicativo volta
> sozinho para o fluxo por código — nada quebra.

---

## Instalar (uma vez, cerca de cinco minutos)

1. Crie uma planilha no Google Planilhas. O nome é livre.
2. **Extensões → Apps Script**. Apague o conteúdo do editor.
3. Cole o conteúdo de [`planilha/apps-script.gs`](../planilha/apps-script.gs). Salve.
4. **Implantar → Nova implantação**.
   - Tipo: **Aplicativo da Web**
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa** ← indispensável, senão o celular do aluno
     recebe "não autorizado"
5. **Implantar → Autorizar acesso** → sua conta → *Avançado* → *Acessar (não seguro)* →
   *Permitir*. O aviso aparece porque o script é seu e não passou por revisão do Google; ele
   só acessa esta planilha.
6. Copie o **URL do aplicativo da web** (termina em `/exec`).
7. No aplicativo: **Dados → Endpoint da planilha**, cole, **Salvar**, depois **Testar conexão**.

As abas são criadas sozinhas no primeiro uso.

---

## O que vai para a planilha

**Aulas** — id, título, data, turma, ficha, prova cega e a lista de amostras.

**Envios** — uma linha por avaliação: quem avaliou, papel, o que foi avaliado, total, máximo,
penalidade, data e as respostas em JSON.

**Detalhe** — uma linha por resposta. É a aba que alimenta tabela dinâmica: aula, pessoa, papel,
amostra, item e valor.

---

## No dia a dia

Ao salvar uma aula, ela é publicada na planilha. Ao concluir uma ficha, o envio sobe sozinho e
o estudante vê "Enviado direto para a planilha do professor". No painel, **Buscar na planilha**
traz o que chegou.

Se a rede falhar, o aplicativo mostra o QR e o código como sempre — nenhum dado se perde.

---

## Alterar o script depois

**Implantar → Gerenciar implantações → editar → Versão: Nova versão.** Sem isso o endereço
continua servindo a versão antiga.
