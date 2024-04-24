
import { projects1, projects2, projects3, projects4, projects5, projects6, projects7, projects8, projects9, projects10 } from "../assets"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';

const imgStyle = {
    width: 600,
    marginRight: 120
}


const projects = () => {

    const row1 = useRef(null);
    const row2 = useRef(null);
    const row3 = useRef(null);
    const headerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);


        
            gsap.fromTo(
            row1.current,
        { x: 0 },
        { x: '-110%' , duration: 3, scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            scrub: 2,
          }, 
        })
        gsap.fromTo(
            row3.current,
        { x: 0 },
        { x: '-110%' , duration: 3, scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            scrub: 2,
          }, 
        })
        gsap.fromTo(
            row2.current,
        { x: '-110%' },
        { x: 0 , duration: 3, scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            scrub: 2,
          }, 
        })
        return () => {
            // Kill ScrollTriggers related to this component to prevent memory leaks
            ScrollTrigger.getAll().forEach((trigger) => {
              if (trigger.vars.trigger === sectionRef.current) {
                trigger.kill();
              }
            });
          };
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center  mb-40" ref={sectionRef}>
                <h1 ref={headerRef} className="px-10">Ik heb voor beide mijn school en mijn bedrijf meerdere projecten gemaakt.</h1>
            
                <div className=" flex mb-10 " ref={row1}>
                    <img src={projects1} style={imgStyle} alt="" />
                    <img src={projects2} style={imgStyle} alt="" />
                    <img src={projects3} style={imgStyle} alt="" />
                    <img src={projects4} style={imgStyle} alt="" />
                    <img src={projects1} style={imgStyle} alt="" />
                    <img src={projects2} style={imgStyle} alt="" />
                    <img src={projects3} style={imgStyle} alt="" />
                    <img src={projects4} style={imgStyle} alt="" />
                </div>
                <div className=" flex mb-10" ref={row2}>
                    <img src={projects5} style={imgStyle} alt="" />
                    <img src={projects6} style={imgStyle} alt="" />
                    <img src={projects7} style={imgStyle} alt="" />
                    <img src={projects2} style={imgStyle} alt="" />
                    <img src={projects5} style={imgStyle} alt="" />
                    <img src={projects6} style={imgStyle} alt="" />
                    <img src={projects7} style={imgStyle} alt="" />
                    <img src={projects2} style={imgStyle} alt="" />
                </div>
                <div className="flex" ref={row3}>
                    <img src={projects8} style={imgStyle} alt="" />
                    <img src={projects9} style={imgStyle} alt="" />
                    <img src={projects1} style={imgStyle} alt="" />
                    <img src={projects10} style={imgStyle} alt="" />
                    <img src={projects8} style={imgStyle} alt="" />
                    <img src={projects9} style={imgStyle} alt="" />
                    <img src={projects1} style={imgStyle} alt="" />
                    <img src={projects10} style={imgStyle} alt="" />
                </div>
            <button className="text-[4rem] mt-40 w-[800px] border-8 rounded-xl border-[#EAEC13] hover:bg-[#EAEC13] hover:text-black transistion-all duration-300">
                <a href="https://github.com/JorisMiolet/webiste_portfolio" target="_blank">Bekijk hier mijn github</a>
            </button>
            </div>
            
        </div>
    )
}
export default projects