import { Component } from "react";
import "./../styles/main.css";

class SubSection extends Component {
  render() {
    return <div className="sub-section">{this.props.children}</div>;
  }
}

export default SubSection;
