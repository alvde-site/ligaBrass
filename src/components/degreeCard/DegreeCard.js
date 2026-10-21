import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { Link } from "react-router-dom"; // Быстрые SPA переходы

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                src={require(`../../assets/images/${degree.logo_path}`)}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div className="body-header">
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3
                  className="card-subtitle"
                  style={{ color: theme.secondaryText }}
                >
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3
                  className="duration"
                  style={{
                    color: theme.text,
                    backgroundColor: theme.secondaryText + "15",
                  }}
                >
                  {degree.duration}
                </h3>
              </div>
            </div>

            <div className="body-content">
              {degree.descriptions.map((sentence, index) => {
                return (
                  <p
                    key={index}
                    className="content-list"
                    style={{ color: theme.secondaryText }}
                  >
                    {sentence}
                  </p>
                );
              })}

              {/* Новый безопасный контейнер кнопки с симметричными отступами */}
              {degree.website_link && (
                <div className="visit-btn-container">
                  <Link to={degree.website_link} className="visit-link-wrapper">
                    <div
                      className="visit-btn"
                      style={{ borderColor: theme.text + "30" }}
                    >
                      <p className="btn" style={{ color: theme.text }}>
                        Подробнее
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
