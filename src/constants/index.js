import {
 
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  vuejs,
  jquery,
  mysql,
  php,
  photoshop,
  illust,
  adobeXD,
  aftereffects,

  javaGame,
  subnetCal,
  doughnut,

  moreSub,
  graduation,
  vigenere,
  cms,
  
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const techF1 = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];
const techF2 = [
  {
    name: "Jquery",
    icon: jquery,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
];

const techB = [
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MYSQL",
    icon: mysql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git Github",
    icon: git,
  },
];

const techD = [
  {
    name: "Adobe XD",
    icon: adobeXD,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illust,
  },
  {
    name: "After Effect",
    icon: aftereffects,
  },
];

const projects = [
  {
    name: "Online Doughnut Shop",
    description:
      "Vue-based SPA web for a local doughnut shop. Maintaining stateful cart data and filter and search for menu. Also, customers can order customized doughnut",
    tags: ["Vue", "SCSS", " E-Commerce"],
    image: doughnut,
    source_code: "https://github.com/honeyrun/DoughnutShopRemake",
    live_demo: "https://honey-project-maple-doughnut.netlify.app/"
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: ["Javascript", "Jquery", "CSS"],
  //   image: jobit,
  //   source_code: "https://github.com/",
  // },
  {
    name: "Subnet Calculator",
    description:
      "Given the requied number of hosts or subnets, get the prefix /subnet mask and calculate subnet result",
    tags: ["Javascript", "Jquery", "Bootstrap"],
    image: subnetCal,
    source_code: "https://github.com/honeyrun/subnetCalculator",
    live_demo: "https://honeyrun.github.io/subnetCalculator/"
  },
  {
    name: "Pacman Mini Game",
    description:
      "Simple javascript game inspired by 'Pacman'. Implemented gameloop to manipulate the timer and overall game flow",
    tags: ["Javascript", "Jquery", "CSS"],
    image: javaGame,
    source_code: "https://github.com/honeyrun/Javascript_MiniGame",
    live_demo: "https://honeyrun.github.io/Javascript_MiniGame/"
  },
];

const otherProjects = [
  {
    name: "Student Management Dashboard (CMS)",
    description:
      "Connect React app to MySQl DB to manage student data / 4 functions : get, add, delete, edit data",
    category: "web",
    tags: ["React", "PHP", "MySQL"],
    image: cms,
    source_code: "https://github.com/LuhPaglia/final-project-beavers",
    live_demo: "https://youtu.be/hgPjiwBJk-g"
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   category: "game",
  //   tags: ["Javascript", "Jquery", "CSS"],
  //   image: jobit,
  //   source_code: "https://github.com/",
  // },
  {
    name: "Vigenere Cipher",
    description:
      "Implemented Vigenere encryption method with PHP and accessing filesystem to write and upload the file",
    category: "code",
    tags: ["PHP"],
    image: vigenere,
    source_code: "https://github.com/honeyrun/vigenereCipher",
  },
  {
    name: "Graduation Exhibition Website Design",
    description:
      "Responsible for making exhibition website's header video & poster visual",
    category: "web",
    tags: ["Adobe XD", "Illustrator", "C4D"],
    image: graduation,
    design: "https://www.behance.net/gallery/160621831/SWU-Graduation-Project-Website-and-Application-Design",
    live_demo: "http://www.swudmgraduate.com/2021/main",
  },
  {
    name: "MoreSub App Design",
    description:
      "Personal app design project that suggests a solution to solve the problem of managing many subscription services",
    category: "ux",
    tags: ["Adobe XD", "Illustrator", "After Effect"],
    image: moreSub,
    design: "https://www.behance.net/gallery/160622525/MORESUB-Concept-App-Design-UI-UX-personal-project",
    live_demo: "",
  },
];


export { techF1, techF2, techB, techD, projects, otherProjects };