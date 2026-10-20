import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null,
    };
  }

  handleToggleCard = (cardId) => {
    this.setState((prevState) => ({
      activeCardId: prevState.activeCardId === cardId ? null : cardId,
    }));
  };
  render() {
    const theme = this.props.theme;
    const { activeCardId } = this.state;

    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Наши ближайшие концерты
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert, index) => {
            const cardId = cert.id || index;
            const isOpen = activeCardId === cardId;
            return (
              <CertificationCard
                key={cardId}
                certificate={cert}
                theme={theme}
                isOpen={isOpen}
                onToggle={() => this.handleToggleCard(cardId)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
