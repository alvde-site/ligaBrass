import React from "react";

class LogoLoader extends React.Component {
  render() {
    const brassColor = "#E4A834";

    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305" /* Большой viewBox для заставки */
        fill="none"
        xmlns="http://w3.org"
      >
        <defs>
          {/* Медно-латунный градиент духовых инструментов */}
          <linearGradient
            id="brassGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F9D076" /> {/* Блик */}
            <stop offset="50%" stopColor={brassColor} /> {/* Латунь */}
            <stop offset="100%" stopColor="#B77F1E" /> {/* Тень */}
          </linearGradient>

          {/* Стили анимации для всех элементов заставки */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                /* 1. СТИЛИ ДЛЯ ШЕСТИГРАННИКОВ */
                .splash-hexagon {
                  stroke-dasharray: 800;
                  stroke-dashoffset: 800;
                  animation: draw-heavy 3.5s linear forwards 0.3s;
                }

                /* 2. СТИЛИ ДЛЯ ЦЕНТРАЛЬНЫХ БУКВ НБ */
                .splash-letter {
                  fill: none;
                  stroke-dasharray: 400;
                  stroke-dashoffset: 400;
                  /* Отрисовка контура за 1.8с, затем плавное заполнение золотом за 0.6с */
                  animation: 
                    draw-light 1.8s linear forwards 1.8s,
                    fill-gold 0.6s ease-in-out forwards 3.2s;
                }

                /* 3. СТИЛИ ДЛЯ НИЖНЕЙ НАДПИСИ НФОР БРАСС */
                .sig-letter {
                  stroke-dasharray: 150;
                  stroke-dashoffset: 150;
                  animation: draw-light 0.8s linear forwards;
                }

                /* Поочередная задержка букв для эффекта бегущего пера */
                .sig-1 { animation-delay: 0.5s; }
                .sig-2 { animation-delay: 0.7s; }
                .sig-3 { animation-delay: 0.9s; }
                .sig-4 { animation-delay: 1.1s; }
                .sig-5 { animation-delay: 1.3s; }
                .sig-6 { animation-delay: 1.5s; }
                .sig-7 { animation-delay: 1.7s; }
                .sig-8 { animation-delay: 1.9s; }
                .sig-9 { animation-delay: 2.1s; }

                /* КЛЮЧЕВЫЕ КАДРЫ */
                @keyframes draw-heavy { to { stroke-dashoffset: 0; } }
                @keyframes draw-light { to { stroke-dashoffset: 0; } }
                @keyframes fill-gold  { to { fill: url(#brassGradient); } }
              `,
            }}
          />
        </defs>

        {/* ОБЩАЯ МЕДНАЯ ГРУППА */}
        <g
          stroke="url(#brassGradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* --- БЛОК 1: ШЕСТИГРАННИКИ --- */}
          <path
            className="splash-hexagon"
            d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
            strokeWidth="4"
          />
          <path
            className="splash-hexagon"
            d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
            strokeWidth="4"
          />

          {/* --- БЛОК 2: ИДЕАЛЬНО ОТЦЕНТРИРОВАННЫЕ БУКВЫ НБ --- */}
          {/* Буква Н */}
          <path
            className="splash-letter"
            d="M169.5 150V141.968H175.5V102.456H169.5V94.424H192.5V102.456H186.5V116.5H203.5V102.456H197.5V94.424H220.5V102.456H214.5V141.968H220.5V150H197.5V141.968H203.5V124.5H186.5V141.968H192.5V150H169.5Z"
            strokeWidth="3"
          />
          {/* Буква Б */}
          <path
            className="splash-letter"
            d="M230.5 150V141.968H236.5V102.456H230.5V94.424H271.5V109.5H246.5V116.5C257.5 116.5 271.5 120 271.5 133.5C271.5 145.5 259.5 150 246.5 150H230.5ZM246.5 124.5V141.968H243.5C253.5 141.5 261.5 139.5 261.5 133.5C261.5 127.5 253.5 124.5 243.5 124.5H246.5Z"
            strokeWidth="3"
          />

          {/* --- БЛОК 3: НИЖНЯЯ СТРОКА НФОР БРАСС --- */}
          {/* Слово: НФОР */}
          <path
            className="sig-letter sig-1"
            d="M26 250V286 M26 268H48 M48 250V286"
            strokeWidth="4"
          />
          <path
            className="sig-letter sig-2"
            d="M77 250V286 M63 256H91C96 256 96 280 91 280H63C58 280 58 256 63 256Z"
            strokeWidth="4"
          />
          <path
            className="sig-letter sig-3"
            d="M111 250H125C135 250 135 286 125 286H111C101 286 101 250 111 250Z"
            strokeWidth="4"
          />
          <path
            className="sig-letter sig-4"
            d="M151 286V250H166C176 250 176 268 166 268H151"
            strokeWidth="4"
          />

          {/* Слово: БРАСС */}
          <path
            className="sig-letter sig-5"
            d="M222 250H239 M222 250V286H237C246 286 246 268 237 268H222"
            strokeWidth="4"
          />
          <path
            className="sig-letter sig-6"
            d="M262 286V250H277C287 250 287 268 277 268H262"
            strokeWidth="4"
          />
          <path
            className="sig-letter sig-7"
            d="M298 286L310 250L322 286 M302 274H318"
            strokeWidth="4"
          />
          <path
            className="sig-letter sig-8"
            d="M358 252C350 248 340 252 340 268C340 284 350 288 358 284"
            strokeWidth="4"
          />
          <path
            className="sig-letter sig-9"
            d="M394 252C386 248 376 252 376 268C376 284 386 288 394 284"
            strokeWidth="4"
          />
        </g>
      </svg>
    );
  }
}

export default LogoLoader;
