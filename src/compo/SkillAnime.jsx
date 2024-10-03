import React from "react";
import { skills } from "./Data";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function SkillAnime() {
  const cont = useRef();
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1, // Infinite repeat
      yoyo: true, // Animation will reverse on each repeat
      defaults: {
        duration: 10, // Set a common duration for all animations in this timeline
        ease: "linear", // Ensure smooth movement
      },
    });

    // Horizontal animation for word-one
    tl.to(".word-one", {
      x: "-100%", // Moves word-one to the left
    });

    // Horizontal animation for word-two
    tl.to(
      ".word-two",
      {
        x: "100%", // Moves word-two to the right
      },
      0
    ); // Start this animation at the same time as word-one
    // Ensure any other animations in the timeline work smoothly
  }, []);
  return (
    <>
      <div
        ref={cont}
        className="Text-anime col-12 d-flex flex-column align-items-center justify-content-center my-3"
      >
        <div className="word word-one text-center d-flex align-items-center justify-content-start">
          {skills.map((e) => (
            <React.Fragment key={e.id}>
              <div className="col-1 d-flex align-items-center justify-content-center">
                <li>
                  {" "}
                  <img
                    src={e.logo}
                    className="col-5 ms-3 me-3"
                    alt={e.word}
                  />{" "}
                </li>
              </div>
              <li className="col-2 spanwe">{e.word}</li>
            </React.Fragment>
          ))}
        </div>

        <div className="word word-two text-center d-flex align-items-center justify-content-end">
          {skills.map((e) => (
            <React.Fragment key={e.id}>
              <div className="col-1 d-flex align-items-center justify-content-center">
                <li>
                  {" "}
                  <img
                    src={e.logo}
                    className="col-5 ms-3 me-3"
                    alt={e.word}
                  />{" "}
                </li>
              </div>
              <li className="col-2">{e.word}</li>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
