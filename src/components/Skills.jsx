import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { techF1, techF2, techB, techD } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, itemSUp } from "../utils/motion";

const Skills = () => {

  return (
    <>
      <motion.div variants={textVariant()} className="sm:mt-16">
        <p className={`${styles.sectionSubText} text-center`}>
          What I have
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills & Technology
        </h2>
      </motion.div>

      <motion.div className={`${styles.container} mt-10 flex sm:flex-row xs:flex-col gap-4`} >
        <motion.div className="flex-1 sm:flex-col sm:flex-nowrap xs:flex-wrap flex gap-2">
          {techB.map((block, idx)=> {
            return <motion.div className={`${styles.item}`} key={idx} variants={itemSUp()} whileHover={{ scale: 1.05 }}>
              <img src={block.icon} alt="icon" className="w-[40px]" />
              {block.name}
            </motion.div>
          })}
        </motion.div>
        <div className={`${styles.innerContainer} flex-[2_2_0%] flex flex-col gap-3 justify-start items-center"`}>
          <p className="bg-point text-white rounded-[8px]">Main Skills</p>
          <article className="flex w-full gap-4 sm:flex-row xs:flex-col">
            <div className="flex-1 sm:flex-col sm:flex-nowrap xs:flex-wrap flex gap-2">
              {techF1.map((block, idx)=> {
              return <motion.div className={`${styles.item}`} key={idx} variants={itemSUp()} whileHover={{ scale: 1.05 }}>
              <img src={block.icon} alt="icon" className="w-[40px]" />
                    {block.name}
                  </motion.div>
              })}
            </div>
            <div className="flex-1 sm:flex-col sm:flex-nowrap xs:flex-wrap flex gap-2">
              {techF2.map((block, idx)=> {
              return <motion.div className={`${styles.item}`} key={idx} variants={itemSUp()} whileHover={{ scale: 1.05 }}>
              <img src={block.icon} alt="icon" className="w-[40px]" />
                  {block.name}
                </motion.div>
              })}
            </div>
          </article>
          
        </div>
        <div className="flex-1 sm:flex-col sm:flex-nowrap xs:flex-wrap flex gap-2">
          {techD.map((block, idx)=> {
            return <motion.div className={`${styles.item} bg-yellow-200 hover:shadow-item2`} key={idx} variants={itemSUp()} whileHover={{ scale: 1.05 }}>
              <img src={block.icon} alt="icon" className="w-[40px]" />
              {block.name}
            </motion.div>
          })}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
