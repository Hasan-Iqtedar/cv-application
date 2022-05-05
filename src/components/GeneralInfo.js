import React, { useState } from "react";
import Container from "./Container";
import InfoSection from "./InfoSection";
import SubSection from "./SubSection";

const GeneralInfo = (props) => {
  const [firstName, setFirstName] = useState(props.generalInfo.firstName);
  const [lastName, setLastName] = useState(props.generalInfo.lastName);
  const [title, setTitle] = useState(props.generalInfo.title);
  const [phoneNo, setPhoneNo] = useState(props.generalInfo.phoneNo);
  const [email, setEmail] = useState(props.generalInfo.email);
  const [github, setGithub] = useState(props.generalInfo.github);
  const [linkedIn, setLinkedIn] = useState(props.generalInfo.linkedIn);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateTitle = (e) => setTitle(e.target.value);
  const updatePhoneNo = (e) => setPhoneNo(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateGithub = (e) => setGithub(e.target.value);
  const updateLinkedIn = (e) => setLinkedIn(e.target.value);

  return (
    <InfoSection title="General Information">
      <SubSection>
        <Container className="container">
          <label htmlFor="firstName">First Name</label>
          <input
            className="general-info-input"
            id="firstName"
            type="text"
            value={firstName}
            onChange={updateFirstName}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="general-info-input"
            id="lastName"
            type="text"
            value={lastName}
            onChange={updateLastName}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="title">Title</label>
          <input
            className="general-info-input"
            id="title"
            type="text"
            value={title}
            onChange={updateTitle}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="phone-no">Phone No.</label>
          <input
            className="general-info-input"
            id="phone-no"
            type="text"
            value={phoneNo}
            onChange={updatePhoneNo}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="email">Email</label>
          <input
            className="general-info-input"
            id="email"
            value={email}
            onChange={updateEmail}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="github">Github</label>
          <input
            className="general-info-input"
            id="github"
            value={github}
            onChange={updateGithub}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="linkedIn">LinkedIn</label>
          <input
            className="general-info-input"
            id="linkedIn"
            value={linkedIn}
            onChange={updateLinkedIn}
          ></input>
        </Container>
        <button
          className="add-button"
          onClick={props.sendGeneralInfo.bind(this, {
            firstName,
            lastName,
            title,
            phoneNo,
            email,
            github,
            linkedIn,
          })}
        >
          submit
        </button>
      </SubSection>
    </InfoSection>
  );
};

export default GeneralInfo;
