# Sala de Degustação

Aplicativo de análise sensorial para aulas práticas: as fichas no celular do estudante,
o painel da turma no computador do professor e devolutivas individuais geradas a partir
dos próprios dados da prova.

Arquivo único, sem instalação, sem cadastro e sem servidor obrigatório.

### ▶ Executar agora

**https://rgbittencourt.github.io/sala-de-degustacao/**

Abre direto no navegador, no computador ou no celular. É este o endereço para colar em
**Dados → Endereço do aplicativo** e distribuir à turma — como é `https://`, o QR Code, o
leitor de câmera e a planilha do Google funcionam todos.

Para rodar de outras formas — arquivo local, servidor na sua máquina, Moodle —, veja
[como executar](docs/como-executar.md).

---

## O que ele faz

**Três papéis.** O **professor** prepara as aulas e lê os resultados. Os **alunos** preenchem
fichas de degustação. Os **avaliadores** julgam os coquetéis dos alunos numa banca.

**Cinco modelos de ficha**, todos já embutidos — ver [docs/fichas.md](docs/fichas.md).

**Distribuição por QR Code.** O professor projeta ou imprime um QR; quem aponta a câmera cai
direto na ficha certa, sem ver menu nenhum.

**Recolhimento por QR.** O estudante termina, mostra um QR ao professor, e a avaliação entra
no aparelho dele na hora. Há também código por texto e sincronização opcional com uma
planilha do Google.

**Painel e devolutivas.** Média, mediana, desvio, amplitude, distribuição, calibração de quem
avalia, repetibilidade, efeito de ordem, proximidade do gabarito — e textos de devolutiva
prontos para entregar, para a turma e para cada pessoa.
Ver [docs/analises.md](docs/analises.md).

**Boletim em PDF.** Cada estudante guarda no próprio aparelho um PDF com as respostas que deu
e a devolutiva que recebeu. O PDF é gerado pelo próprio aplicativo, sem internet.

---

## Começar em dois minutos

1. Abra **https://rgbittencourt.github.io/sala-de-degustacao/** — ou baixe
   [`sala-degustacao.html`](sala-degustacao.html) e dê dois cliques.
2. O aplicativo abre em **modo aluno** — é assim para todo mundo, por segurança.
3. Toque **cinco vezes no nome "Sala de Degustação"**, no alto da tela. Pronto: modo professor,
   com as seis aulas demonstrativas já carregadas.
4. Vá em **Devolutivas** e percorra as aulas de exemplo.

Esse destravamento vale só para aquele aparelho e é permanente. Para voltar à visão do aluno
e conferir o que a turma enxerga: **Dados → Ver como aluno vê**.

---

## Aulas demonstrativas

Seis aulas com dados completos, cobrindo todas as situações. Carregam sozinhas no primeiro uso
e podem ser recarregadas em **Dados → Aulas demonstrativas**.

| Aula | Ficha | Demonstra |
|---|---|---|
| Brancos de altitude | Oficial 100 pts | ponto de partida da evolução no boletim |
| Tintos de altitude | Oficial 100 pts | amostra repetida às cegas, gabarito, modo treino |
| Validação de descritores | Goethe 0–4 | radares, consenso e poder discriminante |
| Descrição livre | Roteiro | análise qualitativa e textos escritos |
| Ficha técnica completa | Adailton Melo | campos de cabeçalho, tinto e espumante |
| Banca de coquetelaria | Coquetelaria | banca de jurados e autoavaliação |

São 84 avaliações mais 3 autoavaliações, com os mesmos alunos atravessando várias aulas para
que o boletim do semestre tenha evolução real.

---

## Guias

- [Guia do professor](docs/guia-do-professor.md) — preparar, distribuir, recolher, devolver
- [Guia do aluno](docs/guia-do-aluno.md) — uma página, para projetar ou imprimir
- [Guia do avaliador](docs/guia-do-avaliador.md) — para a banca de coquetelaria
- [Os cinco modelos de ficha](docs/fichas.md)
- [O que cada análise significa](docs/analises.md)
- [Como executar e hospedar](docs/como-executar.md)
- [Ligar a planilha do Google](docs/planilha-google.md)

---

## Onde os dados ficam

Tudo é guardado no navegador do próprio aparelho (`localStorage`). Nada é enviado a lugar
nenhum sem uma ação explícita: o estudante decide mostrar o QR ou mandar o código; o professor
decide exportar. A única exceção é a planilha do Google, se você configurar — e aí os dados vão
para a *sua* planilha.

Nenhum serviço de terceiros recebe nome de estudante. O aplicativo não faz chamada de rede
alguma por conta própria.

Para não perder nada ao trocar de navegador ou limpar o histórico, use
**Dados → Cópia de segurança → Exportar**.

---

## Limitações conhecidas

- **O leitor de câmera exige HTTPS.** `getUserMedia` só funciona em contexto seguro. Hospedado
  no Moodle ou em qualquer endereço `https://`, funciona. Aberto por duplo clique (`file://`),
  não — nesse caso use o aplicativo de câmera do próprio celular, que abre o link, ou cole o código.
- **Dentro do claude.ai** as chamadas de rede são bloqueadas e o trecho do endereço depois do
  `#` não chega ao aplicativo. A sincronização com a planilha e os links com aula embutida só
  funcionam com o arquivo hospedado por você. O fluxo por código funciona em qualquer lugar.
- **Encerrar uma aula** afeta só a lista do professor. Sem a planilha ligada, não há como
  alcançar o aparelho de quem já abriu o link.

---

## Créditos

Ver [CREDITOS.md](CREDITOS.md).
