import React, { useEffect, useRef } from "react";

import '../app.css';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from "typed.js"; // Import Typed.js
import il1 from "./LandingAss/lap1.png";
import il2 from "./LandingAss/comp.png";
import il3 from "./LandingAss/mob1.png";
import GradientButton from "./GradientButton";
import { skills } from "./Data";



let x = [skills[0].logo, skills[1].logo, skills[4].logo];
let y = [il1, il2, il3];



export default function Landing() {
  const typedRef = useRef(null); // Reference for the Typed.js element
  const newary = ["A passionate","An innovative" ,"An enthusiastic", "a creative"]; // Words to type
  const typedReffor = useRef(null);
  useEffect(() => {
    // Initialize Typed.js on component mount
    const typed = new Typed(typedRef.current, {
      strings: newary, // Array of words to be typed
      typeSpeed: 10,
      backSpeed: 10,
      cursorChar: " _",
      shuffle: true,
      smartBackspace: false,
      loop: true,
    });

    return () => {
      // Cleanup Typed.js when the component is unmounted
      typed.destroy();
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true, // Slides to the right for the first box
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Settings for jk-landing-box-2 (slide to the left)
  const leftSlideSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false, // Ensures it slides to the left
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    // Initialize Typed.js with options
    const typed = new Typed(typedReffor.current, {
      strings: [
        "I have a keen interest in crafting visually appealing, responsive, and interactive web applications." +
          "I’m constantly learning and evolving my skills, excited to bring creative ideas to life."
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false, // It will keep typing and erasing in a loop
      cursorChar:' |'
    });

    // Cleanup the Typed instance when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="HOME" data-aos='zoom-in' className="vh-auto col-12 d-flex flex-md-row flex-column align-items-center justify-content-center ">
      <div className="col-10 bg-gradient-1 position-absolute"></div>
      <div className="col-10 bg-gradient-2 position-absolute"></div>
      
      <div className="col-md-4 col-12   d-flex flex-column align-items-center justify-content-center">
      <h1 className=" position-relative jk-stars col-10" >&#x2726;</h1>
        <h1 className="display-4 col-10">Hello, I'm jay</h1>
        <p className="col-10">
          <span ref={typedReffor}></span>
        </p>
        <div className="col-10">
          <a href="#FREELANCER"><GradientButton GiveName="Scroll dowm" /></a>
          
        </div>
      </div>
      <div className="col-md-6 col-12  d-flex align-items-center justify-content-center jk-landing">
        <div className="col-md-8 col-11 py-3 d-flex flex-column align-items-center justify-content-center rounded-5 jk-landing-in ">
          <p className="jk-typed col-10 col-md-10 text-uppercase position-relative m-0 pb-md-2 ">
            <span ref={typedRef}></span> {/* Reference Typed.js here */}
          </p>
          <div className="col-md-10 col-11 d-flex align-items-center justify-content-center">
            <h1 className="display-1 me-4 border-top ">frontend</h1>
            <div className="col-xl-3 col-md-5 col-5 rounded-4 jk-landing-box">
              <Slider {...settings}>
                {x.map((e) => (
                  <img src={e} className="jk-img-land" key={e} alt="" />
                ))}
              </Slider>
            </div>
          </div>
          <div className="col-10 d-flex align-items-center justify-content-center">
            <div className="col-xl-5 col-md-6 col-6 rounded-4  jk-landing-box jk-landing-box-2">
              <Slider {...leftSlideSettings}>
                {y.map((e) => (
                  <img
                    src={e}
                    className=" jk-img-land-2"
                    key={e}
                    alt=""
                  />
                ))}
              </Slider>
            </div>
            <h1 className="display-4 ms-3 pb-2 border-bottom ">
              <span className="display-6">web </span>
              <br /> <span className="">Developer</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
