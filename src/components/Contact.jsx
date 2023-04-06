import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Contact = () => {

  return (
    <div
      className={`xl:mt-10 mb-14 flex flex-col sm:gap-10 xs:gap-6 overflow-hidden`}
    >
      <div>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0)}
        className='flex w-full bg-white sm:p-12 xs:p-6 rounded-[26px] sm:gap-20 xs:gap-10 sm:flex-row xs:flex-col'
      >
       <div className="flex gap-5 items-center" >
        <div className='project w-12 h-12 rounded-full flex justify-center items-center duration-200 bg-point'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-1/2 object-contain' ><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        </div>
        <aside>
          <h4 className="text-point font-[500] text-[21px]">Location</h4>
          <p className="text-secondary text-[16px]">Vancouver, Canada</p>
        </aside>
       </div>

      <a href="mailto:honeyrun5@gmail.com">
      <div className="flex gap-5 items-center email" >
        <div className='project w-12 h-12 rounded-full flex justify-center items-center duration-200 bg-point'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-1/2 object-contain' ><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        </div>
        <aside>
          <h4 className="text-point font-[500] text-[21px]">Email</h4>
          <p className="text-secondary text-[16px]">honeyrun5@gmail.com</p>
        </aside>
       </div>
      </a>

      <div className="flex gap-5 items-center" >
        <div className='project w-12 h-12 rounded-full flex justify-center items-center duration-200 bg-point'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-1/2 object-contain'><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
        </div>
        <aside>
          <h4 className="text-point font-[500] text-[21px]">Phone</h4>
          <p className="text-secondary text-[16px]">+1) 778 636 2554</p>
        </aside>
       </div>
      
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
