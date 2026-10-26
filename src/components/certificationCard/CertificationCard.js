import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import Button from "../button/Button";

class CertificationCard extends Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
  }

  render() {
    const { certificate, theme, isOpen, onToggle } = this.props;

    // Вычисляем высоту для идеально плавной анимации аккордеона
    const currentHeight =
      isOpen && this.contentRef.current
        ? `${this.contentRef.current.scrollHeight}px`
        : "0px";

    return (
      <Fade bottom duration={1000} distance="20px">
        <div
          className={`cert-card ${isOpen ? "active" : ""}`}
          onClick={onToggle}
          style={{
            cursor: "pointer",
            backgroundColor: theme.body,
            borderColor: isOpen ? "#E4A834" : theme.secondaryText + "40",
          }}
        >
          {/* Верхняя панель: Дата и Время проведения */}
          <div
            className="cert-card__content content"
            style={{ borderColor: theme.secondaryText + "20" }}
          >
            <div className="cert-header">
              <div className="cert-header__toolbar">
                <time
                  className="cert-header__date"
                  style={{ color: theme.text }}
                >
                  {certificate.concert_date}
                </time>

                <div
                  className="cert-header__time-wrapper"
                  style={{ color: theme.secondaryText }}
                >
                  <span className="cert-header__day">
                    {certificate.concert_day || "суббота"}
                  </span>
                  <time
                    className="cert-header__time"
                    style={{ color: theme.text }}
                  >
                    {certificate.concert_time || "19:00"}
                  </time>
                </div>
              </div>
            </div>
          </div>

          {/* Тело карточки: Название концерта и Место проведения (Видно всегда) */}
          <div className="cert-body">
            <h3 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h3>
            <div
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              г. <span>{certificate.concert_city}</span>,{" "}
              <span>{certificate.concert_hall}</span>
            </div>
          </div>

          {/* Раскрывающийся блок подробностей (Аккордеон) */}
          <div
            className="cert-card__concert concert"
            ref={this.contentRef}
            style={{
              height: currentHeight,
              borderColor: theme.secondaryText + "20",
              opacity: isOpen ? 1 : 0,
            }}
          >
            <div className="concert__inner-padding">
              <div className="concert__content">
                {certificate.concert_info && (
                  <p
                    className="concert__info"
                    style={{ color: theme.secondaryText }}
                  >
                    {certificate.concert_info}
                  </p>
                )}

                {certificate.concert_workslist && (
                  <div className="concert__section">
                    <h4 className="concert__title" style={{ color: "#E4A834" }}>
                      Программа концерта:
                    </h4>
                    <ul className="concert__list" style={{ color: theme.text }}>
                      {certificate.concert_workslist.map((work, i) => (
                        <li key={i}>{work}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {certificate.concert_artists && (
                  <div className="concert__section">
                    <h4 className="concert__title" style={{ color: "#E4A834" }}>
                      Участники:
                    </h4>
                    <ul className="concert__list" style={{ color: theme.text }}>
                      {certificate.concert_artists.map((artist, i) => (
                        <li key={i}>{artist}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {certificate.concert_address && (
                  <div className="concert__section">
                    <h4 className="concert__title" style={{ color: "#E4A834" }}>
                      Адрес:
                    </h4>
                    <p className="concert__info" style={{ color: theme.text }}>
                      {certificate.concert_address}
                    </p>
                  </div>
                )}

                {(certificate.more_button || certificate.buy_button) && (
                  <div className="concert__buttons">
                    {certificate.more_button && (
                      <Button
                        text={"Подробнее"}
                        className="project-button"
                        href={certificate.more_button}
                        newTab={true}
                        theme={theme}
                      />
                    )}
                    {certificate.buy_button && (
                      <Button
                        text={"Купить билет"}
                        className="project-button"
                        href={certificate.buy_button}
                        newTab={true}
                        theme={theme}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Правая часть внутри аккордеона: Афиша/Постер */}
              <div className="description__poster-wrap">
                {certificate.concert_poster ? (
                  <img
                    className="description__poster"
                    alt={`Афиша концерта ${certificate.title}`}
                    src={require(`../../assets/images/${certificate.concert_poster}`)}
                  />
                ) : (
                  <div
                    className="description__poster-placeholder"
                    style={{ backgroundColor: theme.secondaryText + "10" }}
                  >
                    <span
                      role="img"
                      aria-label="Иконка труба (музыкальный инструмент)"
                    >
                      🎺
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
