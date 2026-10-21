import React, { useState, useEffect } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  // Хук для управления видимостью кнопки наверх
  const [isVisible, setIsVisible] = useState(false);

  // Хуки для безопасного управления ховером без document.getElementById
  const [isHovered, setIsHovered] = useState(false);

  // Плавный скролл наверх
  const goUpEvent = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Сделали скролл наверх премиальным и плавным
    });
  };

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Вешаем событие скролла при монтировании страницы
    window.addEventListener("scroll", scrollFunction);

    // КРИТИЧЕСКИ ВАЖНО: Удаляем событие из памяти браузера, когда уходим со страницы!
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  // Динамические стили для кнопки в зависимости от темы и ховера
  const buttonStyle = {
    color: isHovered ? theme.text : theme.body,
    backgroundColor: isHovered ? theme.body : theme.text,
    border: `solid 1px ${theme.text}`,
    visibility: isVisible ? "visible" : "hidden",
    opacity: isVisible ? 1 : 0,
    transition: "all 0.3s ease", // Плавное появление кнопки и ховера
    cursor: "pointer",
  };

  return (
    <div
      onClick={goUpEvent}
      id="topButton"
      style={buttonStyle}
      title="Наверх"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
