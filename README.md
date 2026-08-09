# Velun Tech

Site institucional da **Velun Tech**, agência que crio para oferecer sites profissionais a pequenos negócios (comércio, prestadores de serviço, autônomos). O projeto também funciona como portfólio ativo: cada cliente fechado vira um case real mostrado aqui.

🔗 **No ar:** [veluntech.netlify.app](https://veluntech.netlify.app/)

---

## 💡 Sobre o projeto

Pequenos negócios costumam depender só de rede social pra existir online — o que limita credibilidade e dificulta que o cliente encontre informação básica (preço, endereço, contato). A Velun Tech resolve isso com sites simples, rápidos e sob medida, sem pacote genérico e sem enrolação.

Esse repositório é o site institucional da própria agência: landing page que explica a proposta, mostra o processo de trabalho, exibe projetos demonstrativos e serve de vitrine pra fechar novos clientes — com contato direto via WhatsApp em cada ponto de conversão.

## ✅ Status

Landing page completa e publicada. Pequenos ajustes de conteúdo (cases reais, textos) acontecem conforme a agência ganha clientes de verdade.

## ✨ Seções

- **Hero** — proposta de valor com diagrama animado das frentes que um site resolve
- **Abordagem** — por que contratar a Velun Tech (4 pilares)
- **Demonstração** — comparação interativa "sem site" vs "com Velun Tech", com mockups visuais
- **Processo** — as 5 etapas do projeto, com abas clicáveis e detalhamento
- **Portfólio** — projetos demonstrativos (hamburgueria, clínica, barbearia)
- **Investimento** — faixas de preço por tipo de projeto
- **Sobre** — quem constrói o site (Danilo Machado), com contato e redes
- **Velun ZAP** — cross-promo do produto irmão (assistente de IA para WhatsApp)
- **CTA final + rodapé**

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica
- **CSS3** — variáveis (design tokens), grid, flexbox, animações, scroll reveal
- **JavaScript** (vanilla) — interações sem framework, sem dependências

Sem build, sem bibliotecas externas, sem backend — só HTML, CSS e JS puros, hospedado como site estático.

## 📂 Estrutura

```
Velun-Tech/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── logo.svg
    ├── favicon.ico
    ├── favicon-16.png
    ├── favicon-32.png
    ├── favicon-48.png
    ├── apple-touch-icon.png
    ├── og-image.jpg          # imagem de prévia (WhatsApp, redes sociais)
    ├── danilo.jpg
    ├── demo-hamburgueria.jpg
    ├── demo-clinica.jpg
    ├── demo-barbearia.jpg
    └── velunzap-logo.png
```

## ▶️ Rodando localmente

Não tem build nem dependências. Só abrir o `index.html` no navegador, ou subir um servidor local simples:

```bash
python3 -m http.server 8000
```

Depois é só acessar `http://localhost:8000`.

## 🚀 Deploy

Publicado no **Netlify**, conectado direto a este repositório no GitHub — qualquer `git push` na branch principal gera um novo deploy automaticamente. Não há passo manual de build (site estático puro).

Tags Open Graph e Twitter Card já configuradas em `index.html`, com imagem de prévia própria (`assets/og-image.jpg`), então o link renderiza bonito quando compartilhado no WhatsApp ou redes sociais.

## 🔗 Projeto relacionado

**[Velun ZAP](https://velunzap.netlify.app/)** — assistente de IA para atendimento automático via WhatsApp, produto irmão da Velun Tech, divulgado no rodapé deste site.

---

Feito por [Danilo Machado](https://github.com/danmachado3105) — estudante de Engenharia de Software.
