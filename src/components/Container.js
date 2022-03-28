import { Component } from "react";
import "./../styles/main.css";

class Container extends Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

export default Container;
