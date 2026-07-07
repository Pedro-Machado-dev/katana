import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiNavigation } from "react-icons/fi";
import "./Location.css";

// TODO: dono confirma o ponto exato / link do Google Meu Negócio
const ADDRESS = "Rua Adalberto Ferraz, 341, 2º Andar — Pouso Alegre, MG";
const MAPS_QUERY = encodeURIComponent(
  "Rua Adalberto Ferraz, 341, Pouso Alegre - MG"
);
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_ROUTE = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;

const hours = [
  { day: "Terça a Sexta", time: "11h – 14h", label: "Almoço" },
  { day: "Quinta e Sexta", time: "19h – 22h", label: "Jantar" },
  { day: "Quarta", time: "à noite", label: "Delivery" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Location = () => {
  return (
    <section className="location" id="localizacao">
      <div className="container">
        <div className="location__header">
          <span className="eyebrow">Localização</span>
          <h2 className="section-heading">
            Venha nos <em>visitar</em>
          </h2>
        </div>

        <div className="location__grid">
          {/* Infos */}
          <motion.div
            className="location__info"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div className="location__block" variants={fadeUp}>
              <span className="location__block-icon">
                <FiMapPin />
              </span>
              <div>
                <h3 className="location__block-title">Endereço</h3>
                <p className="location__block-text">{ADDRESS}</p>
              </div>
            </motion.div>

            <motion.div className="location__block" variants={fadeUp}>
              <span className="location__block-icon">
                <FiClock />
              </span>
              <div>
                <h3 className="location__block-title">Horário de funcionamento</h3>
                <ul className="location__hours">
                  {hours.map((h) => (
                    <li key={h.day} className="location__hour">
                      <span className="location__hour-label">{h.label}</span>
                      <span className="location__hour-day">{h.day}</span>
                      <span className="location__hour-time">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.a
              className="btn btn--primary location__cta"
              href={MAPS_ROUTE}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
            >
              <FiNavigation />
              Ver rotas
            </motion.a>
          </motion.div>

          {/* Mapa */}
          <motion.div
            className="location__map"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title="Localização do Restaurante Katana"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;