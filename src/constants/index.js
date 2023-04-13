import {
 
  javascript,
  html,
  reactjs,
  nodejs,
  git,
  vuejs,
  angular,
  jquery,
  mysql,
  php,
  photoshop,
  illust,
  adobeXD,
  aftereffects,

  javaGame,
  doughnut,
  movie,

  moreSub,
  graduation,
  hangVan,
  cms,
  subnetCal,
  game1,
  game2,
  
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
    name: "HTML / CSS",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Jquery",
    icon: jquery,
  },
];
const techF2 = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Angular",
    icon: angular,
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
  {
    name: "Spiderman Movie Website",
    description:
      "Movie 'Spider-Man: No Way Home' promotion website. This is my first website in that I designed all the pages from scratch and implemented a prototype website",
    tags: ["Javascript", "Jquery", "Photoshop"],
    image: movie,
    source_code: "https://github.com/honeyrun/Spiderman_promotion_web",
    live_demo: "https://honeyrun.github.io/Spiderman_promotion_web/",
    design: "https://www.behance.net/gallery/160622229/SPIDERMAN-Movie-Promotion-Web-Design-personal-project"
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
    live_demo: "https://drive.google.com/file/d/128hy88OCCGLvAe7Hb5XVOOvr5tgO8jQ0/view?usp=share_link"
  },
  {
    name: "HangVan Website",
    description:
      "Responsive website to introduce recent events and famous places in Vancouver.",
    category: "web",
    tags: ["HTML", "SCSS"],
    image: hangVan,
    source_code: "https://github.com/honeyrun/Hangvan_remake",
    live_demo: "https://honeyrun.github.io/Hangvan_remake/index.html"
  },
  {
    name: "Subnet Calculator",
    description:
      "Given the requied number of hosts or subnets, get the prefix /subnet mask and calculate subnet result",
    category: "web",
    tags: ["Javascript", "Jquery", "Bootstrap"],
    image: subnetCal,
    source_code: "https://github.com/honeyrun/subnetCalculator",
    live_demo: "https://honeyrun.github.io/subnetCalculator/"
  },
  {
    name: "Graduation Exhibition Website Design",
    description:
      "Responsible for making exhibition website's header video & poster visual",
    category: "ux",
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
    // live_demo: "",
  },
  {
    name: "RPG Dragon Unity Game",
    description:
      "Personal app design project that suggests a solution to solve the problem of managing many subscription services",
    category: "game",
    tags: ["(C#)", "Unity", "Photoshop"],
    image: game2,
    source_code: "https://github.com/honeyrun/RPG_dragon",
    live_demo: "https://youtu.be/TvPRPepOvcA",
  },  {
    name: "Paint It Unity Game",
    description:
      "Personal app design project that suggests a solution to solve the problem of managing many subscription services",
    category: "game",
    tags: ["(C#)", "Unity"],
    image: game1,
    source_code: "https://github.com/honeyrun/PaintIt_unity",
    live_demo: "https://youtu.be/m6i5c7i3jVc",
  },
];


export { techF1, techF2, techB, techD, projects, otherProjects };
