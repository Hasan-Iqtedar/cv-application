import { Component } from "react";
import InfoSection from "./InfoSection";
import SubSection from "./SubSection";

class Cv extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const { generalInfo, experienceInfo, educationInfo, backToEdit } =
      this.props;
    return (
      <div id="app-container">
        <InfoSection>
          <SubSection>
            <h1 id="name">
              {generalInfo.firstName} <span>{generalInfo.lastName}</span>
            </h1>
            <span className="gray centered">
              {generalInfo.title} . {generalInfo.phoneNo}
            </span>
            <span className="green centered bold">
              {generalInfo.email} . {generalInfo.linkedIn} .{" "}
              {generalInfo.github}
            </span>
            <hr></hr>
          </SubSection>

          <SubSection>
            <h2 className="section-title left-aligned">Experience</h2>

            <h4 className="gray left-aligned">
              {experienceInfo.from} - {experienceInfo.to}
            </h4>
            <h4 className="left-aligned">
              <span className="green">{experienceInfo.jobTitle}, </span>
              <span className="gray">{experienceInfo.company}</span>
            </h4>
            <span className="gray left-aligned">{experienceInfo.details}</span>
          </SubSection>

          <SubSection>
            <h2 className="section-title left-aligned">Education</h2>
            <h4 className="gray left-aligned">
              {educationInfo.from} - {educationInfo.to}
            </h4>
            <h4 className="left-aligned">
              <span className="green">
                {educationInfo.degree}, {educationInfo.institution}
              </span>
            </h4>
            <span className="gray left-aligned">{educationInfo.cgpa}</span>

            {/* <h4 className="gray left-aligned">JULY 2021 - SEPTEMBER 2021</h4>
            <h4 className="left-aligned">
              <span className="green">
                BACHELOR OF SCIENCE IN COMPUTER SCIENCE, NATIONAL UNIVERSITY OF
                SCIENCES AND TECHNOLOGY
              </span>
            </h4>
            <span className="gray left-aligned">CGPA 3.80/4.0</span> */}
          </SubSection>
        </InfoSection>
        <button onClick={backToEdit}>Back</button>
      </div>
    );
  }
}

export default Cv;
