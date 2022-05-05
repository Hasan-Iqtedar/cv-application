import React, { useState } from "react";
import SubSection from "./SubSection";
import Container from "./Container";

const EducationInfo = (props) => {
  const [degree, setDegree] = useState(props.educationInfo.degree);
  const [institution, setInstitution] = useState(
    props.educationInfo.institution
  );
  const [cgpa, setCgpa] = useState(props.educationInfo.cgpa);
  const [toDate, setToDate] = useState(props.educationInfo.to);
  const [fromDate, setFromDate] = useState(props.educationInfo.from);

  const updateDegree = (e) => setDegree(e.target.value);
  const updateInstitution = (e) => setInstitution(e.target.value);
  const updateCgpa = (e) => setCgpa(e.target.value);
  const updateToDate = (e) => setToDate(e.target.value);
  const updateFromDate = (e) => setFromDate(e.target.value);

  const updateEducation = () => {
    if (
      degree !== "" &&
      institution !== "" &&
      cgpa !== "" &&
      toDate !== "" &&
      fromDate !== ""
    ) {
      props.sendEducationInfo({
        id: props.id,
        degree: degree,
        institution: institution,
        cgpa: cgpa,
        to: toDate,
        from: fromDate,
      });
    }
  };

  return (
    <SubSection>
      <Container className="container">
        <label htmlFor="degree">Degree Title</label>
        <input
          className="general-info-input"
          id="degree"
          type="text"
          value={degree}
          onChange={updateDegree}
        ></input>
      </Container>

      <Container className="container">
        <label htmlFor="institution">Institution</label>
        <input
          className="general-info-input"
          id="institution"
          type="text"
          value={institution}
          onChange={updateInstitution}
        ></input>
      </Container>

      <Container className="container">
        <label htmlFor="cgpa">CGPA</label>
        <input
          className="general-info-input"
          id="cgpa"
          type="text"
          value={cgpa}
          onChange={updateCgpa}
        ></input>
      </Container>

      <Container className="container date-container">
        <Container className="container">
          <label htmlFor="to">To</label>
          <input
            className="general-info-input"
            id="to"
            type="text"
            placeholder="Date or Present"
            value={toDate}
            onChange={updateToDate}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="from">From</label>
          <input
            className="general-info-input"
            id="from"
            type="date"
            value={fromDate}
            onChange={updateFromDate}
          ></input>
        </Container>
      </Container>

      <div className="button-container">
        <button onClick={updateEducation}>Update</button>
        <button
          onClick={() => {
            props.deleteEducation(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </SubSection>
  );
};

export default EducationInfo;
