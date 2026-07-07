import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./Testimonials.css";

interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}

// TODO: substituir por avaliações REAIS e autorizadas (Google, iFood etc.)
const testimonials: Testimonial[] = [
  {
    quote:
      "Ambiente acolhedor, preço justo e comida maravilhosa. O atendimento é primoroso do começo ao fim.",
    author: "Cliente Katana",
    detail: "Avaliação local",
  },
  {
    quote:
      "O melhor lámen da região, sem dúvida. Dá pra sentir o cuidado em cada detalhe do prato.",
    author: "Cliente Katana",
    detail: "Avaliação local",
  },
  {
    quote:
      "Finalmente um japonês tradicional em Pouso Alegre. Virou meu restaurante favorito da cidade.",
    author: "Cliente Katana",
    detail: "Avaliação local",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const go = useCallback((i: number) => {
    setIndex((i + testimonials.length) % testimonials.length);
  }, []);

  // Troca automática a cada 6s
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="testimonials" id="depoimentos">
      <span className="testimonials__kanji" aria-hidden="true">
        味
      </span>

      <div className="container testimonials__inner">
        <span className="eyebrow">Depoimentos</span>
        <h2 className="section-heading testimonials__heading">
          O que dizem <em>sobre nós</em>
        </h2>

        <div className="testimonials__stage">
          <FaQuoteLeft className="testimonials__quote-mark" />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              className="testimonials__quote"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="testimonials__stars" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonials__text">“{current.quote}”</p>
              <footer className="testimonials__author">
                <span className="testimonials__author-name">
                  {current.author}
                </span>
                <span className="testimonials__author-detail">
                  {current.detail}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${
                i === index ? "testimonials__dot--active" : ""
              }`}
              onClick={() => go(i)}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;