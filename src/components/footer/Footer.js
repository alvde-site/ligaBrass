import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
  const theme = props.theme;

  return (
    <div className="footer-div">
      <Fade bottom duration={1000} distance="10px">
        <div className="footer-content-wrap">
          {/* Чистый, породистый филармонический копирайт без лишних SASS-ошибок */}
          <p className="footer-text" style={{ color: theme.secondaryText }}>
            © 2026 Лига Брасс. Все права защищены.
          </p>
        </div>
      </Fade>
    </div>
  );
}
