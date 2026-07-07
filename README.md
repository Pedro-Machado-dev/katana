<div align="center">

# 刀 Katana · Japanese Restaurant

**Marketing website for the only traditional Japanese restaurant in southern Minas Gerais, Brazil.**

A modern, elegant, and fully responsive landing page built to showcase the restaurant, its menu, and ordering channels — with a strong focus on performance and mobile experience.

[🌐 Live site](https://restaurantekatana.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)

</div>

---

## 📖 About

**Katana** is a Japanese restaurant located in Pouso Alegre, Brazil. This project delivers a complete commercial website designed to convey the brand's identity — traditional, elegant, and authentic — and to guide visitors toward the ordering channels (iFood, aiqfome, and social media).

The design is built around a **black, red, and white** palette, a Japanese serif typeface (*Shippori Mincho*), and a visual concept of **decorative kanji** that fade in as the user scrolls, reinforcing the restaurant's cultural identity.

---

## ✨ Features

- **Responsive design** with a *mobile-first* approach (phone, tablet, laptop, and desktop)
- **Smooth animations** with Framer Motion (scroll-triggered reveals, mobile menu, transitions)
- **Dynamic kanji layer** that fades in progressively while scrolling
- **Gallery with lightbox**, navigable by keyboard (arrow keys and ESC)
- **Featured menu** showcasing real photos of the dishes
- **Auto-playing testimonials carousel**
- **Interactive location map** (Google Maps embed) with a directions button
- **Full SEO** — meta tags, Open Graph (WhatsApp/social previews), and structured data (Schema.org)
- **Accessibility** — ARIA labels, keyboard navigation, and `prefers-reduced-motion` support

---

## 🛠️ Tech stack

| Category | Tools |
|----------|-------|
| **Framework** | React 19 |
| **Language** | TypeScript |
| **Build** | Vite |
| **Animations** | Framer Motion |
| **Icons** | React Icons |
| **Styling** | Plain CSS (custom properties, Flexbox, Grid) |
| **Deployment** | Vercel |

---

## 📂 Project structure

```
src/
├── components/
│   ├── Navbar.tsx        # Fixed navigation + mobile menu
│   ├── Hero.tsx          # Main hero section
│   ├── About.tsx         # About the restaurant
│   ├── Menu.tsx          # Featured menu
│   ├── Gallery.tsx       # Gallery with lightbox
│   ├── Testimonials.tsx  # Testimonials
│   ├── Location.tsx      # Location + map
│   ├── Contact.tsx       # Ordering channels
│   ├── Footer.tsx        # Footer
│   └── KanjiLayer.tsx    # Decorative scroll kanji
├── assets/               # Dish images
├── App.tsx               # Section composition
├── index.css             # Design tokens + global styles
└── main.tsx              # Entry point
```

---

## 🚀 Running locally

Requirements: **Node.js** (version 18 or higher) and **npm**.

```bash
# Clone the repository
git clone https://github.com/Pedro-Machado-dev/katana.git

# Enter the folder
cd katana

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

To generate a production build:

```bash
npm run build
```

---

## 🎨 Design decisions

- **Black/red/white palette** — inspired by the restaurant's real visual identity, evoking Japanese tradition and the elegant contrast of fine dining.
- **Progressive kanji** — instead of generic imagery, the site uses Japanese characters (刀 食 和 麺 味) as decorative elements that appear during scroll, adding movement without visual clutter.
- **Mobile-first** — the entire layout was built for mobile first and then scaled up to larger screens, since the target audience primarily browses on smartphones.

---

## 👨‍💻 Author

Developed by **Pedro Machado**

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat&logo=vercel&logoColor=white)](https://pedromachado.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-machado-dev/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Pedro-Machado-dev)

---

<div align="center">

Built with care for **Katana Restaurant** · Pouso Alegre, Brazil

</div>
