import React from "react";
import "./../styles/main.css";

const InfoSection = (props) => {
  return (
    <div className="info-section">
      <h1> {props.title} </h1>
      {props.children}
    </div>
  );
};

export default InfoSection;
