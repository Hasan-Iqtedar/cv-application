import { Component } from "react";
import SubSection from "./SubSection";
import Container from "./Container";

class WorkExperienceInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.experienceInfo.id,
      jobTitle: props.experienceInfo.jobTitle || "",
      company: props.experienceInfo.company || "",
      details: props.experienceInfo.details || "",
      to: props.experienceInfo.to || "",
      from: props.experienceInfo.from || "",
    };
  }

  updateJobTitle = (e) => this.setState({ jobTitle: e.target.value });
  updateCompany = (e) => this.setState({ company: e.target.value });
  updateDetails = (e) => this.setState({ details: e.target.value });
  updateToDate = (e) => this.setState({ to: e.target.value });
  updateFromDate = (e) => this.setState({ from: e.target.value });

  updateExperience = () => {
    const { jobTitle, company, details, to, from } = this.state;

    if (
      jobTitle !== "" &&
      company !== "" &&
      details !== "" &&
      to !== "" &&
      from !== ""
    ) {
      this.props.sendExperienceInfo({
        id: this.props.id,
        jobTitle: jobTitle,
        company: company,
        details: details,
        to: to,
        from: from,
      });
    }
  };

  render() {
    return (
      <SubSection>
        <Container className="container">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            id="jobTitle"
            className="general-info-input"
            type="text"
            value={this.state.jobTitle}
            onChange={this.updateJobTitle}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            className="general-info-input"
            type="text"
            value={this.state.company}
            onChange={this.updateCompany}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="details">Details</label>
          <input
            id="details"
            className="general-info-input"
            type="text"
            value={this.state.details}
            onChange={this.updateDetails}
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
              value={this.state.to}
              onChange={this.updateToDate}
            ></input>
          </Container>

          <Container className="container">
            <label htmlFor="from">From</label>
            <input
              className="general-info-input"
              id="from"
              type="date"
              value={this.state.from}
              onChange={this.updateFromDate}
            ></input>
          </Container>
        </Container>

        <div className="button-container">
          <button onClick={this.updateExperience}>Update</button>
          <button
            onClick={() => {
              this.props.deleteExperience(this.props.id);
            }}
          >
            Delete
          </button>
        </div>
      </SubSection>
    );
  }
}

export default WorkExperienceInfo;
