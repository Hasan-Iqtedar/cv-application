import { Component } from "react";
import Container from "./Container";
import InfoSection from "./InfoSection";
import SubSection from "./SubSection";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.generalInfo.firstName,
      lastName: props.generalInfo.lastName,
      title: props.generalInfo.title,
      phoneNo: props.generalInfo.phoneNo,
      email: props.generalInfo.email,
      github: props.generalInfo.github,
      linkedIn: props.generalInfo.linkedIn,
    };
  }

  updateFirstName = (e) => this.setState({ firstName: e.target.value });
  updateLastName = (e) => this.setState({ lastName: e.target.value });
  updateTitle = (e) => this.setState({ title: e.target.value });
  updatePhoneNo = (e) => this.setState({ phoneNo: e.target.value });
  updateEmail = (e) => this.setState({ email: e.target.value });
  updateGithub = (e) => this.setState({ github: e.target.value });
  updateLinkedIn = (e) => this.setState({ linkedIn: e.target.value });

  render() {
    console.log("GeneralInfo Component\n____________________");

    return (
      <InfoSection title="General Information">
        <SubSection>
          <Container className="container">
            <label htmlFor="firstName">First Name</label>
            <input
              className="general-info-input"
              id="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.updateFirstName}
            ></input>
          </Container>

          <Container className="container">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="general-info-input"
              id="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.updateLastName}
            ></input>
          </Container>

          <Container className="container">
            <label htmlFor="title">Title</label>
            <input
              className="general-info-input"
              id="title"
              type="text"
              value={this.state.title}
              onChange={this.updateTitle}
            ></input>
          </Container>

          <Container className="container">
            <label htmlFor="phone-no">Phone No.</label>
            <input
              className="general-info-input"
              id="phone-no"
              type="text"
              value={this.state.phoneNo}
              onChange={this.updatePhoneNo}
            ></input>
          </Container>

          <Container className="container">
            <label htmlFor="email">Email</label>
            <input
              className="general-info-input"
              id="email"
              value={this.state.email}
              onChange={this.updateEmail}
            ></input>
          </Container>

          <Container className="container">
            <label htmlFor="github">Github</label>
            <input
              className="general-info-input"
              id="github"
              value={this.state.github}
              onChange={this.updateGithub}
            ></input>
          </Container>

          <Container className="container">
            <label htmlFor="linkedIn">LinkedIn</label>
            <input
              className="general-info-input"
              id="linkedIn"
              value={this.state.linkedIn}
              onChange={this.updateLinkedIn}
            ></input>
          </Container>

          <button
            className="add-button"
            onClick={this.props.sendGeneralInfo.bind(this, this.state)}
          >
            Add
          </button>
        </SubSection>
      </InfoSection>
    );
  }
}

export default GeneralInfo;
