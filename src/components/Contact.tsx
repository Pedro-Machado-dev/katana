import { motion } from "framer-motion";
import { SiIfood, SiInstagram } from "react-icons/si";
import { FiExternalLink, FiLink } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import "./Contact.css";

interface Channel {
  icon: React.ReactNode;
  name: string;
  description: string;
  href: string;
  featured?: boolean;
}

const channels: Channel[] = [
  {
    icon: <SiIfood />,
    name: "iFood",
    description: "Peça delivery com entrega rápida",
    href: "https://www.ifood.com.br/delivery/pouso-alegre-mg/restaurante-katana-centro/e861b681-1923-4854-9449-164f49d1ae5d?utm_medium=share",
    featured: true,
  },
  {
    icon: <IoFastFoodOutline />,
    name: "aiqfome",
    description: "Também disponível para pedidos",
    href: "https://aiqfome.com/MG/pouso-alegre/restaurante-katana",
  },
  {
    icon: <SiInstagram />,
    name: "Instagram",
    description: "@katana.restaurante",
    href: "https://www.instagram.com/katana.restaurante/",
  },
  {
    icon: <FiLink />,
    name: "Todos os links",
    description: "linktr.ee/KatanaRestaurante",
    href: "https://linktr.ee/KatanaRestaurante",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Contact = () => {
  return (
    <section className="contact" id="contato">
      <span className="contact__kanji" aria-hidden="true">
        食
      </span>

      <div className="container contact__inner">
        <div className="contact__header">
          <span className="eyebrow">Peça agora</span>
          <h2 className="section-heading">
            Sabor do Japão <em>até você</em>
          </h2>
          <p className="contact__subtitle">
            Faça seu pedido pelo delivery ou acompanhe as novidades nas redes.
          </p>
        </div>

        <motion.div
          className="contact__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {channels.map((c) => (
            <motion.a
              key={c.name}
              className={`contact__card ${
                c.featured ? "contact__card--featured" : ""
              }`}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
            >
              <span className="contact__card-icon">{c.icon}</span>
              <div className="contact__card-body">
                <h3 className="contact__card-name">{c.name}</h3>
                <p className="contact__card-desc">{c.description}</p>
              </div>
              <FiExternalLink className="contact__card-arrow" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;