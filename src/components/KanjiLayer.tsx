import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./KanjiLayer.css";

const kanjis = [
  { char: "和", meaning: "harmonia", side: "left", top: 18, size: 22 },
  { char: "食", meaning: "comida", side: "right", top: 34, size: 26 },
  { char: "麺", meaning: "macarrão", side: "left", top: 52, size: 24 },
  { char: "刀", meaning: "katana", side: "right", top: 68, size: 28 },
  { char: "味", meaning: "sabor", side: "left", top: 84, size: 22 },
] as const;

const KanjiLayer = () => {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(1);

  useEffect(() => {
    const update = () => {
      setScrollY(window.scrollY);
      setDocHeight(
        document.documentElement.scrollHeight - window.innerHeight || 1
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // progresso da rolagem: 0 (topo) até 1 (fim da página)
  const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);

  return (
    <div className="kanji-layer" aria-hidden="true">
      {kanjis.map((k) => {
        // ponto da página (0 a 1) em que este kanji está centralizado
        const anchor = k.top / 100;
        // distância entre a rolagem atual e o "lar" do kanji
        const distance = Math.abs(progress - anchor);
        // quanto mais perto, mais visível (fade suave)
        const visible = distance < 0.22;
        const opacity = visible ? 0.06 : 0;

        return (
          <motion.span
            key={k.char}
            className={`kanji-layer__char kanji-layer__char--${k.side}`}
            style={{
              top: `${k.top}%`,
              fontSize: `${k.size}rem`,
            }}
            animate={{
              opacity,
              y: visible ? 0 : 30,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {k.char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default KanjiLayer;