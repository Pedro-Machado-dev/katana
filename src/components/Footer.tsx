import { SiInstagram, SiIfood } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import "./Footer.css";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <span className="footer__logo-kanji" aria-hidden="true">刀</span>
            <span className="footer__logo-word">
              Katana
              <small>Restaurante do Japão</small>
            </span>
          </a>
          <p className="footer__tagline">
            O único restaurante tradicional japonês do Sul de Minas.
          </p>
        </div>

        <nav className="footer__nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="footer__nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <h4 className="footer__social-title">Siga & peça</h4>
          <div className="footer__social-icons">
            <a href="https://www.instagram.com/katana.restaurante/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <SiInstagram />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="iFood">
              <SiIfood />
            </a>
            <a href="https://linktr.ee/KatanaRestaurante" target="_blank" rel="noopener noreferrer" aria-label="Linktree">
              <FiLink />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Katana · Restaurante do Japão. Todos os direitos reservados.</p>
          <p className="footer__credit">Rua Adalberto Ferraz, 341 — Pouso Alegre, MG</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;