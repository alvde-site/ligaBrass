import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main page__main">
        <Header theme={this.props.theme} />

        <div className="basic-education">
          <Fade bottom duration={1200} distance="30px">
            <div className="heading-div">
              {/* Левая часть: Реальное изображение, скачанное по ссылке */}
              <div className="heading-img-div">
                <img
                  src={require("../../assets/images/about-bar.jpg")} // Расширение .jpg
                  alt="Инструменты брасс-квинтета"
                  className="hero-real-image"
                />
              </div>

              {/* Правая часть: Лаконичное описание без лозунгов */}
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Знакомство с квинтетом
                </h1>
                <p
                  className="heading-subText"
                  style={{ color: theme.secondaryText }}
                >
                  Ансамбль солистов, представляющий классический состав медных
                  духовых инструментов и академический музыкальный репертуар.
                </p>
              </div>
            </div>
          </Fade>

          <Educations theme={this.props.theme} />
        </div>

        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
