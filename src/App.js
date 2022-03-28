import { Component } from "react";
import Cv from "./components/Cv";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";
import InfoSection from "./components/InfoSection";
import WorkExperienceInfo from "./components/WorkExperienceInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: true,

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

      experienceInfo: [],
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
    const updatedInfo = this.state.experienceInfo;
    updatedInfo[data.id] = data;

    this.setState(
      {
        experienceInfo: updatedInfo,
      },
      () => {
        console.log(updatedInfo);
      }
    );
  };

  generateCV = () => this.setState({ complete: true });

  backToEdit = () => this.setState({ complete: false });

  addExperience = () => {
    this.setState({
      experienceInfo: [
        ...this.state.experienceInfo,
        {
          id: this.state.experienceInfo.length,
          jobTitle: "",
          company: "",
          details: "",
          to: "",
          from: "",
        },
      ],
    });
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

          <InfoSection title="Experience">
            {this.state.experienceInfo.map((value, index) => {
              return (
                <WorkExperienceInfo
                  id={index}
                  key={index}
                  experienceInfo={value}
                  sendExperienceInfo={this.getExperienceInfo}
                />
              );
            })}
            <button className="add-button" onClick={this.addExperience}>
              Add
            </button>
          </InfoSection>

          <button className="complete-button" onClick={this.generateCV}>
            Complete
          </button>
        </div>
      );
    } else {
      return (
        <Cv
          generalInfo={this.state.generalInfo}
          experienceInfo={this.state.experienceInfo}
          educationInfo={this.state.educationInfo}
          backToEdit={this.backToEdit}
        ></Cv>
      );
    }
  }
}

export default App;
