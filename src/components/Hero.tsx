import { motion } from "framer-motion";
import { SiIfood } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      {/* Fundo: gradiente + glow. Depois trocamos por foto real do restaurante. */}
      <div className="hero__bg" />
      <div className="hero__glow" />
      <span className="hero__kanji" aria-hidden="true">
        刀
      </span>

      <motion.div
        className="hero__content container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="eyebrow" variants={item}>
          Único japonês tradicional do Sul de Minas
        </motion.span>

        <motion.h1 className="hero__title" variants={item}>
          Sabor, tradição e qualidade
          <br />
          em <em>cada detalhe</em>
        </motion.h1>

        <motion.p className="hero__subtitle" variants={item}>
          A autêntica cozinha japonesa em Pouso Alegre. Lámen, donburi,
          tempurá e pratos preparados com respeito à tradição.
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          {}
          <a href="https://www.ifood.com.br/delivery/pouso-alegre-mg/restaurante-katana-centro/e861b681-1923-4854-9449-164f49d1ae5d?utm_medium=share" className="btn btn--primary">
            <SiIfood />
            Peça pelo iFood
          </a>
          <a href="#cardapio" className="btn btn--ghost">
            Ver cardápio
            <FiArrowRight />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        className="hero__scroll"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">Explore</span>
      </motion.a>
    </section>
  );
};

export default Hero;