import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import blob from "../assets/projectAsset/Projecticon/llline.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
gsap.registerPlugin(ScrollTrigger);


export default function Project() {

  useEffect(() => {
    gsap.to(".blob", {
      //rotate: 160,
     // duration: 10,
      //y: 400,
      //opacity: 0.2,
     // ease: "power3",
      //scale: "25",
      //x: 200,
      //display:'none',
      scrollTrigger: {
        trigger: ".blob",
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="PROJECT" className="py-3 col-12 d-flex flex-column align-items-center justify-content-center position-relative ">
      <h1 className="col-12 position-relative z-1 text-center py-3 ps-md-5 jk-gra-text">
        {"{"}Portfolio{"}"}
      </h1>
      <p data-aos="fade-right" className="col-11 position-relative text-center z-3">
        what i have done previously with my skills which is up above showen{" "}
       few project i have done those link bwlow
      </p>
      <img
        src={blob}
        className="blob z-0 position-absolute "
        alt=""
      />
    </div>
  );
}
