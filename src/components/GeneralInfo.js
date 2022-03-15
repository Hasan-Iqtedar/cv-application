import { Component } from "react";
import Container from "./Container";
import InfoSection from "./InfoSection";
import SubSection from "./SubSection";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InfoSection title="General Information">
        <SubSection>
          <Container>
            <label htmlFor="FirstName">First Name</label>
            <input
              className="general-info-input"
              id="FirstName"
              type="text"
            ></input>
          </Container>

          <Container>
            <label htmlFor="FirstName">Last Name</label>
            <input
              className="general-info-input"
              id="FirstName"
              type="text"
            ></input>
          </Container>

          <Container>
            <label>Title</label>
            <input className="general-info-input"></input>
          </Container>

          <Container>
            <label>Phone No.</label>
            <input className="general-info-input"></input>
          </Container>

          <Container>
            <label>Email</label>
            <input className="general-info-input"></input>
          </Container>

          <Container>
            <label>Github</label>
            <input className="general-info-input"></input>
          </Container>

          <Container>
            <label>LinkedIn</label>
            <input className="general-info-input"></input>
          </Container>

        </SubSection>

      </InfoSection>
    );
  }
}

export default GeneralInfo;
