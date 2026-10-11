# Guia do professor

## Antes da aula

**Criar a aula.** *Aulas → Nova aula*. Dê um título, escolha a data, a turma e o modelo de
ficha. O modelo decide tudo o mais: quem preenche, o que é avaliado e que análises o painel vai
produzir.

**Cadastrar o que será avaliado.** Nas fichas de degustação, são as amostras. Na ficha de
coquetelaria, são os **estudantes** que vão apresentar — e aí aparece um gerador de horários:
informe o início e o intervalo e clique em *Gerar horários*.

**Prova cega.** Marque e a turma verá apenas "Amostra 1, 2, 3…". O painel continua mostrando a
identificação real, só para você.

**Amostra repetida às cegas.** Clique em *Duplicar às cegas* numa amostra: o aplicativo cria
uma cópia com outro rótulo. Para a turma são bebidas diferentes; para o painel é a mesma, e com
isso ele mede a **repetibilidade** de cada avaliador. É o indicador mais honesto de que os
critérios estão estáveis. Vale a pena em toda prova com quatro ou mais amostras.

**Modo treino com gabarito.** Marque *Modo treino* e preencha o *Gabarito* de uma ou mais
amostras — como a ficha deveria ser respondida. Ao concluir, o estudante vê na hora o quanto
chegou perto, e o painel mostra onde a turma se afasta da referência.

**Autoavaliação** (só coquetelaria). Marque a opção e o aplicativo passa a oferecer, em
*Distribuir*, um segundo código que abre **apenas a parte sensorial**, para o estudante pontuar
o próprio trabalho antes da banca. Depois a devolutiva compara as duas leituras.

---

## No início da aula

*Aulas → Distribuir*. Você tem três caminhos para a mesma aula:

- **QR Code** — projete no quadro ou imprima. É o caminho mais rápido.
- **Link** — para mandar pelo Moodle ou WhatsApp.
- **Código** — alternativa que funciona em qualquer situação, inclusive sem o endereço
  configurado.

Antes de tudo isso, preencha uma vez **Dados → Endereço do aplicativo** com o endereço que a
turma vai abrir. É ele que entra no QR e no link. Confira: precisa ser o endereço que *eles*
abrem, não o que aparece na sua tela.

Se a aula tem autoavaliação, distribua primeiro o código de autoavaliação, antes da banca
começar.

---

## Durante

Nada a fazer. O rascunho de cada pessoa fica salvo no aparelho dela a cada toque — se o
navegador fechar, nada se perde.

Na ficha de 100 pontos o total aparece ao vivo no rodapé, e o botão **?** ao lado de cada
critério abre a definição da sistematização, para o estudante consultar sem interromper a prova.

---

## Recolher

**Com a câmera** — *Painel → Ler QR*. Aponte para a tela do celular de cada estudante, um atrás
do outro, sem fechar. Cada leitura dá um bipe e aparece na lista.

**Pelo código** — *Painel → Receber envios*. Cole os códigos recebidos, um por linha.

**Pela planilha** — se você configurou a ponte com o Google Sheets, os envios chegam sozinhos
e você clica em *Buscar na planilha*. Ver [planilha-google.md](planilha-google.md).

---

## Ler os resultados

**Painel** traz o retrato da prova: resultado por amostra com média e mediana, distribuição das
notas, desempenho por critério e calibração de quem avaliou.

**Devolutivas** transforma isso em texto, em três modos:

- **Turma inteira** — como o grupo ordenou as amostras, consenso, critérios que dividiram a
  turma, critérios que não discriminaram, repetibilidade do painel, efeito de ordem.
- **Por pessoa** — severidade, concordância na ordenação, uso da escala, coerência da
  apreciação global, comparação item a item com o consenso.
- **Boletim do semestre** — a pessoa ao longo de todas as aulas, com a evolução da calibração.

Cada tela traz o texto pronto para copiar. [O que cada métrica significa](analises.md).

---

## Devolver ao estudante

*Devolutivas → Folha de QR da turma*: uma grade com um QR por pessoa, cada um com o nome
embaixo. Projete ou imprima — cada estudante lê **apenas o do próprio nome**, e aquele QR
carrega só os dados dele.

Quem ler recebe a devolutiva no aparelho e passa a poder salvar um **PDF com as próprias
respostas mais a devolutiva**.

Para uma pessoa só: *Por pessoa → QR desta pessoa*, ou *PDF desta pessoa* para mandar o arquivo
por e-mail.

---

## Levar para a planilha

*Dados → Planilha*:

- **.xlsx da aula** — quatro abas: Envios (uma linha por avaliação, uma coluna por critério),
  Resumo, Critérios e Devolutivas.
- **.csv da aula** — mesma tabela de envios, para quem prefere texto.
- **.csv de tudo** — formato longo, uma linha por resposta, de todas as aulas. É o melhor
  formato para tabela dinâmica.

E *Dados → Devolutivas → Baixar .txt* traz a devolutiva da turma e de cada pessoa num arquivo só.

---

## Modo professor e modo aluno

O aplicativo abre em **modo aluno** para todo mundo — só a ficha, sem menu nenhum e sem indício
de que existam outras telas.

Você destrava o seu aparelho com **cinco toques no nome "Sala de Degustação"**, no alto da tela,
em até quatro segundos. É permanente para aquele aparelho.

Para conferir o que a turma vê: *Dados → Ver como aluno vê*. Cinco toques no nome para voltar.

Não passe essa instrução à turma.
