import {
  Header,
  Profile,
  About,
  Footer,
  Skills,
  Experience,
  Work,
} from "@/components/layout";
import { useRef } from "react";
export default function Home() {
  const about = useRef(null);
  const handleClick1 = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };
  const work = useRef(null);
  const handleClick2 = () => {
    work.current?.scrollIntoView({ behavior: "smooth" });
  };
  const testimonials = useRef(null);
  const handleClick3 = () => {
    testimonials.current?.scrollIntoView({ behavior: "smooth" });
  };
  const contact = useRef(null);
  const handleClick4 = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };

  const skill = [
    {
      name: "Javascript",
      img: "/icon-javscript.svg",
    },
    {
      name: "Typescript",
      img: "/icon-typescript.svg",
    },
    {
      name: "React",
      img: "/icon-react.svg",
    },
    {
      name: "Next.js",
      img: "/icon-nextjs.svg",
    },
    {
      name: "Node.js",
      img: "/icon-nodejs.svg",
    },
    {
      name: "Express.js",
      img: "/icon-express.svg",
    },
    {
      name: "Nest.js",
      img: "/icon-nest.svg",
    },
    {
      name: "Socket.io",
      img: "/icon-socket.svg",
    },
    {
      name: "PostgreSQL",
      img: "/icon-postgresql.svg",
    },
    {
      name: "MongoDB",
      img: "/icon-mongodb.svg",
    },
    {
      name: "Sass / Scss",
      img: "/icon-sass.svg",
    },
    {
      name: "Tailwindcss",
      img: "/icon-tailwindcss.svg",
    },
    {
      name: "Figma",
      img: "/icon-figma.svg",
    },
    {
      name: " Cypress",
      img: "/icon-cypress.svg",
    },
    {
      name: "Storybook",
      img: "/icon-storybook.svg",
    },
    {
      name: "Git",
      img: "/icon-git.svg",
    },
  ];
  const experience = [
    {
      logo: "/logo-upwork.svg",
      skill: "Sr. Frontend Developer",
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
      text3: "Sed quis justo ac magna.",
      text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Nov 2021 - Present",
    },
    {
      logo: "/logo-upwork.svg",
      skill: "Team Lead",
      text1: "Sed quis justo ac magna.",
      text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text3: "Sed quis justo ac magna.",
      text4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
      time: "Jul 2017 - Oct 2021",
    },
    {
      logo: "/logo-upwork.svg",
      skill: "Full Stack Developer",
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "Dec 2015 - May 2017",
    },
  ];
  return (
    <div>
      <Header
        handleClick1={handleClick1}
        handleClick2={handleClick2}
        handleClick3={handleClick3}
        handleClick4={handleClick4}
      ></Header>
      <Profile></Profile>
      <About a={about}></About>
      <Skills Array={skill}></Skills>
      <Experience a={testimonials}></Experience>
      <Work a={work}></Work>
      <Footer a={contact}></Footer>
    </div>
  );
}
//==================================================
// import { Text2 } from "@/components/text2";
// export default function Home() {
//   const skill = [
//     {
//       name: "Javascript",
//       img: "/icon-javscript.svg",
//     },
//     {
//       name: "Typescript",
//       img: "/icon-typescript.svg",
//     },
//     {
//       name: "React",
//       img: "/icon-react.svg",
//     },
//     {
//       name: "Next.js",
//       img: "/icon-nextjs.svg",
//     },
//     {
//       name: "Node.js",
//       img: "/icon-nodejs.svg",
//     },
//     {
//       name: "Express.js",
//       img: "/icon-express.svg",
//     },
//     {
//       name: "Nest.js",
//       img: "/icon-nest.svg",
//     },
//     {
//       name: "Socket.io",
//       img: "/icon-socket.svg",
//     },
//     {
//       name: "PostgreSQL",
//       img: "/icon-postgresql.svg",
//     },
//     {
//       name: "MongoDB",
//       img: "/icon-mongodb.svg",
//     },
//     {
//       name: "Sass / Scss",
//       img: "/icon-sass.svg",
//     },
//     {
//       name: "Tailwindcss",
//       img: "/icon-tailwindcss.svg",
//     },
//     {
//       name: "Figma",
//       img: "/icon-figma.svg",
//     },
//     {
//       name: " Cypress",
//       img: "/icon-cypress.svg",
//     },
//     {
//       name: "Storybook",
//       img: "/icon-storybook.svg",
//     },
//     {
//       name: "Git",
//       img: "/icon-git.svg",
//     },
//   ];
//   return (
//     <div>
//       <div>
//         <Text2 Array={skill}></Text2>
//       </div>
//     </div>
//   );
// }
