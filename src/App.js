import { Component } from "react";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperienceInfo from "./components/WorkExperienceInfo";

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

      experienceInfo: {
        jobTitle: "",
        company: "",
        details: "",
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

  getExperienceInfo = (data) => {
    this.setState({
      experienceInfo: data,
    });
  };

  render() {
    console.log("App Component\n____________________");
    return (
      <div>
        <GeneralInfo sendGeneralInfo={this.getGeneralInfo} />
        <EducationInfo sendEducationalInfo={this.getEducationalInfo} />
        <WorkExperienceInfo sendExperienceInfo={this.getExperienceInfo} />
      </div>
    );
  }
}

export default App;
