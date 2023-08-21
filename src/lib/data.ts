import blog from "/public/blog.jpg";
import Search from "/public/searchBoard.jpg";
import Movie from "/public/Movie.jpg";
import NftDrap from "/public/Nft-Drap.jpg";
import RealChat from "/public/RealChat.jpg";
import MuonCapital from "/public/MuonCapital.jpg";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiEthereum } from "react-icons/si";
import React from "react";
export const items = [
  {
    id: 1,
    title: "Blog Application",
    desc: "This application allows users to create, publish, and read blog. Anyone can access and read these blogs.. To enhance the functionality, I have also integrated Nodemailer for email communication within the application",
    image: blog,
    link: "https://blog-app-next-js-liard.vercel.app/",
    language: "TypeScript, NextJs, Tailwindcss, Mongodb, Next-Auth",
  },
  {
    id: 2,
    title: "SearchBoard",
    desc: "evelop a search and filter application Using Next.js,SCSS,TypeScript, I’ve built a Search and Filter Application ,  I developed a feature for filtering by price, review, and brand and created a responsive website using SCSS",
    image: Search,
    link: "https://test-search-seven.vercel.app/",
    language: "TypeScript, ReactJs, SASS, FakerApi",
  },
  {
    id: 3,
    title: "Movie-Search",
    desc: " The Watchlist Application is built using JavaScript, React.js, React Redux, Context API, and CSS. Users can search, add movies to their watchlist, and manage their collections. Movies are fetched from an TMDB API and dynamically displayed on the page, ensuring an up-to-date movie collection",
    image: Movie,
    link: "https://movie-search-lyart.vercel.app/",
    language: "JavaScript, ReactJs, Css, React-Router-Dom, useReducer",
  },

  {
    id: 4,
    title: "Nft Drop Application",
    desc: " The Nft-Drop Collections Application . In this application where user can claim nft with 0.01 Ethers and get a air drop to there address",
    image: NftDrap,
    link: "https://nft-drop-collection-sammed-21.vercel.app/",
    language: "TypeScript, NextJs, Tailwindcss, ThirdWeb,Polygon",
  },
  {
    id: 5,
    title: "Trellos",
    desc: "TaskFlow: Streamlined Task Management with Modern Design. Organize, prioritize, and collaborate effectively by creating, tracking, and listing todos in this user-friendly Trello-inspired application.",
    image: MuonCapital,
    link: "https://muon-capital-3prg.vercel.app/",
    language:
      "JavaScript , Tailwindcss , ReactJs, Redux State Management, contextAPI",
  },
  {
    id: 6,
    title: "Real Chat Application using AppWrite ",
    desc: "This application leverages React, Appwrite, and Tailwind CSS to empower users to seamlessly create accounts, login, and engage in real-time peer-to-peer chat, offering a dynamic and modern communication experience.",
    image: RealChat,
    link: "https://real-chat-blond.vercel.app/",
    language: "JavaScript, ReactJs , appwrite , react-router-dom, TailwindCss",
  },
];

export const experiencesData = [
  {
    title: "Frontend Developer",
    role: "Girnar Sales (Freelance)",
    location: "Girnar Sales (Freelance), Remote",
    date: "Apr 2023 to May 2023",
    description:
    "Developed a bespoke internal tool for Girnar Sales, encompassing essential components like login, customer management, and sales features. Designed user-friendly interfaces, integrated Rest-APIs for data efficiency, and leveraged Next.js, Tailwind CSS, and JavaScript for a modern, responsive web app.",
    skill:
      "Next.js, Tailwind CSS, and JavaScript ,REST API",
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
      "Implemented a bridge mechanism for seamless token transfers between blockchains."
     
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
  "HTML",
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
  // "GraphQL",
  // "Apollo",
  "Express",
  "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
