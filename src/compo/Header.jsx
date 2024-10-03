import React from "react";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import git from "../assets/github.png";
import logo from "../assets/logo.png";
import GradientButton from "./GradientButton";
export default function Header({ alti, toggleMode }) {
  return (
    <div className="jk-head col-12 col-md-11 d-flex flex-row align-items-center justify-content-evenly ">
      <div className="logo col-md-2 d-flex align-items-center justify-content-center justify-content-md-end ">
        <img src={logo} className="col-md-4 col-8 jk-img" alt="" />
      </div>

      <div className="col-md-9 col-9   d-flex flex-row justify-content-end ">
        <div className="nav  col-6 d-none d-md-flex align-items-center justify-content-evenly">
          <a href="#SKILLS">Skills</a>
          <a href="#PROJECT">Projects</a>
          <a href="#FOOTER">Contact</a>
        </div>

        <div className="d-flex col-8 col-md-4 align-items-center justify-content-between ">
          <img src={git} className="jk-img col-md-1  col-2" alt="" />
          <img
            src={alti ? sun : moon}
            onClick={toggleMode}
            className="jk-img col-md-1 col-2 "
            alt=""
          />
          {/* <button className="btn jk-btn-clr rounded-1">Hire me</button>
           */}
          <GradientButton GiveName={"Hire Me"} onClickTF={true} />
        </div>
      </div>
    </div>
  );
}
