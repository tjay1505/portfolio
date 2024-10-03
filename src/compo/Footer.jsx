import React, { useState } from "react";
import GradientButton from "./GradientButton";

export default function Footer() {
  const [isFocusedIn, setIsFocusedIn] = useState(false);
  const [isFocusedPA, setIsFocusedPA] = useState(false);
  const [inCounter, setInCounter] = useState("");
  const [paCounter, setpaCounter] = useState("");

  return (
    <div id="FOOTER" className="col-12 position-relative vh-auto z-1 mt-4">
      <div className="col-10 bg-gradient-1 position-absolute"></div>
      <div className="col-10 bg-gradient-2 position-absolute"></div>
      
      <h1 className="col-12 position-relative z-1 text-center py-3 jk-gra-text">
        {"{"}Contact{"}"}
      </h1>
      
      <p data-aos="fade-up" className="col-12 position-relative text-center z-3 ">
        Feel free to contact and suggest feedback
      </p>
      <div data-aos="zoom-in" className="col-12 position-relative d-flex flex-column align-items-center justify-content-evenly ">
      <h1 className=" position-relative jk-stars col-10" >&#x2726;</h1>

        <div className="col-11 col-md-9 d-flex flex-column align-items-center justify-content-evenly">
          <label
            htmlFor="nameInput"
            className="col-md-5 mb-5 col-10 position-relative d-flex align-items-center justify-content-center"
          >
            <span
              className={`position-absolute jk-label z-2 text-dark ${
                isFocusedIn ? "move-left text-white" : ""
              }`}
            >
              NAME
            </span>
            <input
              type="text"
              id="nameInput"
              className="col-12 py-2 ps-2 rounded-2 "
              onFocus={() => {
                setIsFocusedIn(true);
              }}
              onBlur={() => {
                setIsFocusedIn(false);
                inCounter == "" ? setIsFocusedIn(false) : setIsFocusedIn(true);
              }}
              onChange={(e) => {
                setInCounter(e.target.value);
              }}
            />
          </label>
          <label
            htmlFor="nameInput"
            className="col-md-5 mb-5 col-10 position-relative d-flex align-items-center justify-content-center"
          >
            <span
              className={`position-absolute jk-label z-2 text-dark ${
                isFocusedPA ? "move-left text-white" : ""
              }`}
            >
              PASSWORD
            </span>
            <input
              type="text"
              id="nameInput"
              className="col-12 py-2 ps-2 rounded-2"
              onFocus={() => {
                setIsFocusedPA(true);
              }}
              onBlur={() => {
                setIsFocusedPA(false);
                paCounter == "" ? setIsFocusedPA(false) : setIsFocusedPA(true);
              }}
              onChange={(e) => {
                setpaCounter(e.target.value);
              }}
            />
          </label>
          <textarea
            name=""
            placeholder="feedback"
            className="col-md-5 mb-5 col-10 position-relative d-flex align-items-center justify-content-center py-2 ps-3 rounded-2"
            id=""
          ></textarea>

          <GradientButton GiveName={"Submit"} />
          <h1 className=" position-relative jk-stars text-end col-10" >&#x2726;</h1>

        </div>
      </div>
      <div className="col-12  d-flex flex-column align-items-center justify-content-evenly jk-footer-txt my-4">
        <div className="col-md-6 col-10 py-md-3 my-4 py-3 d-flex align-items-center justify-content-evenly rounded-3 jk-footer-txt-div">
          <a href="#ABOUT">About</a>
          <a href="#HOME">Home</a>
          <a href="#SKILLS">Skills</a>
          <a href="#FREELANCER">Experince</a>
        </div>

        <div data-aos="zoom-in" className="col-md-8 col-12 d-flex flex-md-row flex-column pb-md-4 align-items-center justify-content-evenly ">
          <a
            href="mailto:jaikumartjay@gmail.com"
            target="_blank"
            className=" jk-txt text-decoration-none"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
            jaikumartjay@gmail.com
          </a>
          <a
            href="tel:8608267904"
            target="_blank"
            className=" jk-txt text-decoration-none"
          >
            <i className="fa fa-phone" aria-hidden="true"></i> +91-8608267904
          </a>
          <a
            href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu/@13.0474733,80.0441993,11z/data=!3m1!4b1!4m6!3m5!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!8m2!3d13.0843007!4d80.2704622!16zL20vMGM4dGs?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className=" jk-txt text-decoration-none"
          >
            <i className="fa fa-map-marker" aria-hidden="true"></i> chennai , India
          </a>
        </div>

        <div className="col-md-5 col-9 py-2 d-flex pb-md-4 align-items-center justify-content-evenly  ">
          <a href="https://github.com/tjay1505" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i> github{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/jai-kumar-twyzx98765/"
            target="_blank"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i> LinkdIn
          </a>
          <a href="https://wa.me/message/BSLWZB33MTOOK1" target="_blank">
            <i className="fa fa-whatsapp" aria-hidden="true"></i> whatsApp
          </a>
        </div>

        <a href="https://wa.me/message/BSLWZB33MTOOK1" data-aos="zoom-in" target="_blank">
          <GradientButton
            GiveName={"Tap to get connect on whatsApp"}
            TF={true}
          />
        </a>

        <div className="col-md-5 col-11 pt-md-5 mt-md-5 d-flex flex-md-row flex-column pb-md-3 py-4 mt-3 align-items-center justify-content-evenly border-top ">
          <p>&copy; CopyRight claims @ TJay 2024</p>
        </div>
      </div>
    </div>
  );
}
