import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main page__main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={1200} distance="30px">
            <div className="experience-heading-div">
              {/* Левая часть: Реальное качественное фото вместо абстрактного SVG */}
              <div className="experience-heading-img-div">
                {/* <img
                  src={require(`../../assets/images/${experience["header_image_path"]}`)}
                  alt={experience.title}
                  className="experience-hero-image"
                /> */}
              </div>

              {/* Правая часть: Лаконичные заголовки без лишнего пафоса */}
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h2
                  className="experience-heading-sub-text"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["subtitle"]}
                </h2>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Аккордеон с разделами новостей/репертуара */}
        <div className="experience-accordion-wrap">
          <ExperienceAccordion
            sections={experience["sections"]}
            theme={theme}
          />
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
