import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="cert-card__content content">
            {/* <div className="content-overlay"></div> */}
            <div
              className="cert-header"
              // style={{ backgroundColor: certificate.color_code }}
            >
              <div class="cert-header__toolbar">
                <time class="cert-header__date" datetime="2026-10-17">
                  17.10
                </time>

                <div class="cert-header__time-wrapper">
                  <span>суббота</span>
                  <time class="cert-header__time" datetime="19:00">
                    19:00
                  </time>
                </div>
              </div>

              {/* <img
                  className="logo_img"
                  src={require(`../../assets/images/${certificate.logo_path}`)}
                  alt={certificate.alt_name}
                /> */}
            </div>
            {/* <div className="content-details fadeIn-top">
              <h3 className="content-title" style={{ color: theme.body }}>
                Certificate
              </h3>
            </div> */}
          </div>
          <div className="cert-card__concert concert">
            <div class="concert__content">
              {certificate.concert_info ? (
                <p className="concert__info">{certificate.concert_info}</p>
              ) : null}
              {certificate.concert_workslist ? (
                <div class="concert__workslist-wrap">
                  <h3 class="concert__title">Программа концерта:</h3>
                  <ul class="concert__worklist">
                    {certificate.concert_workslist.map((work) => {
                      return <li>{work}</li>;
                    })}
                  </ul>
                </div>
              ) : null}
              {certificate.concert_artists ? (
                <div class="concert__workslist-wrap">
                  <h3 class="concert__title">Участники:</h3>
                  <ul class="concert__worklist">
                    {certificate.concert_artists.map((work) => {
                      return <li>{work}</li>;
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
            <img
              class="description__poster"
              alt="asdfas"
              src={require("../../assets/images/feelingProud.svg")}
            ></img>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
