import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import { Link } from "react-router-dom";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    const projectsData = projectsHeader;

    return (
      <div className="projects-main page__main">
        <Header theme={theme} />

        <div className="basic-projects">
          {/* Шапка страницы */}
          <Fade bottom duration={1200} distance="30px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <img
                  src={require(`../../assets/images/${projectsData["avatar_image_path"]}`)}
                  alt={projectsData.title}
                  className="projects-hero-image"
                />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsData.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsData["description"]}
                </p>
              </div>
            </div>
          </Fade>

          {/* СЕКЦИЯ КАРТОЧЕК ПРОГРАММ */}
          <Fade bottom duration={1400} distance="40px">
            <div className="programs-grid-div">
              {projectsData.programs.map((program, index) => {
                return (
                  /* УМНАЯ ПОДСТРАХОВКА: если id нет, кодируем title, защищая от ошибок 404 */
                  <Link
                    key={index}
                    to={
                      "/archive/" +
                      (program.id
                        ? program.id
                        : encodeURIComponent(program.title))
                    }
                    className="program-card-link-wrap"
                  >
                    <div
                      className="program-spec-card"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        borderColor: theme.secondaryText + "18",
                      }}
                    >
                      <div className="program-card-header">
                        <h2
                          className="program-card-title"
                          style={{ color: theme.text }}
                        >
                          {program.title}
                        </h2>
                        <span
                          className="program-card-duration"
                          style={{
                            color: theme.text,
                            backgroundColor: theme.secondaryText + "15",
                          }}
                        >
                          {program.duration}
                        </span>
                      </div>
                      <p
                        className="program-card-desc"
                        style={{ color: theme.secondaryText }}
                      >
                        {program.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Fade>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
