import { Component } from "react";
import InfoSection from "./InfoSection";
import SubSection from "./SubSection";
import Container from "./Container";

class WorkExperienceInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: "",
      company: "",
      details: "",
      to: "",
      from: "",
    };
  }

  updateJobTitle = (e) => this.setState({ jobTitle: e.target.value });
  updateCompany = (e) => this.setState({ company: e.target.value });
  updateDetails = (e) => this.setState({ tasksDescription: e.target.value });
  updateToDate = (e) => this.setState({ to: e.target.value });
  updateFromDate = (e) => this.setState({ from: e.target.value });

  render() {
    return (
      <InfoSection title="Experience">
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
                type="date"
                value={this.state.to}
                onChange={this.updateToDate}
              ></input>
            </Container>

            <Container className="container">
              <label htmlFor="from">From</label>
              <input
                className="general-info-input"
                id="from"
                type="text"
                placeholder="Date or Present"
                value={this.state.from}
                onChange={this.updateFromDate}
              ></input>
            </Container>
          </Container>

          <button
            className="add-button"
            onClick={this.props.sendExperienceInfo.bind(this, this.state)}
          >
            Add
          </button>
        </SubSection>
      </InfoSection>
    );
  }
}

export default WorkExperienceInfo;
