import dazzchat from "./assets/dazzchat.png";
import corrtex from "./assets/corrtex.jpg";
import portfolio from "./assets/portfolio.png"

export const projects = [
  {
    id: 1,
    name: "Dazzchat UI Design",
    category: "UI Design",
    image: dazzchat,
    link: "dazzchat",
  },
  {
    id: 2,
    name: "Corrtex",
    category: "UI Design",
    image: corrtex,
    link: "corrtex",
  },
  {
    id: 3,
    name: "Portfolio",
    category: "Front End",
    image: portfolio,
    link: "portfolio",
  },
  {
    id: 4,
    name: "Word Counter App",
    category: "Front End",
    image: dazzchat,
    link: "word-counter",
  },
];



export const projectInfo = [
  {
    id: 1,
    name: "Dazzchat",
    subDesc: " SaaS product for seamless website communication.",
    image: dazzchat,
    about:
      "Dazzchat is a Software as a Service (SaaS) product designed to facilitate seamless communication between website owners and their visitors. It offers a simple yet effective solution for sending and receiving messages directly on the website, enhancing user engagement and customer support.",
    role: ["UI design", "Wireframe", "Prototyping", "Interactive Design"],
    website: "https://dazzchat.vercel.app",
    link: "dazzchat",
  },
  {
    id: 2,
    name: "Corrtex",
    subDesc: "Writing assistant software.",
    image: corrtex,
    about:
      "Corrtex is a privacy-focused writing assistant that offers smart and simple support to enhance texts. It seamlessly integrates with popular platforms such as Word, Outlook, Gmail, Google Docs, and Apple Mail, providing an efficient and secure writing experience.",
    role: ["UI design", "Wireframe", "Prototyping", "Interactive Design"],
    website: "https://corrtex.nl/",
    link: "corrtex",
  },
  {
    id: 3,
    name: "Portfolio",
    image: portfolio,
    about: "My portfolio reflects my ability to turn complex problems into intuitive, engaging solutions, with a focus on performance, accessibility, and modern web standards. I combine creativity with technical expertise to bring ideas to life.",
    role: ["React.js", "Tailwind CSS", "JavaScript", "Figma", "UI Design"],
    website: "https://ronishkatuwal.com.np",
    link: "portfolio"

  }
];
