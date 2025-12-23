import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiFirebase,
  SiVercel,
  SiMongodb,
  SiFigma,
} from "react-icons/si"


export const experienceData = [
  {
    id: 1,
    company: "Heven",
    role: "Mern-Stack Developer",
    duration: "April 2025 – Present",
    location: ".",
    logo: "/Hevenlogo.webp",

    description:
      " Heven is an agri-tech startup focused on revolutionizing Clothing quality access in India through a digital platform that connects users with differnt platforms",

    highlights: [
      "Architected and developed a scalable React.js application from scratch",
      "Designed farmer-friendly UI for low-tech users",
      "Built backend systems for products, users, and dealers",
      "Implemented advanced search and filtering for machinery discovery",
      "Collaborated with stakeholders to align tech with business goals",
    ],

   technologies: [
  { icon: FaReact, name: "React", color: "text-cyan-400" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-500" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: SiFirebase, name: "Firebase", color: "text-yellow-400" },
  { icon: SiVercel, name: "Vercel", color: "text-white" },
  { icon: SiMongodb, name: "MongoDB", color: "text-emerald-500" },
],

    images: [
      "/heven1.webp",
      "/heven3.webp",
      "/heven4.webp"
      
    ],

    website: "https://www.heven.in.net/",
  },

  {
    id: 2,
    company: "Sweet bytes",
    role: ".",
    duration: "2025",
    location: "Remote",
    logo: "/sweetbytes.webp",

    description:
      "Worked on A freelance web application with search and Advanced filters.",

    highlights: [
      "Built reusable UI components using React",
      "Improved Lighthouse performance scores",
      "Converted Figma designs into production UI",
    ],

   technologies: [
  { icon: FaReact, name: "React", color: "text-cyan-400" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-500" },
  { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-300" },
  { icon: SiFigma, name: "Figma", color: "text-pink-500" },
],


    website: "https://cakef.vercel.app/",
  },

  // {
  //   id: 3,
  //   company: "Freelance",
  //   role: "Web Developer",
  //   duration: "2023 – 2024",
  //   location: "India",
  //   logo: "/logos/freelance.png",

  //   description:
  //     "Delivered modern websites and dashboards for startups and individuals with a focus on clean UI and performance.",

  //   highlights: [
  //     "Built portfolio and business websites",
  //     "Integrated APIs and authentication",
  //     "Added animations and responsive layouts",
  //   ],

  //   technologies: ["Next.js", "React", "CSS", "JavaScript"],

  //   images: [
  //     "/preview/freelance/site1.png",
  //     "/preview/freelance/site2.png",
  //   ],

  //   website: "#",
  // },
]
