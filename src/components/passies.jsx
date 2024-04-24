import { vrienden, sport, gitaar } from "../assets";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';


const passies = () => { 

    const sportRef = useRef(null);
    const gitaarRef = useRef(null);
    const vriendenRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const refs = [sportRef, gitaarRef, vriendenRef]

        refs.forEach((ref) =>{
            gsap.fromTo(ref.current, 
                {
                    y: 500,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 3,
                    scrollTrigger: {
                        trigger: ref.current,
                        scrub: true,
                        end: 'center center'
                    }
                }
            )
        })
        
    }, []);

    return (
        <div className="mb-40">
            <h1 className="mb-40">Verder heb ik <span className="text-[#EAEC13]">passie</span> voor...</h1>
            <div className="flex w-[90vw] mb-40 justify-around items-center" ref={sportRef}>
                <img className="w-[400px]" src={sport} alt="sport"   />
                <h2>Sport</h2>
            </div>
            <div className="flex w-[90vw] mb-40 justify-around items-center">
                <h2>muziek</h2>
                <img className="w-[400px]" src={gitaar} alt="gitaar" ref={gitaarRef} />
            </div>
            <div className="flex w-[90vw] justify-around items-center">
                <img className="w-[400px]" src={vrienden} alt="vrienden" ref={vriendenRef}/>
                <h2>mijn vrienden en familie</h2>
            </div>
        </div>
    )
}
export default passies;