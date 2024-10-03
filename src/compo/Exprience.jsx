import React, { useEffect } from "react";
import bgillu from '../assets/bg-illu.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Exprience() {
    useEffect(() => {
        // Bouncing circle animation
        gsap.to('.jk-exp-cirlce', {
            ease: 'bounce',
            y: 80,
            repeat: -1,
            yoyo: true,
            duration: 3,
            scale: 1
        });

        // Counting number animation
        const countAnimation = (target, start, end) => {
            gsap.fromTo(target, 
              { innerText: start }, 
              { 
                innerText: end,
                duration: 3,
                ease: 'elastic',
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: target,
                    start: 'top 80%',
                    end:'bottom 50%',
                    scrub: 2,
                    onEnter: () => {
                        // On enter, start the counting
                        
                        gsap.to(target, { innerText: Math.round(end) });
                    },
                    onUpdate: function () {
                        // Update the text content as an integer
                        //target.innerText = Math.round(innerText);
                    }
                }
              });
        };
        
        countAnimation('.jk-number-1', 0 , 39);
        countAnimation('.jk-number-2', 0, 27);

    }, []);

    return (
        <div className="col-12 d-flex flex-column position-relative z-2 align-items-center my-3">
            <div className="col-10 bg-gradient-1 position-absolute"></div>
            <div className="col-10 bg-gradient-2 position-absolute"></div>
            <div className="col-12 col-md-11 d-flex flex-md-row flex-column align-items-center justify-content-center my-4 mt-md-5  position-relative">
                <div className="col-md-5 col-10 d-flex position-relative align-items-center justify-content-center ">
                    <img src={bgillu} data-aos="zoom-in" className="col-10 rounded-circle" alt="" />
                    <div className="rounded-circle jk-exp-cirlce position-absolute"></div>
                </div>
                <div className="col-md-5 col-10 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="col-md-8 position-relative jk-exp-h1 col-12">About me</h1>
                    <p className="col-md-8 col-12">
                        I enjoy solving complex problems, improving user experience, and developing aesthetically pleasing web applications. 
                        My goal is to contribute to innovative projects and continue growing in the dynamic field of web development.
                    </p>
                    <div className="col-md-8 d-flex align-items-center justify-content-start">
                        <span>
                            <h1 className="jk-gra-text jk-number jk-number-1">39</h1>
                            <p>Lorem, ipsum.</p>
                        </span>
                        <span className="ms-5">
                            <h1 className="jk-gra-text jk-number jk-number-2">27 </h1>
                            <p>dolor sit.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
