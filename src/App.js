import { useState } from "react";
import Cv from "./components/Cv";
import EducationInfo from "./components/EducationInfo";
import GeneralInfo from "./components/GeneralInfo";
import InfoSection from "./components/InfoSection";
import WorkExperienceInfo from "./components/WorkExperienceInfo";

const App = (props) => {
  const [complete, setComplete] = useState(false);

  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    title: "",
    phoneNo: "",
    email: "",
    github: "",
    linkedIn: "",
  });

  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperenceInfo] = useState([]);

  const [currentEducationId, setCurrentEducationId] = useState(0);
  const [currentExperienceId, setCurrentExperienceId] = useState(0);

  const getGeneralInfo = (data) => {
    setGeneralInfo(data);
  };

  const updateEducation = (data) => {
    const updatedInfo = [...educationInfo];
    const index = updatedInfo.findIndex((element) => element.id === data.id);
    updatedInfo[index] = data;

    setEducationInfo(updatedInfo);
  };

  const deleteEducation = (id) => {
    let updatedInfo = [...educationInfo];
    updatedInfo = updatedInfo.filter((element) => element.id !== id);

    setEducationInfo(updatedInfo);
  };

  const addEducation = () => {
    setEducationInfo([
      ...educationInfo,
      {
        id: currentEducationId,
        degree: "",
        institution: "",
        cgpa: "",
        to: "",
        from: "",
      },
    ]);

    setCurrentEducationId(currentEducationId + 1);
  };

  const updateExperience = (data) => {
    const updatedInfo = [...experienceInfo];
    const index = updatedInfo.findIndex((element) => element.id === data.id);
    updatedInfo[index] = data;

    setExperenceInfo(updatedInfo);
  };

  const deleteExperience = (id) => {
    let updatedInfo = [...experienceInfo];
    updatedInfo = updatedInfo.filter((element) => element.id !== id);

    setExperenceInfo(updatedInfo);
  };

  const addExperience = () => {
    setExperenceInfo([
      ...experienceInfo,
      {
        id: this.state.currentExperienceId,
        jobTitle: "",
        company: "",
        details: "",
        to: "",
        from: "",
      },
    ]);

    setCurrentExperienceId(currentExperienceId + 1);
  };

  const generateCV = () => setComplete(true);
  const backToEdit = () => setComplete(false);

  if (!complete) {
    return (
      <div id="app-container">
        <GeneralInfo
          generalInfo={generalInfo}
          sendGeneralInfo={getGeneralInfo}
        />

        <InfoSection title="Education">
          {educationInfo.map((value) => {
            return (
              <EducationInfo
                id={value.id}
                key={value.id}
                educationInfo={value}
                sendEducationInfo={updateEducation}
                deleteEducation={deleteEducation}
              ></EducationInfo>
            );
          })}
          <button className="add-button" onClick={addEducation}>
            Add
          </button>
        </InfoSection>

        <InfoSection title="Experience">
          {experienceInfo.map((value) => {
            return (
              <WorkExperienceInfo
                id={value.id}
                key={value.id}
                experienceInfo={value}
                sendExperienceInfo={updateExperience}
                deleteExperience={deleteExperience}
              />
            );
          })}
          <button className="add-button" onClick={addExperience}>
            Add
          </button>
        </InfoSection>

        <button className="complete-button" onClick={generateCV}>
          Complete
        </button>
      </div>
    );
  } else {
    return (
      <Cv
        generalInfo={generalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
        backToEdit={backToEdit}
      ></Cv>
    );
  }
};

export default App;
