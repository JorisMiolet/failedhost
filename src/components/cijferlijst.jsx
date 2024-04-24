import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { poloroid1, poloroid2, poloroid3, poloroid4, poloroid5, poloroid6 } from '../assets';




const cijferlijst = () => {

    const polaroidsRef = useRef(null);
    const poloroid1Ref = useRef(null);
    const poloroid2Ref = useRef(null);
    const poloroid3Ref = useRef(null);
    const poloroid4Ref = useRef(null);
    const poloroid5Ref = useRef(null);
    const poloroid6Ref = useRef(null);
    const headerRef = useRef(null);
  
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(headerRef.current, {
      opacity:0,
      y: 400
    }, {
      opacity: 1,
      duration: 1,
      y: 0,
      ScrollTrigger: {
        trigger: polaroidsRef.current,
        scrub: true,
        pin: true,
        pinSpacing: false
      }
    })
    // Polaroid animations
    const polaroids = [poloroid1Ref, poloroid2Ref, poloroid3Ref, poloroid4Ref, poloroid5Ref, poloroid6Ref];
    polaroids.forEach((polaroidRef) => {
      tl.fromTo(
        polaroidRef.current,
        { opacity: 0, scale: 2 },
        { opacity: 1, scale: 1, duration: 3, scrollTrigger: {
            trigger: polaroidsRef.current,
            start: 'center top',
            end: 'bottom top',
            scrub: 2,
            pin: true, 
          }, },
        "-=0.5"
      );
    });

    return () => {
      // Kill ScrollTriggers related to this component to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === polaroidsRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

const imgStyle =  {
    position: 'absolute',
    width: 1000,
    top: 200,
    left: '25%'
}

    return(
        <>
            <div className='relative flex justify-center items-center flex-col'>
                <div className="polaroids-container w-[100vw] h-[100vh]" ref={polaroidsRef}>
                     <h1 className="absolute  z-50 pl-10" ref={headerRef}>Ik ben tweedejaars student aan de HVA</h1>
                    <img src={poloroid1} style={imgStyle} ref={poloroid1Ref} alt="poloroid 1" />
                    <img src={poloroid2} style={imgStyle} ref={poloroid2Ref}  alt="poloroid 2" />
                    <img src={poloroid3} style={imgStyle} ref={poloroid3Ref}  alt="poloroid 3" />
                    <img src={poloroid4} style={imgStyle} ref={poloroid4Ref}  alt="poloroid 4" />
                    <img src={poloroid5} style={imgStyle} ref={poloroid5Ref}  alt="poloroid 5" />
                    <img src={poloroid6} style={imgStyle} ref={poloroid6Ref}  alt="poloroid 6" />
                </div>
            </div>
        </>
       
    )
}
export default cijferlijst;