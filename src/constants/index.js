import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  supabase,
  git,
  figma,
  interlay,
  sih,
  quasar,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "InterLay",
    icon: interlay,
    iconBg: "#383E56",
    date: "October 2024 - November 2024",
    points: [
      "Designed and developed modular, responsive user interfaces using React and Tailwind CSS, ensuring scalability and cross-device compatibility.",
      "Implemented dynamic state management and API integrations with React hooks, enabling real-time data synchronization and seamless user interactions.",
      "Streamlined workflows by creating reusable custom hooks and components, enhancing code efficiency and maintainability.",
      "Collaborated with the backend team to integrate APIs and debug complex issues, ensuring a stable and high-performing application.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Smart India Hackathon",
    icon: sih,
    iconBg: "#E6DEDD",
    date: "August 2024 - September 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Quasar Hackathon",
    icon: quasar,
    iconBg: "#383E56",
    date: "March 2024 - April 2024",
    points: [
      "Designed an intuitive and responsive user interface using HTML, CSS, and JavaScript, ensuring accessibility and seamless navigation for the Employee Attendance Tracking System.",
      "Collaborated with team members during the hackathon to translate project requirements into functional front-end features under tight deadlines",
      "Developed cross-browser-compatible UI components and optimized layouts to enhance user experience and application performance.",
      "Contributed innovative design solutions and resolved UI challenges effectively, demonstrating adaptability and teamwork in a high-pressure environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was impossible to make a website as beautiful as our product, but Kartik proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kartik does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kartik optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Health Guardian",
    description:
      "HealthGuardian is a health management system designed to empower users to track their health proactively. Through an AI-driven platform, users receive personalized insights and early risk assessments, enabling better preventive care and management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/InternLay-HG/Data_Doctors",
  },
  {
    name: "The World Wise",
    description:
      "The World Wise App demonstrates my expertise in React by implementing state management with hooks, custom hooks for reusability, and responsive design with Tailwind CSS. It features efficient navigation, real-time data handling, and optimized performance for a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/2017kartik/The-World-Wise-App",
  },
  {
    name: "React Quiz",
    description:
      "The React Quiz highlights my proficiency in React through dynamic state management, custom hooks, and an intuitive component-based structure. With responsive design and seamless navigation, the app ensures an engaging quiz experience with real-time feedback and efficient performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/2017kartik/The-React-Quiz",
  },
];

export { services, technologies, experiences, testimonials, projects };
