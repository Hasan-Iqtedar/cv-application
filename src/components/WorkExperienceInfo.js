import React, { useState } from "react";
import SubSection from "./SubSection";
import Container from "./Container";

const WorkExperienceInfo = (props) => {
  const [jobTitle, setJobTitle] = useState(props.experienceInfo.jobTitle);
  const [company, setCompany] = useState(props.experienceInfo.company);
  const [details, setDetails] = useState(props.experienceInfo.details);
  const [toDate, setToDate] = useState(props.experienceInfo.to);
  const [fromDate, setFromDate] = useState(props.experienceInfo.from);

  const updateJobTitle = (e) => setJobTitle(e.target.value);
  const updateCompany = (e) => setCompany(e.target.value);
  const updateDetails = (e) => setDetails(e.target.value);
  const updateToDate = (e) => setToDate(e.target.value);
  const updateFromDate = (e) => setFromDate(e.target.value);

  const updateExperience = () => {
    if (
      jobTitle !== "" &&
      company !== "" &&
      details !== "" &&
      toDate !== "" &&
      fromDate !== ""
    ) {
      props.sendExperienceInfo({
        id: props.id,
        jobTitle: jobTitle,
        company: company,
        details: details,
        to: toDate,
        from: fromDate,
      });
    }
  };

  return (
    <SubSection>
      <Container className="container">
        <label htmlFor="jobTitle">Job Title</label>
        <input
          id="jobTitle"
          className="general-info-input"
          type="text"
          value={jobTitle}
          onChange={updateJobTitle}
        ></input>
      </Container>

      <Container className="container">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          className="general-info-input"
          type="text"
          value={company}
          onChange={updateCompany}
        ></input>
      </Container>

      <Container className="container">
        <label htmlFor="details">Details</label>
        <input
          id="details"
          className="general-info-input"
          type="text"
          value={details}
          onChange={updateDetails}
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
        <button onClick={updateExperience}>Update</button>
        <button
          onClick={() => {
            props.deleteExperience(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </SubSection>
  );
};

export default WorkExperienceInfo;
