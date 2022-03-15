import { Component } from "react";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GeneralInfo />
        <EducationInfo />
      </div>
    );
  }
}

export default App;
