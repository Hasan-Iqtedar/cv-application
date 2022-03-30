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
      currentExperienceId: 0,
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

  updateExperience = (data) => {
    const updatedInfo = this.state.experienceInfo;
    const index = updatedInfo.findIndex((element) => element.id === data.id);
    updatedInfo[index] = data;

    this.setState({
      experienceInfo: updatedInfo,
    });
  };

  deleteExperience = (id) => {
    let updatedInfo = [...this.state.experienceInfo];
    updatedInfo = updatedInfo.filter((element) => element.id !== id);

    this.setState({
      experienceInfo: updatedInfo,
    });
  };

  generateCV = () => this.setState({ complete: true });

  backToEdit = () => this.setState({ complete: false });

  addExperience = () => {
    this.setState({
      experienceInfo: [
        ...this.state.experienceInfo,
        {
          id: this.state.currentExperienceId,
          jobTitle: "",
          company: "",
          details: "",
          to: "",
          from: "",
        },
      ],
      currentExperienceId: this.state.currentExperienceId + 1,
    });
  };

  render() {
    console.log("App Component\n____________________");
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
            {this.state.experienceInfo.map((value) => {
              return (
                <WorkExperienceInfo
                  id={value.id}
                  key={value.id}
                  experienceInfo={value}
                  sendExperienceInfo={this.updateExperience}
                  deleteExperience={this.deleteExperience}
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
