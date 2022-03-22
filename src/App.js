import { Component } from "react";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperienceInfo from "./components/WorkExperienceInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false,

      generalInfo: {
        firstName: "",
        lastName: "",
        title: "",
        phoneNo: "",
        email: "",
        github: "",
        linkedIn: "",
      },

      educationInfo: {
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

  getEducationInfo = (data) => {
    this.setState({
      educationInfo: data,
    });
  };

  getExperienceInfo = (data) => {
    this.setState({
      experienceInfo: data,
    });
  };

  generateCV = () => this.setState({ complete: true });

  backToEdit = () => {
    this.setState({ complete: false });
  };

  render() {
    console.log("App Component\n____________________");
    // console.log(this.state.generalInfo);
    if (!this.state.complete) {
      return (
        <div id="app-container">
          <GeneralInfo
            generalInfo={this.state.generalInfo}
            sendGeneralInfo={this.getGeneralInfo}
          />

          <EducationInfo
            educationInfo={this.state.educationInfo}
            sendEducationInfo={this.getEducationInfo}
          />

          <WorkExperienceInfo
            experienceInfo={this.state.experienceInfo}
            sendExperienceInfo={this.getExperienceInfo}
          />

          <button className="complete-button" onClick={this.generateCV}>
            Complete
          </button>
        </div>
      );
    } else {
      return (
        <div id="app-container">
          hello
          <button onClick={this.backToEdit}>Back</button>
        </div>
      );
    }
  }
}

export default App;
