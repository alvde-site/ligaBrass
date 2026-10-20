import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import Button from "../button/Button";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="cert-card__content content">
            <div className="cert-header">
              <div class="cert-header__toolbar">
                <time class="cert-header__date" datetime="2026-10-17">
                  {certificate.concert_date}
                </time>

                <div class="cert-header__time-wrapper">
                  <span>суббота</span>
                  <time class="cert-header__time" datetime="19:00">
                    19:00
                  </time>
                </div>
              </div>
            </div>
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
              {certificate.concert_address ? (
                <div>
                  <h3 className="concert__title">Адрес мероприятия:</h3>
                  <p className="concert__info">{certificate.concert_address}</p>
                </div>
              ) : null}
              {certificate.more_button || certificate.buy_button ? (
                <div className="concert__buttons">
                  {certificate.more_button ? (
                    <Button
                      text={"Подробнее"}
                      className="project-button"
                      href={certificate.more_button}
                      newTab={true}
                      theme={this.props.theme}
                    />
                  ) : null}
                  {certificate.buy_button ? (
                    <Button
                      text={"Купить билет"}
                      className="project-button"
                      href={certificate.buy_button}
                      newTab={true}
                      theme={this.props.theme}
                    />
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="description__poster-wrap">
              {certificate.concert_poster ? (
                <img
                  className="description__poster"
                  alt="asdfas"
                  src={require(`../../assets/images/${certificate.concert_poster}`)}
                />
              ) : null}
            </div>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <div
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              г. <span>{certificate.concert_city}</span>,{" "}
              <span>{certificate.concert_hall}</span>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
