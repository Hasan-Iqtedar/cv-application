import { Component } from "react";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        title: "",
        phoneNo: "",
        email: "",
        github: "",
        linkedIn: "",
      },

      educationalInfo: {
        degree: "",
        institution: "",
        cgpa: "",
        to: "",
        from: "",
      },
    };
  }

  getGeneralInfo = (data) => {
    this.setState({
      generalInfo: data,
    });
  };

  getEducationalInfo = (data) => {
    this.setState({
      educationalInfo: data,
    });
  };

  render() {
    console.log("App Component\n____________________");
    return (
      <div>
        <GeneralInfo sendGeneralInfo={this.getGeneralInfo} />
        <EducationInfo sendEducationalInfo={this.getEducationalInfo} />
      </div>
    );
  }
}

export default App;
