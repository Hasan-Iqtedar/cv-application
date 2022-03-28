import { Component } from "react";
import Container from "./Container";
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
              {generalInfo.firstName.toUpperCase()}{" "}
              <span>{generalInfo.lastName.toUpperCase()}</span>
            </h1>
            <span className="gray centered">
              {generalInfo.title.toUpperCase()} .{" "}
              {generalInfo.phoneNo.toUpperCase()}
            </span>
            <span className="green centered bold">
              {generalInfo.email} . {generalInfo.linkedIn} .{" "}
              {generalInfo.github}
            </span>
            <hr></hr>
          </SubSection>

          <SubSection>
            <h2 className="section-title left-aligned">Experience</h2>

            {experienceInfo.map((experience, index) => {
              return (
                <Container className="container" key={index}>
                  <h4 className="gray left-aligned">
                    {experience.from} - {experience.to}
                  </h4>
                  <h4 className="left-aligned">
                    <span className="green">
                      {experience.jobTitle.toUpperCase()},{" "}
                    </span>
                    <span className="gray">
                      {experience.company.toUpperCase()}
                    </span>
                  </h4>
                  <span className="gray left-aligned">
                    {experience.details}
                  </span>
                </Container>
              );
            })}

          </SubSection>

          <SubSection>
            <h2 className="section-title left-aligned">Education</h2>
            <h4 className="gray left-aligned">
              {educationInfo.from} - {educationInfo.to}
            </h4>
            <h4 className="left-aligned">
              <span className="green">
                {educationInfo.degree.toUpperCase()},{" "}
                {educationInfo.institution.toUpperCase()}
              </span>
            </h4>
            <span className="gray left-aligned">{educationInfo.cgpa}</span>
          </SubSection>
        </InfoSection>
        <button onClick={backToEdit}>Back</button>
      </div>
    );
  }
}

export default Cv;
