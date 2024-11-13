import { CgWorkAlt } from "react-icons/cg";

import React from "react";
import blog from "/public/portfolio.jpg";
import Search from "/public/searchBoard.jpg";
import Movie from "/public/Movie.jpg";
import NftDrap from "/public/Nft-Drap.jpg";
import AiPrompt from "/public/AiPrompt.png";
import RealChat from "/public/RealChat.jpg";
import stakex from "/public/stakex.png";
import Store from "/public/store.png";
import ScatchBook from "/public/Scatch-book.png";
import sportmusic from "/public/spotmusic.png";
import chart from "/public/Screenshot (99).png";
import CovidTraker from "/public/Screenshot (98).png";
import MuonCapital from "/public/MuonCapital.jpg";
import { PiStack } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiEthereum } from "react-icons/si";
export const links = [
  {
    title: "Home",
    url: "#home",
    hash: "home",
  },
  {
    title: "About",
    url: "#about",
    hash: "about",
  },
  {
    title: "Skills",
    url: "#skills",
    hash: "skills",
  },
  {
    title: "Experience",
    url: "#experience",
    hash: "experience",
  },
  {
    title: "Projects",
    url: "#projects",
    hash: "projects",
  },
  {
    title: "Contact",
    url: "#contact",
    hash: "contact",
  },
  // {
  //   title: "Blog",
  //   url: "/blog",
  //   hash: "blog",
  // },
  // {
  //   id: 6,
  //   title: "Dashboard",
  //   url: "/dashboard",
  // },
  // export const links = [
  //   {
  //     name: "Home",
  //     hash: "#home",
  //   },
  //   {
  //     name: "About",
  //     hash: "#about",
  //   },
  //   {
  //     name: "Projects",
  //     hash: "#projects",
  //   },
  //   {
  //     name: "Skills",
  //     hash: "#skills",
  //   },
  //   {
  //     name: "Experience",
  //     hash: "#experience",
  //   },
  //   {
  //     name: "Contact",
  //     hash: "#contact",
  //   },
  // ] as const;
] as const;
export const items = [
  {
    id: 20,
    title: "StakeX Dapp",
    desc: "Developed StakeX, a decentralized application (dApp) where users can stake tokens and earn rewards in return.• Built an intuitive and user-friendly interface, providing clear visuals to help users easily navigate and understandthe staking process.",
    image: stakex,
    link: "https://stake-x-jet.vercel.app/staking",
    language:
      "Next.js,ether.js,Smart Contract, Ethereum , Solidity,Zustand ,Typescript, Tailwindcss, NodeJs",
    github: "https://github.com/sammed-21/stakeX",
  },
  {
    id: 10,
    title: "Scatch-Book Application ",
    desc: "Scatch-book is a application where Users can draw, save, and collaborate in real-time, fostering creative connections with friends",
    image: ScatchBook,
    link: "https://scatch-book.vercel.app/",
    language:
      "Next.js ,Typescript, Tailwindcss, Redux-ToolKit , expressJs,NodeJs, Socket.io",
    github: "https://github.com/sammed-21/scatch-book",
  },
  {
    id: 11,
    title: "SpotMusic : music applicatoin",
    desc: "Built an application where user can sign up and app their own song and listen to the songs, have implemented the stripe payment for premium users",
    image: sportmusic,
    link: "https://spot-music-pi.vercel.app/",
    language:
      "Next.js ,Typescript, Tailwindcss, Zustand, expressJs ,NodeJs, Postgresql, supabase ,stripe payment",
    github: "https://github.com/sammed-21/spotMusic",
  },
  {
    id: 1,
    title: "E-Commerce Applicatoin ",
    desc: "E-commerce website where user can add items to cart and filter the items make checkout of the items",
    image: Store,
    link: "https://totalitycorp-frontend-challenge-navy-tau.vercel.app/",
    language:
      "React ,Typescript, Tailwindcss, Recoil , Next-Auth , google OAuth",
    github: "https://github.com/sammed-21/TotalityStore-ecommerce-website",
  },
  {
    id: 3,
    title: "Covid Case Traker Application | NextJs",
    desc: "Built a Covid traker which show the number of covid case accoring to the city, state, country show data using the Map",
    image: CovidTraker,
    link: "https://account-management-woad.vercel.app/charts-maps",
    language:
      "typescript , reactjs, chartjs, react-redux, tailwindcss, react-router-v6, react-query",
    github: "https://github.com/sammed-21/contact-management",
  },

  // {
  //   id: 4,
  //   title: "Ai Prompt Application | NextJs",
  //   desc: "By using debouncing and Google OAuth for user authentication, users may publish and filter out their own content.",
  //   image: AiPrompt,
  //   link: "https://ai-prompt-next-application.vercel.app/",
  //   language: "Next ,Js, Tailwindcss, Mongodb, Next-Auth , google OAuth",
  //   github: "https://github.com/sammed-21/AiPrompt-nextApplication",
  // },

  // {
  //   id: 7,
  //   title: "Movie-Search",
  //   desc: " The Watchlist Application is built using JavaScript, React.js, React Redux, Context API, and CSS. Users can search, add movies to their watchlist, and manage their collections. Movies are fetched from an TMDB API and dynamically displayed on the page, ensuring an up-to-date movie collection",
  //   image: Movie,
  //   link: "https://movie-search-lyart.vercel.app/",
  //   language: "JavaScript, ReactJs, Css, React-Router-Dom, useReducer",
  //   github: "https://github.com/sammed-21/movie-search",
  // },
] as const;

export const experiencesData = [
  {
    title: "Frontend Web3 developer",
    role: "zeru finance",
    location: "Bangalore",
    date: "Apr 2024 to present",
    description:
      "• Redesigned the entire application to enhance user experience and functionality, including integrating new features such as the leaderboard for the protocol. • Fixed critical bugs related to calling data from the blockchain, utilizing Ether.js and GraphQL to effectively retrieve and manage blockchain data. • mproved the application’s performance, raising the performance rating from 40 to 70. • Developed and managed a service using Express.js and MongoDB, where users earn points based on specific business logic.• Worked on the subgraph, adding support for new features and smart contracts, deploying them, and integrating them into the frontend.• Collaborated with the team to ensure the accuracy, functionality, and adherence to best practices in the application’s development.",
    skill:
      "Next.js,Typescript, Node.js, Tailwind CSS, and JavaScript ,solidty,Erc721, sub graph",
    icon: React.createElement(PiStack),
  },
  {
    title: "Full Stack Developer Intern",
    role: "Web3Scope",
    location: "Hydarabad",
    date: "Oct 2023 to present",
    description:
      "Designed and implemented essential reuse-able components in Next.Js ,Typescript .Boosted engagement with creative solutions, showcasing robust problem-solving and teamwork in a startup setting",
    skill:
      "Next.js,Typescript, Node.js, Express, React-Query(TanStack), Mongodb Tailwind CSS, and JavaScript ,REST API",
    icon: React.createElement(PiStack),
  },
  {
    title: "Frontend Developer",
    role: "Girnar Sales ",
    location: "Girnar Sales, Remote (Freelance)",
    date: "Apr 2023 to May 2023",
    description:
      "Developed a bespoke internal tool for Girnar Sales, encompassing essential components like login, customer management, and sales features. Designed user-friendly interfaces, integrated Rest-APIs for data efficiency, and leveraged Next.js, Tailwind CSS, and JavaScript for a modern, responsive web app.",
    skill: "Next.js, Tailwind CSS, and JavaScript ,REST API",
    icon: React.createElement(FaReact),
  },
  {
    title: "Blockchain Developer Intern",
    role: "TechSteck Solutions Pvt. LLP",
    date: "Sep 2022 to Dec 2022",
    location: "TechSteck Solutions Pvt. LLP, Remote",
    description: [
      "Contributed to the development of the Stake sSPELL Bridge Smart Contract.",
      "Developed the smart contract using Solidity for staking sSPELL tokens on various blockchains.",
      "Implemented a bridge mechanism for seamless token transfers between blockchains.",
    ],
    skill:
      "Solidity (smart contract), Bridges, Ethereum, Blockchain Technology, ReactJs",
    icon: React.createElement(SiEthereum),
  },
  {
    title: "CSE Graduate",
    location: "Hubli,Karnataka",
    description:
      "I graduated form KLE Institute of Technology.As Computer Science and Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2019 to May 2023",
  },
];

export const skillsData = [
  "Solidty",
  "Ether.js",
  "web3.js",
  "redux",
  "optimization",
  "Defi",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  // "Apollo",
  "Express",
  "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
