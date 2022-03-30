import { Component } from "react";
import InfoSection from "./InfoSection";
import SubSection from "./SubSection";
import Container from "./Container";

class EducationInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.educationInfo.id,
      degree: props.educationInfo.degree,
      institution: props.educationInfo.institution,
      cgpa: props.educationInfo.cgpa,
      to: props.educationInfo.to,
      from: props.educationInfo.from,
    };
  }

  updateDegree = (e) => this.setState({ degree: e.target.value });
  updateInstitution = (e) => this.setState({ institution: e.target.value });
  updateCgpa = (e) => this.setState({ cgpa: e.target.value });
  updateToDate = (e) => this.setState({ to: e.target.value });
  updateFromDate = (e) => this.setState({ from: e.target.value });

  updateEducation = () => {
    const { degree, institution, cgpa, to, from } = this.state;

    if (
      degree !== "" &&
      institution !== "" &&
      cgpa !== "" &&
      to !== "" &&
      from !== ""
    ) {
      this.props.sendEducationInfo({
        id: this.props.id,
        degree: degree,
        institution: institution,
        cgpa: cgpa,
        to: to,
        from: from,
      });
    }
  };

  render() {
    console.log("EducationalInfo Component\n____________________");

    return (
      <SubSection>
        <Container className="container">
          <label htmlFor="degree">Degree Title</label>
          <input
            className="general-info-input"
            id="degree"
            type="text"
            value={this.state.degree}
            onChange={this.updateDegree}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="institution">Institution</label>
          <input
            className="general-info-input"
            id="institution"
            type="text"
            value={this.state.institution}
            onChange={this.updateInstitution}
          ></input>
        </Container>

        <Container className="container">
          <label htmlFor="cgpa">CGPA</label>
          <input
            className="general-info-input"
            id="cgpa"
            type="text"
            value={this.state.cgpa}
            onChange={this.updateCgpa}
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
          <button onClick={this.updateEducation}>Update</button>
          <button
            onClick={() => {
              this.props.deleteEducation(this.props.id);
            }}
          >
            Delete
          </button>
        </div>
      </SubSection>
    );
  }
}

export default EducationInfo;
