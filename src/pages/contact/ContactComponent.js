import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              {/* Фотография */}
              <div className="contact-heading-img-div">
                {/* <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt={ContactData["title"]}
                  className="contact-profile-img"
                /> */}
              </div>

              {/* Информационный текстовый блок */}
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>

                {/* Телефон */}
                <div className="contact-phone-section">
                  <h2
                    className="contact-phone-title"
                    style={{ color: "#E4A834" }}
                  >
                    {ContactData["phone_title"]}
                  </h2>
                  <a
                    href={`tel:${ContactData["phone_number"].replace(
                      /[^0-9+]/g,
                      ""
                    )}`}
                    className="contact-phone-link"
                    style={{ color: theme.text }}
                  >
                    {ContactData["phone_number"]}
                  </a>
                </div>

                {/* Социальные сети */}
                <div className="contact-social-wrap">
                  <SocialMedia theme={theme} />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
