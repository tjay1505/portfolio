import {  useState } from "react";
import "../app.css";
const menuHeight = getComputedStyle(document.body).getPropertyValue(
  "--widget-2-menu-height"
);
import fiv from "./expAss/fiv.png";
import free from "./expAss/free.png";
import up from "./expAss/up.png";
const items = [
  {
    name: "Upwork",
    content:
      " My experience includes delivering high-quality projects for clients across various industries, focusing on React, JavaScript, and modern web technologies.done freelancing in this platform and did soo many out-source project like college project",
    img: up,
    links: "https://www.upwork.com/freelancers/~018003821ea5de9168",
  },
  {
    name: "freelancer",
    icon: "Encrypted",
    content:
      "done freelancing in this platform and did soo many out-source project like college project. My experience includes delivering high-quality projects for clients across various industries, focusing on React, JavaScript, and modern web technologies.",
    img: free,
    links: "https://www.freelancer.com/u/jaikumartjay1?sb=t",
  },
  {
    name: "fiverr",
    content:
      "done freelancing in this platform and did soo many out-source project like college project. My experience includes delivering high-quality projects for clients across various industries, focusing on React, JavaScript, and modern web technologies.",
    img: fiv,
    links:
      "https://www.fiverr.com/jay_kumar_g/create-websites-react-developer-frontend-developer?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=y8v17l",
  },
];

import React from "react";
import GradientButton from "./GradientButton";
import gsap, { ScrollTrigger } from "gsap/all";

export default function Freelance() {
  const [activeBlock, setActiveBlock] = useState(0);

  const toggleMenuBlock = (index) => setActiveBlock(index);

  return (
    <>
      <div
        id="FREELANCER"
        data-aos="fade-right"
        className=" col-12 d-flex flex-md-row flex-column align-items-center justify-content-md-evenly  my-2 "
      >
        <div className="col-md-7 col-10 mb-md-0 mb-2   d-flex align-items-center justify-content-between">
          <h1 className=" ps-1 ps-md-0 jk-reveal-gsap ">
            Hi !, I'm a Freelancing <br /> Web Developer
          </h1>
          <div className="col-md-5 col-6 d-flex flex-column jk-free-txt align-items-center h-100 justify-content-start">
            <a
              href="mailto:jaikumartjay@gmail.com"
              target="_blank"
              className="col-12 jk-free-txt text-decoration-none py-1"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
              jaikumartjay@gmail.com
            </a>
            <a
              href="tel:8608267904"
              target="_blank"
              className="col-12 jk-free-txt text-decoration-none"
            >
              <i className="fa fa-phone" aria-hidden="true"></i> +91-8608267904
            </a>
            <a
              href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu/@13.0474733,80.0441993,11z/data=!3m1!4b1!4m6!3m5!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!8m2!3d13.0843007!4d80.2704622!16zL20vMGM4dGs?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="col-12 jk-free-txt text-decoration-none py-1"
            >
              <i className="fa fa-map-marker" aria-hidden="true"></i> chennai ,
              India
            </a>
          </div>
        </div>
        <GradientButton GiveName="Hire me" onClickTF={true} />
      </div>
      <section data-aos="fade-right" className="page widget-2-page col-12 d-flex align-items-center justify-content-center my-5 h-100">
        <div className="widget-2-card col-11 col-md-9">
          <div className="buttons col-3 col-md-2">
            {items.map((item, index) => (
              <button
                key={item.name}
                className={index === activeBlock ? "active" : ""}
                onClick={() => toggleMenuBlock(index)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="wrapper">
            <div
              className="content"
              style={{
                translate: `0 calc(0px - ${menuHeight} * ${activeBlock})`,
              }}
            >
              {items.map((item) => (
                <div key={item.name} className="block">
                  <img src={item.img} className="col-6" alt="" />
                  <p>{item.content}</p>
                  <a href={item.links} target="_blank">
                    <div className=" p-1 col-8 col-md-2 my-3">
                      <GradientButton GiveName={"Visit profile"} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
