import { Ball } from "./canvas";
import { git, html, css, javascript, reactjs, nodejs, threejs, figma, tailwind } from "../assets";
const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Node",
      icon: nodejs,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "Figma",
      icon: figma,
    },{
      name: 'three.js',
      icon: threejs
    }
  ];


const tools = () => {
    return (
      <div className="mb-40 flex flex-col items-center">
        <h1 className="mb-40 pl-10">Ik heb ervaring met de volgende <span className="text-[#EAEC13]">tools</span>...</h1>

        <h2>Sleep ons</h2>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-40 h-40' key={technology.name}>
              <Ball icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default tools