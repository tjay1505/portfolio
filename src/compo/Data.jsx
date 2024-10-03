import boot from "../assets/skillicon/boot.png";
import css from "../assets/skillicon/css.png";
import fire from "../assets/skillicon/fireb.png";
import gsapI from "../assets/skillicon/gsap.png";
import html from "../assets/skillicon/html.png";
import js from "../assets/skillicon/js.png";
import sass from "../assets/skillicon/sass.png";
import react from "../assets/skillicon/science.png";
import git from "../assets/skillicon/social.png";
import advice from "../assets/projectAsset/advicegen.png";
import book from "../assets/projectAsset/bookbook.png";
import flyo from "../assets/projectAsset/flyo.png";
import sneak from "../assets/projectAsset/sneak.png";
import loop from "../assets/projectAsset/loops.png";
import rate from "../assets/projectAsset/rate.png";
import rps from "../assets/projectAsset/rps.png";

export const ProjectData = [
  {
    id: 1,
    tittle: "Advice generator",
    texts: "get data from an API use fetch Api and build with responsive",
    imgs: advice,
    links: "https://tjay1505.github.io/free-adviser/",
    used: ["HTML", "CSS", "JS", "FETCH API"],
  },
  {
    id: 2,
    tittle: "Landing page",
    texts: "responsive landing page with interactive UI ",
    imgs: book,
    links: "https://tjay1505.github.io/bookbook/",
    used: ["HTML", "CSS", "JS"],
  },
  {
    id: 3,
    tittle: "e-com cart",
    texts: "product view with cart and responsive design",
    imgs: sneak,
    links:'https://tjay1505.github.io/sneakers/',
    used: ["HTML", "CSS", "JS"],
  },
  {
    id: 4,
    tittle: "Landing page",
    texts: "interactive UI with desktop adapted design",
    imgs: flyo,
    links: "https://tjay1505.github.io/Fylo/",
    used: ["HTML", "CSS", "JS"],
  },
  {
    id: 5,
    tittle: "rating component",
    texts: "A smiple rating element with responsive",
    imgs: rate,
    links: "https://tjay1505.github.io/Rating-Compo/",
    used: ["HTML", "CSS", "JS"],
  },
  {
    id: 6,
    tittle: "landing page",
    texts: "responsive landing page from desktop to moblie view",
    imgs: loop,
    links: "https://tjay1505.github.io/loopstudio/",
    used: ["HTML", "CSS", "JS"],
  },
  {
    id: 7,
    tittle: "Rock-Paper-Scissor",
    texts: "A small level game which devloped completely using javascript",
    imgs: rps,
    links: "https://tjay1505.github.io/Rock-Paper-Scissor/",
    used: ["HTML", "CSS", "JS"],
  },
];

export const skills = [
    {
      id: "d1",
      word: "bootstrap",
      logo: boot,
    },
    {
      id: "d3",
      word: "javascript",
      logo: js,
    },
    {
      id: "d4",
      word: "html",
      logo: html,
    },
    {
      id: "d5",
      word: "git",
      logo: git,
    },
    {
      id: "d6",
      word: "sass",
      logo: sass,
    },
    {
      id: "d2",
      word: "gsap",
      logo: gsapI,
    },
    {
      id: "d7",
      word: "react js",
      logo: react,
    },
    {
      id: "d8",
      word: "css",
      logo: css,
    },
    {
      id: "d9",
      word: "firebase",
      logo: fire,
    }
  ];

  const skillLev = [
    { sk: "html", lvl: 95, },
    { sk: "css", lvl: 96 },
    { sk: "javascript", lvl: 90 },
    { sk: "bootstrap", lvl: 85 },
    { sk: "sass", lvl: 91 },
    { sk: "git", lvl: 82 },
    { sk: "react", lvl: 80 },
    { sk: "gsap", lvl: 75 },
    { sk: "firebase", lvl: 70 },
    { sk: "Slick", lvl: 86 },
  ];
 export let fristFive = skillLev.slice(0,5)
 export let lastFive = skillLev.slice(-5)

