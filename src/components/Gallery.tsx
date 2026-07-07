import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Gallery.css";

import lamen from "../assets/lamen.jpg";
import tempura from "../assets/tempura.jpg";
import onigiri from "../assets/onigiri.jpg";
import guioza from "../assets/guioza.jpg";
import donburi from "../assets/donburi.jpg";

interface GalleryItem {
  kanji: string;
  label: string;
  size: "tall" | "wide" | "normal";
  src?: string; // opcional: quando não houver foto, mostra o kanji
}

// TODO: adicionar as fotos que faltam (donburi, ambiente, bebidas, salão)
const items: GalleryItem[] = [
  { kanji: "麺", label: "Lámen artesanal", size: "tall", src: lamen },
  { kanji: "丼", label: "Donburi da casa", size: "normal", src: donburi },
  { kanji: "天", label: "Tempurá crocante", size: "normal", src: tempura },
  { kanji: "寿", label: "Ambiente", size: "wide" },
  { kanji: "米", label: "Onigiri", size: "normal", src: onigiri },
  { kanji: "餃", label: "Guioza grelhada", size: "tall", src: guioza },
  { kanji: "茶", label: "Bebidas típicas", size: "normal" },
  { kanji: "和", label: "Nosso salão", size: "wide" },
];

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
  }, []);

  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? i : (i - 1 + items.length) % items.length
    );
  }, []);

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  const openItem = openIndex !== null ? items[openIndex] : null;

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <div className="gallery__header">
          <span className="eyebrow">Galeria</span>
          <h2 className="section-heading">
            Sabores que <em>encantam</em>
          </h2>
        </div>

        <motion.div
          className="gallery__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            show: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {items.map((item, i) => (
            <motion.button
              key={item.label}
              className={`gallery__item gallery__item--${item.size}`}
              onClick={() => setOpenIndex(i)}
              variants={{
                hidden: { opacity: 0, scale: 0.94 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              aria-label={`Ver ${item.label}`}
            >
              {item.src ? (
                <img
                  className="gallery__item-img"
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                />
              ) : (
                <span className="gallery__item-kanji" aria-hidden="true">
                  {item.kanji}
                </span>
              )}
              <span className="gallery__item-label">{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openItem && (
          <motion.div
            className="gallery__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              className="gallery__lightbox-close"
              onClick={close}
              aria-label="Fechar"
            >
              <FiX />
            </button>

            <button
              className="gallery__lightbox-nav gallery__lightbox-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Anterior"
            >
              <FiChevronLeft />
            </button>

            <motion.div
              className="gallery__lightbox-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              key={openIndex}
            >
              {openItem.src ? (
                <img
                  className="gallery__lightbox-img"
                  src={openItem.src}
                  alt={openItem.label}
                />
              ) : (
                <span className="gallery__lightbox-kanji" aria-hidden="true">
                  {openItem.kanji}
                </span>
              )}
              <span className="gallery__lightbox-label">{openItem.label}</span>
            </motion.div>

            <button
              className="gallery__lightbox-nav gallery__lightbox-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Próximo"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;