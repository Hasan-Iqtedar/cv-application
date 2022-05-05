import React from "react";
import "./../styles/main.css";

const Container = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Container;
