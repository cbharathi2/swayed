"use client";

import { useMemo } from "react";
import { motion, type MotionValue } from "framer-motion";

type CoffeeBeansOverlayProps = {
  beanOpacity: MotionValue<number>;
};

type Bean = {
  top: string;
  left: string;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  rotateFrom: number;
  rotateTo: number;
  size: "bean-small" | "bean-medium" | "bean-large";
};

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export default function CoffeeBeansOverlay({ beanOpacity }: CoffeeBeansOverlayProps) {
  const beans = useMemo<Bean[]>(() => {
    const count = 42;

    return Array.from({ length: count }, (_, idx) => {
      const top = 4 + idx * 2.2 + pseudoRandom(idx + 1) * 2.2;
      const left = 6 + (idx * 17) % 88 + pseudoRandom(idx + 7) * 6;
      const duration = 5.2 + pseudoRandom(idx + 11) * 2.6;
      const delay = pseudoRandom(idx + 19) * 4.8;
      const driftX = (pseudoRandom(idx + 23) - 0.5) * 20;
      const driftY = 10 + pseudoRandom(idx + 29) * 12;
      const rotateFrom = -20 + pseudoRandom(idx + 31) * 25;
      const rotateTo = rotateFrom + 16 + pseudoRandom(idx + 37) * 24;

      const scaleValue = pseudoRandom(idx + 41);
      const size: Bean["size"] = scaleValue > 0.68 ? "bean-large" : scaleValue > 0.32 ? "bean-medium" : "bean-small";

      return {
        top: `${Math.min(top, 98)}%`,
        left: `${Math.min(left, 95)}%`,
        duration,
        delay,
        driftX,
        driftY,
        rotateFrom,
        rotateTo,
        size,
      };
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      {beans.map((bean, idx) => (
        <motion.div
          key={`${bean.top}-${bean.left}-${idx}`}
          className={`coffee-bean ${bean.size}`}
          style={{
            top: bean.top,
            left: bean.left,
            opacity: beanOpacity,
          }}
          animate={{
            x: [0, bean.driftX, 0],
            y: [0, -bean.driftY, 0],
            rotate: [bean.rotateFrom, bean.rotateTo, bean.rotateFrom],
          }}
          transition={{
            duration: bean.duration,
            delay: bean.delay,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <span className="coffee-bean__seam" />
        </motion.div>
      ))}
    </div>
  );
}
