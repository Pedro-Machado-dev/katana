<div align="center">

# 刀 Katana · Restaurante do Japão

**Site institucional para o único restaurante tradicional japonês do Sul de Minas.**

Uma landing page moderna, elegante e responsiva, desenvolvida para apresentar o restaurante, seu cardápio e canais de pedido — com foco em performance e experiência mobile.

[🌐 Ver site ao vivo](https://restaurantekatana.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)

</div>

---

## 📖 Sobre o projeto

O **Katana** é um restaurante japonês localizado em Pouso Alegre – MG. Este projeto entrega um site comercial completo, pensado para transmitir a identidade da marca — tradicional, elegante e autêntica — e direcionar os visitantes aos canais de pedido (iFood, aiqfome e redes sociais).

O design parte de uma paleta **preto, vermelho e branco**, tipografia serifada japonesa (*Shippori Mincho*) e um conceito visual de **kanjis decorativos** que surgem conforme o usuário rola a página, reforçando a identidade cultural do restaurante.

---

## ✨ Funcionalidades

- **Design responsivo** com abordagem *mobile-first* (celular, tablet, notebook e desktop)
- **Animações suaves** com Framer Motion (entradas no scroll, menu mobile, transições)
- **Camada de kanjis dinâmicos** que aparecem progressivamente durante a rolagem
- **Galeria com lightbox** navegável por teclado (setas e ESC)
- **Cardápio em destaque** com fotos reais dos pratos
- **Carrossel de depoimentos** com troca automática
- **Mapa interativo** de localização (Google Maps embed) com botão de rotas
- **SEO completo** — meta tags, Open Graph (preview no WhatsApp/redes) e dados estruturados (Schema.org)
- **Acessibilidade** — labels ARIA, navegação por teclado e respeito a `prefers-reduced-motion`

---

## 🛠️ Tecnologias

| Categoria | Ferramentas |
|-----------|-------------|
| **Framework** | React 19 |
| **Linguagem** | TypeScript |
| **Build** | Vite |
| **Animações** | Framer Motion |
| **Ícones** | React Icons |
| **Estilização** | CSS puro (variáveis CSS, Flexbox, Grid) |
| **Deploy** | Vercel |

---

## 📂 Estrutura do projeto

```
src/
├── components/
│   ├── Navbar.tsx        # Navegação fixa + menu mobile
│   ├── Hero.tsx          # Seção principal
│   ├── About.tsx         # Sobre o restaurante
│   ├── Menu.tsx          # Cardápio em destaque
│   ├── Gallery.tsx       # Galeria com lightbox
│   ├── Testimonials.tsx  # Depoimentos
│   ├── Location.tsx      # Localização + mapa
│   ├── Contact.tsx       # Canais de pedido
│   ├── Footer.tsx        # Rodapé
│   └── KanjiLayer.tsx    # Kanjis decorativos no scroll
├── assets/               # Imagens dos pratos
├── App.tsx               # Composição das seções
├── index.css             # Tokens de design + estilos globais
└── main.tsx              # Ponto de entrada
```

---

## 🚀 Como rodar localmente

Pré-requisitos: **Node.js** (versão 18 ou superior) e **npm**.

```bash
# Clone o repositório
git clone https://github.com/Pedro-Machado-dev/katana.git

# Entre na pasta
cd katana

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build
```

---

## 🎨 Decisões de design

- **Paleta preto/vermelho/branco** — inspirada na identidade visual real do restaurante, remete à tradição japonesa e ao contraste elegante do fine dining.
- **Kanjis progressivos** — em vez de imagens genéricas, o site usa caracteres japoneses (刀 食 和 麺 味) como elementos decorativos que aparecem durante a rolagem, criando movimento sem poluição visual.
- **Mobile-first** — todo o layout foi construído primeiro para o celular e depois adaptado para telas maiores, já que o público-alvo acessa majoritariamente pelo smartphone.

---

## 👨‍💻 Autor

Desenvolvido por **Pedro Machado**

[![Portfólio](https://img.shields.io/badge/Portfólio-000000?style=flat&logo=vercel&logoColor=white)](https://pedromachado.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-machado-dev/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Pedro-Machado-dev)

---

<div align="center">

Feito com dedicação para o **Restaurante Katana** · Pouso Alegre, MG

</div>
