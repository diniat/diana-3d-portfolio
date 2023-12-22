import { hoooman, first, second, third, fourth } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  trpc,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  reactNative,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: trpc,
    name: "tRPC",
    type: "Backend",
  },
  {
    imageUrl: reactNative,
    name: "React Native",
    type: "Mobile Development",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Hoooman Studio, Vancouver - Canada",
    icon: hoooman,
    iconBg: "#0d0d0d",
    date: "August 2023 - Present",
    points: [
      "Spearheaded the front-end development for diverse websites, meticulously following Figma designs to create visually stunning and user-friendly interfaces.",
      "Successfully developed a Webflow ecommerce website from inception to completion.",
      "Established and maintained forms across various websites, optimizing user interaction and data collection processes.",
      "Responded to client requests by seamlessly integrating full-stack features, such as HubSpot API integration, Hotjar integration, etc.",
      "Actively contributed to React Native projects, showcasing versatility in mobile application development.",
      "Collaborated on full-stack projects with diverse technology stacks, encompassing Next.js (both page router and app router), React, TypeScript, tRPC, Sanity, Node.js, and Tailwind CSS.",
      "Translated intricate design concepts into reality by bringing to life complex animations using plain CSS, Framer Motion, and Tailwind CSS.",
      "Demonstrated knowledge of SEO best practices, optimizing web pages for increased search engine visibility and organic traffic.",
      "Translated Figma designs into tangible WordPress pages, ensuring seamless integration of design and functionality.",
      "Successfully identified and resolved critical bugs in production environments, enhancing system reliability and user experience.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/diniat",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/diana-atobe/",
  },
];

export const projects = [
  {
    image: second,
    type: "Saas Personal Project",
    title: "Dinius AI Saas Application",
    description:
      "AI SaaS Platform with five AI tools. Powered by the Next.js 13 App Router, the platform is not only efficient but also user-centric. Modern UX/UI Design, responsive for all devices. Made using a rich palette of web development technologies like React, Tailwind, Prisma, MySQL, Clerk, and more.",
    link: "https://dinius-ai.vercel.app/",
    github: "https://github.com/diniat/saas-ai-app",
    hidden: false,
  },
  {
    image: first,
    type: "Frontend Personal Project",
    title: "Hoo Bank",
    description: "",
    link: "https://hoo-bank-personal-project.vercel.app/",
    github: "https://github.com/diniat/HooBank-personalProject",
    hidden: false,
  },
  {
    image: third,
    type: "Front End Freelance Project",
    title: "Ideas Tech",
    description: "",
    link: "",
    github: "",
    hidden: true,
  },
  {
    image: fourth,
    type: "3D Personal Project",
    title: "3D Portfolio",
    description: "",
    link: "",
    github: "",
    hidden: true,
  },
];
