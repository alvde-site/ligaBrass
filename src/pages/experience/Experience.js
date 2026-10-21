import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
// 1. Проверяем, что импорт написан именно так:
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = this.props.theme;

    // 2. ИСПРАВЛЕНИЕ: Явно объявляем локальную переменную experience для метода render
    // Это навсегда уберет ошибку "experience is not defined"
    const experienceData = experience;

    return (
      <div className="experience-main page__main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={1200} distance="30px">
            <div className="experience-heading-div">
              {/* Левая часть: Подставляем исправленную переменную данных */}
              <div className="experience-heading-img-div">
                <img
                  src={require(`../../assets/images/${experienceData["header_image_path"]}`)}
                  alt={experienceData.title}
                  className="experience-hero-image"
                />
              </div>

              {/* Правая часть: Описание */}
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experienceData.title}
                </h1>
                <h2
                  className="experience-heading-sub-text"
                  style={{ color: theme.secondaryText }}
                >
                  {experienceData["subtitle"]}
                </h2>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experienceData["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Передаем секции в аккордеон */}
        <div className="experience-accordion-wrap">
          <ExperienceAccordion
            sections={experienceData["sections"]}
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
