export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.15,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const floating = () => {
  return {
    hidden: {
      y: -8,
    },
    show: {
      y: 7,
      transition: {
        ease: "easeInOut",
        duration: 1.05,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };
};

export const itemSUp = () => {
  return {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      },
    }
  }
};
