import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Error.css";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="error-main page__main">
        <Header theme={theme} />
        <div className="error-class">
          <Fade bottom duration={1200} distance="30px">
            <h1 className="error-title" style={{ color: theme.text }}>
              Упс...
            </h1>
            <h1 className="error-404" style={{ color: "#E4A834" }}>
              404
            </h1>
            <p
              className="error-description"
              style={{ color: theme.secondaryText }}
            >
              Запрашиваемая вами страница временно недоступна или не существует.
            </p>
            <div className="error-btn-container">
              <Link
                className="error-main-button"
                to="/home"
                style={{
                  color: theme.text,
                  borderColor: theme.text + "30",
                }}
              >
                На главную
              </Link>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}
