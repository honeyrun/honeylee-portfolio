import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { otherProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code,
  live_demo,
  design
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="sm:w-[31%] xs:w-full">
      <Tilt
        options={{
          max: 20,
          scale: 1,
          speed: 200,
        }}
        className='bg-white p-5 rounded-2xl w-full'
      >
        <div className='relative w-full h-[210px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end gap-2 m-3 card-img_hover'>
            {
                source_code != null &&
              <div
                onClick={() => window.open(source_code, "_blank")}
                className='project bg-black-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer duration-200 hover:bg-point'
              >
                <svg className='h-1/2 object-contain' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
              </div>
            }
             {
                design != null &&
              <div
                onClick={() => window.open(design, "_blank")}
                className='project bg-black-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer duration-200 hover:bg-point'
              >
                <svg className='h-1/2 object-contain' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"/></svg>
              </div>
            }
            {
                live_demo != null &&
              <div
                onClick={() => window.open(live_demo, "_blank")}
                className='project bg-black-200 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer duration-200 hover:bg-point'
              >
                <svg className='h-1/2 object-contain'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              </div>
            }
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-black-200 font-bold text-[22px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] sm:block xs:hidden'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag}`}
              className={`text-[14px] text-point`}
            >
              #{tag}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const MoreWorks = () => {

  const [catgory, setCategory] = useState(otherProjects);

  const filter = (cat) => {
    let filtered = otherProjects.filter((el) => {
      return el.category === cat;
    });
    setCategory(filtered);
  }

  return (
    <>
      <motion.div variants={textVariant()} className='w-full flex flex-col items-center justify-center mt-14'>
        <p className={`${styles.sectionSubText} `}>More work</p>
        <h2 className={`${styles.sectionHeadText}`}>Other Projects</h2>
      </motion.div>

      <div className='w-full flex items-center justify-center text-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my additional skills through various projects. Each project is connected to either source code or video to demonstrate how it works.
        </motion.p>
      </div>
      <div className="flex w-full justify-center mt-4 sm:gap-3 xs:gap-2">
        <div
          onClick={() => {setCategory(otherProjects);}}
          className='project bg-yellow-200 px-4 text-white font-[500] h-10 rounded-[10px] flex justify-center items-center gap-2 cursor-pointer duration-200 hover:bg-point'
        >
          All
        </div>
        <div
          onClick={()=>{filter("web")}}
          className='project bg-yellow-200 px-4 text-white font-[500] h-10 rounded-[10px] flex justify-center items-center gap-2 cursor-pointer duration-200 hover:bg-point'
        >
          Web
        </div>
        <div
          onClick={()=>{filter("code")}}
          className='project bg-yellow-200 px-4 text-white font-[500] h-10 rounded-[10px] flex justify-center items-center gap-2 cursor-pointer duration-200 hover:bg-point'
        >
          Code
        </div>
        <div
          onClick={()=>{filter("game")}}
          className='project bg-yellow-200 px-4 text-white font-[500] h-10 rounded-[10px] flex justify-center items-center gap-2 cursor-pointer duration-200 hover:bg-point'
        >
          Game
        </div>
        <div
          onClick={()=>{filter("ux")}}
          className='project bg-yellow-200 px-4 text-white font-[500] h-10 rounded-[10px] flex justify-center items-center gap-2 cursor-pointer duration-200 hover:bg-point'
        >
          UX
        </div>
      </div>

      <div className='sm:mt-12 xs:mt-8 flex flex-wrap gap-8'>
        {catgory.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(MoreWorks, "");
