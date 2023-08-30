import React from "react";
import { motion } from "framer-motion";

const transition = (Component: React.FC) => {
  const TransitionComponent: React.FC = () => (
    <>
      <Component />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );

  // Définir un nom d'affichage explicite pour le composant
  TransitionComponent.displayName = `Transition(${
    Component.displayName || Component.name || "Component"
  })`;

  return React.memo(TransitionComponent);
};

export default transition;
