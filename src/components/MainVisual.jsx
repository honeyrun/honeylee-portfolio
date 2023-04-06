import { styles } from "../styles";
import { BeehiveCanvas } from "./canvas";

const Arrow = () => (
  <>
  <div className="absolute lg:bottom-[28%] lg:left-[44%] xs:bottom-[30%] xs:left-[16%]">
    <div className="rotate-[7deg]">
      <svg xmlns="http://www.w3.org/2000/svg" width="107.111" height="142.003" viewBox="0 0 107.111 142.003">
        <path id="Path_1" data-name="Path 1" d="M435.642,441.51S415.73,374.7,487.85,359.666c35.141-2.187,49.2,19.884,36.337,36.973-12.991,13.454-31.588,10.952-42.358-13.359s-10.785-60.122,27.6-73.956c18.707-6.908,24.863-3.228,24.863-3.228" transform="translate(-430.611 -302.617)" strokeLinecap="round" strokeWidth="4" className='arrow'/>
      </svg>
    </div>
    <p className='arrow text-[20px] font-[500] text-secondary'>Click me!</p>
  </div>
  </>
)

const MainVisual = () => {
  return (
    <section className={`relative w-full h-[120vh] mx-auto`}>
      <div
        className={`absolute inset-0 lg:top-[18%] xs:top-[15%] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.HeadText}`}>
            Hello, I am
          </h1>
          <h1 className={`${styles.HeadText}`}>
             <span className='text-[#9d60f8]'>Honey</span><span className='lg:text-[66px] sm:text-[48px] xs:text-[40px] text-[30px] '>🍯</span> Lee
          </h1>
          <p className={`${styles.SubText} mt-8 text-black-100 `}>
            Creative thinking web developer, <br/>
            I love making my ideas into real products
          </p>
        </div>
        <Arrow />
      </div>
      <BeehiveCanvas/>
      <div className={`absolute inset-0 lg:top-[54%] xs:top-[46%] w-full pointer-events-none max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-6`}>
        <a href="https://www.linkedin.com/in/honey-lee-464756244/" target="_blank" className="pointer-events-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`${styles.icon}`}><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
        <a href="https://github.com/honeyrun" target="_blank"  className="pointer-events-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className={`${styles.icon}`}><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
        <a href="https://www.behance.net/honeylee2" target="_blank" className="pointer-events-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`${styles.icon}`}><path d="M186.5 293c0 19.3-14 25.4-31.2 25.4h-45.1v-52.9h46c18.6.1 30.3 7.8 30.3 27.5zm-7.7-82.3c0-17.7-13.7-21.9-28.9-21.9h-39.6v44.8H153c15.1 0 25.8-6.6 25.8-22.9zm132.3 23.2c-18.3 0-30.5 11.4-31.7 29.7h62.2c-1.7-18.5-11.3-29.7-30.5-29.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM271.7 185h77.8v-18.9h-77.8V185zm-43 110.3c0-24.1-11.4-44.9-35-51.6 17.2-8.2 26.2-17.7 26.2-37 0-38.2-28.5-47.5-61.4-47.5H68v192h93.1c34.9-.2 67.6-16.9 67.6-55.9zM380 280.5c0-41.1-24.1-75.4-67.6-75.4-42.4 0-71.1 31.8-71.1 73.6 0 43.3 27.3 73 71.1 73 33.2 0 54.7-14.9 65.1-46.8h-33.7c-3.7 11.9-18.6 18.1-30.2 18.1-22.4 0-34.1-13.1-34.1-35.3h100.2c.1-2.3.3-4.8.3-7.2z"/></svg></a>
      </div>
    </section>
  );
};

export default MainVisual;
