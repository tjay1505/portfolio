import React from "react";
import "../app.css";

const GradientButton = ({ GiveName, TF, onClickTF }) => {
  return (
    <>
      {onClickTF ? (
        <a href="/ReSume.pdf" download="Resume" type="application/pdf">
          <button className="gradient-button">
            {GiveName}{" "}
            {TF && <i className="fa fa-whatsapp" aria-hidden="true"></i>}
          </button>
        </a>
      ) : (
        <button className="gradient-button">
          {GiveName}{" "}
          {TF && <i className="fa fa-whatsapp" aria-hidden="true"></i>}
        </button>
      )}
    </>
  );
};

export default GradientButton;
