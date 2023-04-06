import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { hello } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, floating, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={fadeIn("", "", 0.3, 1)}>

        <figure className="flex lg:flex-row sm:flex-row xs:flex-col mt-4 lg:gap-16  xs:gap-8 lg:items-center mx-auto">
          <img className={`${styles.profile} shadow-profile`} />
          <figcaption className="relative">
            <aside className="absolute lg:top-[-10%] lg:left-[33%] lg:w-[128px] xs:top-[-6%] xs:left-[54%] xs:w-[100px]">
              <motion.img src={hello} alt="hello" variants={floating()}/>
            </aside>
            <motion.div variants={textVariant(0.3)}>
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>About Me</h2>
            </motion.div>
            <p
              className='mt-4 text-secondary text-[18px] max-w-3xl leading-relaxed'
            >
               I'm a skilled web developer with other various project experiences like App design and development, Game making, and motion graphics While doing those projects, I was fascinated by the process of making my 
               <span className={styles.highlight}> creative ideas</span> into real products. I excel in designing and optimizing workflow of the websites that offer a smooth user experience. 
            </p>
            <p
              className='mt-4 text-secondary text-[18px] max-w-3xl leading-relaxed'
            >
               I am  <span className={styles.highlight}>self-motivated</span> to make ‘
               <span className={styles.highlight}>user-friendly </span> and also aesthetic web products’ and also like solving logical problems. In addition, a <span className={styles.highlight}>good team player </span> who can fully contribute and adapt quickly to achieve the goal</p>
          </figcaption>
        </figure>
        
      </motion.div>
     
    </>
  );
};

export default SectionWrapper(About, "about");
