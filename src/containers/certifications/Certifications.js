import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

// Функция перевода точной даты в объект Date с учетом переданного года
const parseConcertDateTime = (dateStr, timeStr, yearStr) => {
  // Разделяем день и месяц
  const [day, month] = dateStr.split(".").map(Number);
  // Разделяем часы и минуты (если времени нет, ставим конец дня)
  const [hours, minutes] = timeStr ? timeStr.split(":").map(Number) : [23, 59];
  // Используем год напрямую из портфолио (если забыли указать, берем текущий)
  const year = yearStr ? Number(yearStr) : new Date().getFullYear();

  return new Date(year, month - 1, day, hours, minutes);
};

class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null,
    };
  }

  handleToggleCard = (cardId) => {
    this.setState((prevState) => ({
      activeCardId: prevState.activeCardId === cardId ? null : cardId,
    }));
  };

  render() {
    const theme = this.props.theme;
    const { activeCardId } = this.state;
    const now = new Date();

    // 1. Фильтруем массив: оставляем только те концерты, время которых еще не наступило
    const activeConcerts = certifications.certifications.filter((cert) => {
      const concertDateTime = parseConcertDateTime(
        cert.concert_date,
        cert.concert_time,
        cert.concert_year
      );
      return concertDateTime >= now;
    });

    // 2. Если все концерты просрочены — полностью скрываем весь раздел с Главной
    if (activeConcerts.length === 0) {
      return null;
    }

    return (
      <div className="certs-main-section" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={1200} distance="20px">
            <h2 className="certs-header" style={{ color: theme.text }}>
              Ближайшие выступления
            </h2>
          </Fade>
        </div>
        <div className="certs-body-div">
          {activeConcerts.map((cert, index) => {
            const cardId = cert.id || index;
            const isOpen = activeCardId === cardId;
            return (
              <CertificationCard
                key={cardId}
                certificate={cert}
                theme={theme}
                isOpen={isOpen}
                onToggle={() => this.handleToggleCard(cardId)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
