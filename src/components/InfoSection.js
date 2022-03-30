import React, { Component } from "react";
import "./../styles/main.css";

class InfoSection extends Component {
  render() {
    return (
      <div className="info-section">
        <h1> {this.props.title} </h1>
        {this.props.children}
      </div>
    );
  }
}

export default InfoSection;
