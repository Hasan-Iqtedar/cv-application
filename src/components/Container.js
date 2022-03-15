import { Component } from "react";
import "./../styles/main.css";

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default Container;
