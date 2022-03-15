import { Component } from "react";
import './../styles/main.css';

class SubSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="sub-section">{this.props.children}</div>;
  }
}

export default SubSection;
