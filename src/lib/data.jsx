import React from "react";
//icons
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

// img
import imageClassroom1 from '../assets/imageClassroom1.png';
import imageComic2 from '../assets/imageComic2.png';
import imageNoteapp1 from '../assets/imageNoteapp1.png';
import imageCyto1 from '../assets/imageCyto1.png';

export const links = [
  {
    name: "Home",
    ofset: -200
  },
  {
    name: "About",
    ofset: -340
  },
  {
    name: "Projects",
    ofset: -200
  },
  {
    name: "Skills",
    ofset: -480
  },
  {
    name: "Experience",
    ofset: -280
  },
  {
    name: "Contact",
    ofset: -200
  },
];

export const experiencesData = [
  {
    role: "Student",
    title: "Graduated Ssru University",
    location: "Suan Sunandha Rajabhat",
    description:
      "During my studies, I developed web applications as part of my final project, focusing on MVC architecture, Figma for design, Node.js for RESTful APIs, and database design. Collaborated on bug fixing and performance enhancements.",
    date: "2020 - present",
    tags: ["React","Redux","Bootstrap","Node.js","MySQL","Stored Procedure"],
    icon: React.createElement(LuGraduationCap),
  },
  {
    role: "Intern",
    title: "Full-Stack Developer",
    location: "EdVISORY",
    description:
      "I'm interned as a Full-Stack Developer, focusing on developing Headless CMS web applications. I utilized Next.js to fetch data from WordPress and display it. Technologies involved included Next.js, TypeScript, Tailwind, Redux, WordPress, and GraphQL. Additionally, I gained experience in CI/CD systems and Version Control. I'm ready to apply these skills in a full-time role.",
    date: "2024 Dec-Mar",
    tags: ["Next.js","TypeScript","Tailwind","WordPress","GraphQL","GitLab"],
    icon: React.createElement(CgWorkAlt),
  },
];

export const projectsData = [
  {
    title: "Classroom Reservation",
    description:
    "An online system for booking classrooms developed over 2 years. Using RESTful API, it features a scheduling algorithm to find available rooms for teachers and students.",
    tags: ["React","Redux","Bootstrap", "Ant design","Node.js","MySQL","Stored Procedure","Jsonwebtoken"],
    imageUrl1: imageClassroom1,
    UrlDemo:"",
    UrlGithub:"https://github.com/aoneaonedev2001/classroom-reservation"
  },
  {
    title: "90s ComicMotion ",
    description:
      "Comic App, built with React and Tailwind CSS, offers an immersive comic reading experience. With captivating animations and a dark mode feature.",
    tags: ["React", "Tailwind", "framer-motion"],
    imageUrl1: imageComic2,
    UrlDemo:"",
    UrlGithub:"https://github.com/aoneaonedev2001/comics-app"
  },
  {
    title: "Note App",
    description:
    "Note App offers streamlined note management for efficient organization. Seamlessly integrating various technologies, users can effortlessly create, edit, and delete notes.",
    tags: ["React","Redux","Bootstrap", "Node.js", "Express","MySQL"],
    imageUrl1: imageNoteapp1,
    UrlDemo:"",
    UrlGithub:"https://github.com/aoneaonedev2001/Note-app" 
  },
  {
    title: "Crypto Api",
    description:
    "A public web app that provides access to various cryptocurrency data sources, facilitating easy access to real-time crypto information and analytics.",
    tags: ["React","axios","react router dom"],
    imageUrl1: imageCyto1,
    UrlDemo:"",
    UrlGithub:"https://github.com/aoneaonedev2001/crypto-api"
  },
];
 
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "GitLab",
  "Tailwind",
  "Bootstrap",
  "Ant design",
  "MongoDB",
  "MySQL",
  "Stored Procedure",
  "GraphQL",
  "Java OOP",
  "WordPress",
  "Figma",
  "Postman",
  "Docker"
];
