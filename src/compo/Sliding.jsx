import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { ProjectData } from "./Data";
import GradientButton from "./GradientButton";

export default function Sliding() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    swipeToSlide: true,
    afterChange: function(index) {
      
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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


  
  return (
    <div className="col-12 d-flex align-items-center justify-content-center">
      <div className="row slider-container z-1">
        <Slider {...settings}>
          {ProjectData.map((e) => (
            <div className="slider_div_jk">
              <img src={e.imgs} className="col-11 rounded-3" alt="" />
              <p className=" fs-3 col-11">{e.tittle}</p>
              <p className="fs-6 col-11">{e.texts}</p>
              <ul className=" d-flex flex-row list-unstyled col-11">
                {e.used.map((sw) => (
                  <li className=" me-2 rounded-2 bg-secondary px-2 ">
                    {sw}
                  </li>
                ))}
              </ul>
              <a href={e.links} target="_blank" className="col-11">
                <GradientButton GiveName={"Demo link"} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
      </div>
  );
}
