import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import dmod from "../assets/skillicon/3d-model.png";
import { fristFive, lastFive } from "./Data";
import proimg from "../assets/profile.jpg";
import GradientButton from "./GradientButton";

gsap.registerPlugin(ScrollTrigger);

export default function Skill() {
  useEffect(() => {
    gsap.to(".doo", {
      rotate: "+=360",
      duration: 10,
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".skill-thumb", {
      rotate: "25deg",
      scale: 2,
      duration: 1,
      scrollTrigger: {
        trigger: ".skill-thumb-img",
        scrub: true,
      },
    });

    gsap.to(".skill-thumb-img", {
      translateY: "-8%",
      translateX: "-1%",
      repeat: -1,
      duration: 2,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      id="SKILLS"
      className=" d-flex flex-column position-relative z-3 vh-auto  col-12 align-items-center justify-content-start"
    >
      <div className="col-10 bg-gradient-1 position-absolute"></div>
      <div className="col-10 bg-gradient-2 position-absolute"></div>
      <h1 data-aos='flip-left' className=" position-relative jk-stars col-10" >&#x2726;</h1>

      <div className="skill-thumb rounded-2 d-flex align-items-center justify-content-center my-1">
        <img src={dmod} className=" skill-thumb-img" alt="" />
      </div>
      <h1 data-aos="flip-right" className=" position-relative jk-stars text-end col-10" >&#x2726;</h1>

      <div className="skill-text col-md-5 col-10 text-center my-0">
        <h1 className="col-12 my-2 jk-gra-text">
          {"{"}Skills{"}"}
        </h1>
        <p data-aos="fade-right" className="col-12 my-2 my-md-4">
          With experience in technologies like React, Firebase, and Flask, I’m
          always eager to learn and explore new technologies to enhance my skill
          set.
        </p>
      </div>

      <div
        className="col-12 d-flex flex-md-row  flex-column align-items-center justify-content-evenly py-1
       py-md-5"
      >
        <div className="col-12 col-md-4 z-1 d-flex flex-column align-items-center justify-content-center mb-md-5 py-2">
          {fristFive.map((e) => (
            <React.Fragment key={e.lvl}>
              <div
                data-aos="fade-right"
                className="col-12 d-flex align-items-center justify-content-evenly "
              >
                <div className="col-2 d-flex text-uppercase align-items-center py-1">
                  {e.sk}
                </div>
                <div className="col-7 col-xl-7 col-md-6 d-flex align-items-center justify-content-between">
                  <div
                    className="col-8 jk-level"
                    style={{ width: e.lvl - 23 + `%` }}
                  ></div>
                  <div className="">
                    {e.lvl}
                    {" %"}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="col-10 col-md-3 d-flex align-items-center justify-content-center position-relative ">
          <svg
            className="jk-skill-circle doo z-0 position-absolute"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 800"
            opacity="1"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="nnneon-grad"
              >
                <stop
                  stopColor="hsl(184, 74%, 44%)"
                  stopOpacity="1"
                  offset="0%"
                ></stop>
                <stop
                  stopColor="hsl(332, 87%, 70%)"
                  stopOpacity="1"
                  offset="100%"
                ></stop>
              </linearGradient>
              <filter
                id="nnneon-filter"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="17 8"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
              <filter
                id="nnneon-filter2"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="10 17"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  edgeMode="none"
                  result="blur"
                ></feGaussianBlur>
              </filter>
            </defs>
            <g strokeWidth="16" stroke="url(#nnneon-grad)" fill="none">
              <path
                d="M388.4530107167675 233.46125231926777C395.59828768523175 229.33666774729716 404.40171231476825 229.33666774729716 411.5469892832325 233.46240701819613L538.4530203016707 306.7315181170911C545.5982972701349 310.8561026890618 550.0000095849032 318.48057971278024 550.0000095849032 326.7309035556499V473.2691257534399C550.0000095849032 481.5194495963096 545.5982972701349 489.14392662002797 538.4530203016707 493.26966589092694L411.5469892832325 566.538776989822C404.40171231476825 570.6633615617925 395.59828768523175 570.6633615617925 388.4530107167675 566.5376222908938L261.54697969832927 493.26851119199864C254.401702729865 489.14392662002797 249.99999041509682 481.5194495963096 249.99999041509682 473.2691257534399V326.7309035556499C249.99999041509682 318.48057971278024 254.401702729865 310.8561026890618 261.54697969832927 306.7303634181629L388.4530107167675 233.46125231926777Z "
                filter="url(#nnneon-filter)"
              ></path>
              <path
                d="M400.4530107167675 233.46125231926777C407.59828768523175 229.33666774729716 416.40171231476825 229.33666774729716 423.5469892832325 233.46240701819613L550.4530203016707 306.7315181170911C557.5982972701349 310.8561026890618 562.0000095849032 318.48057971278024 562.0000095849032 326.7309035556499V473.2691257534399C562.0000095849032 481.5194495963096 557.5982972701349 489.14392662002797 550.4530203016707 493.26966589092694L423.5469892832325 566.538776989822C416.40171231476825 570.6633615617925 407.59828768523175 570.6633615617925 400.4530107167675 566.5376222908938L273.54697969832927 493.26851119199864C266.401702729865 489.14392662002797 261.9999904150968 481.5194495963096 261.9999904150968 473.2691257534399V326.7309035556499C261.9999904150968 318.48057971278024 266.401702729865 310.8561026890618 273.54697969832927 306.7303634181629L400.4530107167675 233.46125231926777Z "
                filter="url(#nnneon-filter2)"
                opacity="0.25"
              ></path>
              <path
                d="M376.4530107167675 233.46125231926777C383.59828768523175 229.33666774729716 392.40171231476825 229.33666774729716 399.5469892832325 233.46240701819613L526.4530203016707 306.7315181170911C533.5982972701349 310.8561026890618 538.0000095849032 318.48057971278024 538.0000095849032 326.7309035556499V473.2691257534399C538.0000095849032 481.5194495963096 533.5982972701349 489.14392662002797 526.4530203016707 493.26966589092694L399.5469892832325 566.538776989822C392.40171231476825 570.6633615617925 383.59828768523175 570.6633615617925 376.4530107167675 566.5376222908938L249.54697969832927 493.26851119199864C242.401702729865 489.14392662002797 237.99999041509682 481.5194495963096 237.99999041509682 473.2691257534399V326.7309035556499C237.99999041509682 318.48057971278024 242.401702729865 310.8561026890618 249.54697969832927 306.7303634181629L376.4530107167675 233.46125231926777Z "
                filter="url(#nnneon-filter2)"
                opacity="0.25"
              ></path>
              <path d="M388.4530107167675 233.46125231926777C395.59828768523175 229.33666774729716 404.40171231476825 229.33666774729716 411.5469892832325 233.46240701819613L538.4530203016707 306.7315181170911C545.5982972701349 310.8561026890618 550.0000095849032 318.48057971278024 550.0000095849032 326.7309035556499V473.2691257534399C550.0000095849032 481.5194495963096 545.5982972701349 489.14392662002797 538.4530203016707 493.26966589092694L411.5469892832325 566.538776989822C404.40171231476825 570.6633615617925 395.59828768523175 570.6633615617925 388.4530107167675 566.5376222908938L261.54697969832927 493.26851119199864C254.401702729865 489.14392662002797 249.99999041509682 481.5194495963096 249.99999041509682 473.2691257534399V326.7309035556499C249.99999041509682 318.48057971278024 254.401702729865 310.8561026890618 261.54697969832927 306.7303634181629L388.4530107167675 233.46125231926777Z "></path>
            </g>
          </svg>
          <h1 data-aos="fade-up" className=" text-center z-1">
            frontend developer
          </h1>
        </div>

        <div className="col-12 col-md-4 z-1 d-flex flex-column align-items-center justify-content-center mt-md-5 py-2">
          {lastFive.map((e) => (
            <React.Fragment key={e.lvl}>
              <div
                data-aos="fade-right"
                className="col-12 d-flex align-items-center justify-content-evenly "
              >
                <div className="col-2 d-flex text-uppercase align-items-center py-1">
                  {e.sk}
                </div>
                <div className="col-7 col-xl-7 col-md-6   d-flex align-items-center justify-content-between">
                  <div
                    className="col-8 jk-level"
                    style={{ width: e.lvl - 23 + `%` }}
                  ></div>
                  <div className="">
                    {e.lvl}
                    {" %"}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div
        id="ABOUT"
        className="col-10  vh-auto my-md-5 position-relative d-flex align-items-center justify-content-center my-2"
      >
              <h1 className=" position-relative position-absolute jk-stars col-10" >&#x2726;</h1>

        <div className="col-md-7  d-flex flex-column flex-md-row justify-content-center py-4 align-items-center rounded-3 jk-skill-profile">
          <img
            data-aos="zoom-in"
            src={proimg}
            className="col-md-4 col-10 my-3 my-md-0 rounded-3"
            alt=""
          />
          <div className="col-md-5 col-10 d-flex flex-wrap gap-2 ps-md-4">
            <p data-aos="fade-right" className=" h2 col-12"> profile</p>
            <p data-aos="fade-right" className="col-12">
              "I'm a dedicated and detail-oriented frontend web developer with a
              passion for creating interactive and responsive websites. With a
              solid foundation in HTML, CSS, and JavaScript, I have expanded my
              expertise to include modern libraries and frameworks like React .
            </p>
            <a
              href="https://www.linkedin.com/in/jai-kumar-twyzx98765"
              target="_blank"
              data-aos="fade-up"
            >
              <GradientButton GiveName={"LinkdIn"} />
            </a>
            <a
              href="https://www.naukri.com/mnjuser/profile?id=&altresid"
              target="_blank"
              data-aos="fade-up"
            >
              <GradientButton GiveName={"Nakuri"} />
            </a>
          </div>
        </div>
        <h1 className=" mt-5 position-absolute text-end jk-stars col-10" >&#x2726;</h1>

      </div>
    </div>
  );
}
