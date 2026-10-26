import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Certifications from "../../containers/certifications/Certifications";
import { certifications } from "../../portfolio";

class Home extends Component {
  render() {
    const theme = this.props.theme;
    const now = new Date();

    // Сквозная проверка дат перед выводом компонента на Главной
    const hasActiveConcerts = certifications.certifications.some((cert) => {
      const [day, month] = cert.concert_date.split(".").map(Number);
      // Исправленный тернарный оператор с дефолтным временем 23:59
      const [hours, minutes] = cert.concert_time
        ? cert.concert_time.split(":").map(Number)
        : [23, 59];
      const year = cert.concert_year
        ? Number(cert.concert_year)
        : now.getFullYear();

      const concertDateTime = new Date(year, month - 1, day, hours, minutes);
      return concertDateTime >= now;
    });

    return (
      <div>
        <Header theme={theme} />
        <Greeting theme={theme} />

        {/* Рендерим блок только если в массиве есть хотя бы один актуальный концерт */}
        {certifications.certifications.length > 0 && hasActiveConcerts ? (
          <Certifications theme={theme} />
        ) : null}

        {/* Исправили передачу onToggle от родителя к Footer */}
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
