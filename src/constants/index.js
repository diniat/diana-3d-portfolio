import { hoooman, henry } from "../assets/images";
import {
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
  mySql,
  postgres,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: mySql,
    name: "MySQL",
    type: "Database",
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
    imageUrl: postgres,
    name: "PostgreSQL",
    type: "Database",
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
      "Demonstrated exceptional adaptability by quickly mastering new technologies and tools as required, ensuring seamless integration into existing workflows.",
      "Translated intricate design concepts into reality by bringing to life complex animations using plain CSS, Framer Motion, and Tailwind CSS.",
      "Demonstrated knowledge of SEO best practices, optimizing web pages for increased search engine visibility and organic traffic.",
      "Translated designs into tangible WordPress pages, ensuring seamless integration of design and functionality.",
      "Successfully identified and resolved critical bugs in production environments, enhancing system reliability and user experience.",
    ],
  },
  {
    title: "Full Stack Teaching Assistant",
    company_name: "Henry Bootcamp, Buenos Aires - Argentina",
    icon: henry,
    iconBg: "#ffff00",
    date: "January 2023 - March 2023",
    points: [
      "Coordinate a group of new joining students throughout the whole bootcamp experience.",
      "Guide students in the first steps of the course and clarify their doubts.",
      "Provide assistance in solving exercises and encourage group teamwork (Pair Programming).",
      "Suggest ideas to improve the Bootcamp processes.",
      "Promote collaboration and build community within the students.",
    ],
  },
];

export const socialLinks = [
  /* {
    name: "Contact",
    iconUrl: contact,
    link: "https://diana-3d-portfolio.vercel.app/contact",
  }, */
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
    image: "/static/2.png",
    type: "Saas Personal Project",
    title: "Dinius AI Saas Application",
    description:
      "AI SaaS Platform with five AI tools. Powered by the Next.js 13 App Router, the platform is not only efficient but also user-centric. Modern UX/UI Design, responsive for all devices. Made using a rich palette of web development technologies like React, Tailwind, Prisma, MySQL, Clerk, and more.",
    link: "https://dinius-ai.vercel.app/",
    github: "https://github.com/diniat/saas-ai-app",
    hidden: false,
    gHidden: false,
  },
  {
    image: "/static/1.png",
    type: "Frontend Personal Project",
    title: "Hoo Bank",
    description:
      "Hoo Bank is a personal front end project with modern UI/UX design, focused on responsive web design for all devices. The website consists of an impressive 'hero' section, high-quality assets and gradients, business statistics, reusable feature sections with call-to-action buttons, testimonials, and more. Technologies used: Javascript, React, Tailwind CSS.",
    link: "https://hoo-bank-personal-project.vercel.app/",
    github: "https://github.com/diniat/HooBank-personalProject",
    hidden: false,
    gHidden: false,
  },
  {
    image: "/static/3.png",
    type: "Front End Freelance Project",
    title: "Ideas Tech",
    description:
      "Front end freelance project crafted to align with a modern and intuitive Adobe XD design. This project was engineered using a cutting-edge tech stack, including Next.js, React, TypeScript, and Tailwind CSS. Prioritized responsive design to ensure seamless functionality across various devices. The architecture was built with a focus on reusable components, emphasizing clean, maintainable code. ",
    link: "",
    github: "",
    hidden: true,
    gHidden: true,
  },
  {
    image: "/static/4.png",
    type: "Personal Project",
    title: "Animated Portfolio",
    description:
      "Interactive portfolio built using Next.js and React and Tailwind CSS. The animations are handled by Framer Motion, adding an engaging and modern touch to the interface. The design is not only visually appealing but also fully responsive, ensuring a consistent and accessible experience across all devices. A notable feature of this portfolio is the inclusion of both light and dark modes, catering to user preferences and enhancing accessibility.",
    link: "https://dianatobe-dev.vercel.app/",
    github: "",
    hidden: false,
    gHidden: true,
  },
];
