import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import "./Menu.css";

import lamen from "../assets/lamen.jpg";
import tempura from "../assets/tempura.jpg";
import onigiri from "../assets/onigiri.jpg";
import guioza from "../assets/guioza.jpg";
import donburi from "../assets/donburi.jpg";
import udon from "../assets/udon.jpg";

interface Dish {
  name: string;
  jp: string;
  description: string;
  price: string;
  kanji: string;
  badge?: string;
  src?: string;
}

// TODO: dono confirma nomes, descrições e preços reais
const dishes: Dish[] = [
  {
    name: "Lámen",
    jp: "ラーメン",
    description: "Caldo encorpado, macarrão artesanal, ovo marinado e chashu.",
    price: "R$ 60",
    kanji: "麺",
    badge: "Destaque da Quinta",
    src: lamen,
  },
  {
    name: "Donburi",
    jp: "丼",
    description: "Tigela de arroz coberta com carne, cebolinha e ovo.",
    price: "R$ 45",
    kanji: "丼",
    src: donburi,
  },
  {
    name: "Tempurá",
    jp: "天ぷら",
    description: "Camarão e legumes empanados em massa leve e crocante.",
    price: "R$ 38",
    kanji: "天",
    src: tempura,
  },
  {
    name: "Udon",
    jp: "うどん",
    description: "Macarrão grosso em caldo suave, no ponto perfeito.",
    price: "R$ 42",
    kanji: "麺",
    src: udon,
  },
  {
    name: "Onigiri",
    jp: "おにぎり",
    description: "Bolinho de arroz recheado, envolto em alga nori.",
    price: "R$ 18",
    kanji: "米",
    src: onigiri
  },
  {
    name: "Guioza",
    jp: "餃子",
    description: "Pastéis japoneses grelhados, recheio suculento.",
    price: "R$ 30",
    kanji: "餃",
    src: guioza,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Menu = () => {
  return (
    <section className="menu" id="cardapio">
      <div className="container">
        <div className="menu__header">
          <span className="eyebrow">Nosso Cardápio</span>
          <h2 className="section-heading">
            Pratos em <em>destaque</em>
          </h2>
        </div>

        <motion.div
          className="menu__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {dishes.map((dish) => (
            <motion.article
              key={dish.name}
              className="menu__card"
              variants={cardVariants}
            >
              <div className="menu__card-media">
                {dish.badge && (
                  <span className="menu__badge">{dish.badge}</span>
                )}
                {dish.src ? (
                  <img
                    className="menu__card-img"
                    src={dish.src}
                    alt={dish.name}
                    loading="lazy"
                  />
                ) : ( 
                <span className="menu__card-kanji" aria-hidden="true">
                  {dish.kanji}
                </span>
                )}
              </div>

              <div className="menu__card-body">
                <div className="menu__card-top">
                  <h3 className="menu__card-name">
                    {dish.name} <span className="menu__card-jp">{dish.jp}</span>
                  </h3>
                  <span className="menu__card-price">{dish.price}</span>
                </div>
                <p className="menu__card-desc">{dish.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="menu__footer">
          {}
          <a href="https://www.ifood.com.br/delivery/pouso-alegre-mg/restaurante-katana-centro/e861b681-1923-4854-9449-164f49d1ae5d?utm_medium=share" className="btn btn--primary">
            Ver cardápio completo
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;