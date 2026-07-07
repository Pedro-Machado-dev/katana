import { motion } from "framer-motion";
import { GiKatana, GiChopsticks } from "react-icons/gi";
import { PiBowlFood } from "react-icons/pi";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const pillars = [
  {
    icon: <GiKatana />,
    title: "Tradição",
    text: "Receitas fiéis à autêntica culinária japonesa, preparadas como no Japão.",
  },
  {
    icon: <PiBowlFood />,
    title: "Qualidade",
    text: "Ingredientes selecionados e frescor em cada prato que sai da cozinha.",
  },
  {
    icon: <GiChopsticks />,
    title: "Autenticidade",
    text: "O único restaurante tradicional japonês do Sul de Minas Gerais.",
  },
];

const About = () => {
  return (
    <section className="about" id="sobre">
      <div className="about__inner container">
        <motion.div
          className="about__text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            Sobre o Katana
          </motion.span>

          <motion.h2 className="section-heading" variants={fadeUp}>
            Uma experiência<br />
            <em>verdadeiramente japonesa</em>
          </motion.h2>

          <motion.p className="about__paragraph" variants={fadeUp}>
            O Katana nasceu para trazer a Pouso Alegre o sabor real do Japão.
            Somos o único restaurante tradicional japonês do Sul de Minas,
            unindo técnica, respeito às receitas originais e ingredientes
            escolhidos com cuidado.
          </motion.p>

          <motion.p className="about__paragraph" variants={fadeUp}>
            Do lámen fumegante ao donburi caprichado, cada prato carrega a
            filosofia de que sabor e tradição estão em cada detalhe.
          </motion.p>

          <motion.div className="about__pillars" variants={fadeUp}>
            {pillars.map((p) => (
              <div key={p.title} className="about__pillar">
                <span className="about__pillar-icon">{p.icon}</span>
                <div>
                  <h3 className="about__pillar-title">{p.title}</h3>
                  <p className="about__pillar-text">{p.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Kanji editorial — sem caixa, com selo hinomaru atrás */}
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="about__hinomaru" aria-hidden="true" />
          <span className="about__visual-kanji" aria-hidden="true">
            和
          </span>
          <span className="about__visual-caption">和 — harmonia</span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;