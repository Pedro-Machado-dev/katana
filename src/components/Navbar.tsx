import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a href="#inicio" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__kanji" aria-hidden="true">
            刀
          </span>
          <span className="navbar__wordmark">
            Katana
            <small>Restaurante do Japão</small>
          </span>
        </a>

        {/* Links desktop */}
        <nav className="navbar__links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* TODO: trocar href pelo link real do iFood (Linktree do Katana) */}
        <a href="#pedidos" className="btn btn--primary navbar__cta">
          Peça Online
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.aside
              className="navbar__mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <button
                className="navbar__close"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                <FiX />
              </button>

              <span className="navbar__mobile-kanji" aria-hidden="true">
                刀
              </span>

              <nav className="navbar__mobile-links">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.06 }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href="#pedidos"
                  className="btn btn--primary navbar__mobile-cta"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + links.length * 0.06 }}
                >
                  Peça Online
                </motion.a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;