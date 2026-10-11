# Como executar

O aplicativo é **um único arquivo HTML**. Não tem instalação, dependência, build nem servidor
obrigatório. Tudo o que ele precisa — inclusive as bibliotecas de gerar e ler QR Code — está
dentro do arquivo.

**Já está publicado e funcionando em
https://rgbittencourt.github.io/sala-de-degustacao/** — se você só quer usar, é esse o endereço.
O resto desta página é para quem precisa de outra forma de execução.

Há quatro formas de executar, da mais simples à mais completa. A diferença entre elas é o que
funciona em cada uma.

| | Abrir o arquivo | Servidor local | GitHub Pages | Moodle / Drive |
|---|---|---|---|---|
| Preencher fichas | sim | sim | sim | sim |
| Painel e devolutivas | sim | sim | sim | sim |
| PDF e planilha | sim | sim | sim | sim |
| QR com a aula embutida | não¹ | sim | **sim** | sim |
| Ler QR pela câmera | não² | sim³ | **sim** | sim |
| Sincronizar com planilha Google | não | sim | **sim** | sim |

¹ O QR é gerado, mas quem escaneia abre o aplicativo sem a aula carregada. Use o código colado.
² A câmera exige contexto seguro (HTTPS ou localhost).
³ Em `http://localhost` funciona; em `http://192.168.x.x` (celular na mesma rede), não.

---

## 1 · Abrir o arquivo (o mais rápido)

Baixe `sala-degustacao.html` e dê **dois cliques**. Abre no navegador padrão.

Serve para conhecer o aplicativo, preparar aulas, ver o painel, gerar devolutivas, PDFs e
planilhas. Não serve para distribuir à turma, porque o endereço `file://` existe só no seu
computador.

---

## 2 · Servidor local (para testar com o celular)

Útil para ensaiar a aula inteira antes, com um celular de verdade na mão.

Entre na pasta onde está o arquivo e rode:

```bash
python3 -m http.server 8000
```

No seu computador, abra `http://localhost:8000/sala-degustacao.html`.

Para alcançar pelo celular, descubra o IP da máquina na rede:

```bash
ipconfig getifaddr en0
```

e abra `http://SEU-IP:8000/sala-degustacao.html` no celular — os dois precisam estar no mesmo
wi-fi. Nessa forma o QR com aula embutida funciona, mas a câmera não, porque `http://` com IP
não é contexto seguro.

Para encerrar o servidor: `Ctrl+C`.

---

## 3 · GitHub Pages (recomendado para usar em aula)

Dá um endereço `https://` estável e gratuito, e com isso **tudo funciona**: QR, câmera e
sincronização com a planilha.

Com este repositório já no GitHub:

1. Abra o repositório em `github.com/rgbittencourt/sala-de-degustacao`.
2. **Settings → Pages**.
3. Em *Source*, escolha **Deploy from a branch**.
4. Em *Branch*, escolha **main** e a pasta **/ (root)**. Clique em **Save**.
5. Espere um ou dois minutos. A página mostra o endereço publicado.

O aplicativo fica em:

```
https://rgbittencourt.github.io/sala-de-degustacao/sala-degustacao.html
```

Copie esse endereço e cole em **Dados → Endereço do aplicativo**, dentro do aplicativo. É ele
que entra nos QR Codes e nos links que você distribui.

> O repositório precisa ser **público** para o GitHub Pages funcionar no plano gratuito.
> Se ele for privado, use a opção 4.

---

## 4 · Moodle, Google Drive ou outro site

**Moodle** — envie `sala-degustacao.html` como recurso do tipo *Arquivo* e marque para abrir
em janela nova. O endereço do recurso é o que você cola em *Endereço do aplicativo*.

**Google Drive** — o Drive não serve HTML como página; ele baixa o arquivo. Funciona para
distribuir o arquivo, não para abrir direto.

**Qualquer hospedagem estática** — Netlify, Vercel, Cloudflare Pages, a hospedagem do câmpus.
Basta ser `https://`.

---

## Depois de publicar: conferir em cinco passos

1. Abra o endereço publicado no computador. Destrave o modo professor (cinco toques no nome).
2. **Dados → Endereço do aplicativo**: cole o endereço publicado e salve.
3. Abra uma aula → **Distribuir**. Confira se o link mostrado começa com o endereço certo.
4. Aponte a câmera do celular para o QR. Deve abrir direto na ficha, sem menus.
5. Preencha uma amostra, conclua, e leia o QR do celular em **Painel → Ler QR**.

Se o passo 4 abrir o aplicativo sem a aula, o endereço em *Dados* está errado.
Se o passo 5 não abrir a câmera, o endereço não é `https://`.

---

## Atualizar para uma versão nova

Substitua o arquivo `sala-degustacao.html` e pronto. **Os dados não se perdem**: ficam no
navegador, separados do arquivo. Aulas de exemplo de versões anteriores são trocadas
automaticamente; as suas aulas não são tocadas.

Antes de uma atualização importante, vale fazer **Dados → Cópia de segurança → Exportar**.

---

## Executar a partir do código-fonte

Não há código-fonte separado: o arquivo publicado **é** o código. Para editar, abra
`sala-degustacao.html` em qualquer editor de texto. A estrutura interna está comentada em
português, nesta ordem:

```
modelos de ficha · estado e persistência · estatística · cálculo da ficha
códigos, links e QR · planilha · renderização da ficha · capa · navegação
aulas · avaliar · painel · análise · devolutivas · exportação · dados
diálogos · interação · gráficos · repetibilidade · autoavaliação · ordem
gabarito · boletim · leitor de QR · PDF · dados de exemplo · início
```

Depois de editar, basta recarregar a página no navegador.
