import { FaReact, FaNodeJs } from "react-icons/fa"
import {
  SiMongodb,
  SiVercel,
  SiN8N,
  SiRazorpay,
  SiGoogle,
  SiMeta,
} from "react-icons/si"




export const projectsData = [
  {
    title: "E-Commerce Platform HEVEN",
    description:
      "A modern, full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    features: [
      "Integrated payment gateway with Stripe and PayPal support",
      "Auto recommanded  Algorith With filter Sections",
      "Mobile-responsive design with progressive web app capabilities",
    ],
    image: "/Heven.webp",
   techStack: [
  { icon: FaReact, name: "React", color: "text-cyan-400" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: SiMongodb, name: "MongoDB", color: "text-emerald-500" },
  { icon: SiRazorpay, name: "Razorpay", color: "text-sky-400" },
  { icon: SiVercel, name: "Vercel", color: "text-white" },
],

    liveLink: "https://www.heven.in.net/",
  },
  {
    title: "Automated WhatsApp to website update system",
    description:
      "This feature enables real-time updates from WhatsApp directly to the website. It uses n8n workflows, MongoDB, and APIs to automate content publishing. Admins can update content without logging into the website dashboard.",
    features: [
      "Real-time content updates directly from WhatsApp",
      "No admin dashboard required for updates",
      "Secure automation using n8n workflows",
      "Automatic storage of content in MongoDB",
    ],
    image: "/n8n.webp",
   techStack: [
  { icon: SiN8N, name: "n8n", color: "text-orange-400" },
  { icon: SiMongodb, name: "MongoDB", color: "text-emerald-500" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: SiMeta, name: "Meta API", color: "text-blue-500" },
  { icon: SiGoogle, name: "Google API", color: "text-red-400" },
],

    liveLink: "https://github.com/RevanthPasham/n8n-workflows",
  },
  {
    title: "Sweet bytes",
    description:
      "A Modern webistes to integrate the Mern Stack Applications.",
    features: [
      "Responsive for both mobile and desktop Versions",
      "Search And filter Sections",
      "Auto Recommended alogorith",
      
    ],
    image: "/Cake.webp",
   techStack: [
  { icon: FaReact, name: "React", color: "text-cyan-400" },
  { icon: SiMongodb, name: "MongoDB", color: "text-emerald-500" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { icon: SiVercel, name: "Vercel", color: "text-white" },
],

    liveLink: "https://cakef.vercel.app/",
  },
]
