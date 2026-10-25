import React from "react";

class LogoLoader extends React.Component {
  render() {
    const brassColor = "#E4A834";

    return (
      <svg
        className="raw_logo"
        width="60%"
        height="40%"
        viewBox="40 170 290 95"
        fill="none"
        xmlns="http://w3.org"
      >
        <defs>
          <linearGradient
            id="brassGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F9D076" />
            <stop offset="50%" stopColor={brassColor} />
            <stop offset="100%" stopColor="#B77F1E" />
          </linearGradient>

          <style
            dangerouslySetInnerHTML={{
              __html: `
                .music-slur {
                  stroke-dasharray: 400;
                  stroke-dashoffset: 400;
                  animation: draw-line 1.2s ease-out forwards 0.2s;
                }

                .sig-letter {
                  stroke-dasharray: 150;
                  stroke-dashoffset: 150;
                  animation: draw-line 0.6s linear forwards;
                }

                .sig-dot {
                  transform-origin: center;
                  transform: scale(0);
                  animation: pop-dot 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }

                .sig-l  { animation-delay: 0.8s; }  
                .dot-l  { animation-delay: 1.3s; }  
                .sig-i  { animation-delay: 1.1s; }  
                .sig-g  { animation-delay: 1.4s; }  
                .sig-a1 { animation-delay: 1.7s; }  
                .dot-a1 { animation-delay: 2.2s; }  

                .sig-b  { animation-delay: 2.1s; }  
                .sig-r  { animation-delay: 2.4s; }  
                .sig-a2 { animation-delay: 2.7s; }  
                .dot-a2 { animation-delay: 3.2s; }  
                .sig-s1 { animation-delay: 3.0s; }  
                .sig-s2 { animation-delay: 3.3s; }  

                @keyframes draw-line { to { stroke-dashoffset: 0; } }
                @keyframes pop-dot {
                  to {
                    transform: scale(1);
                    fill: url(#brassGradient);
                  }
                }
              `,
            }}
          />
        </defs>

        <g
          stroke="url(#brassGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Большая общая музыкальная лига сверху */}
          <path
            className="music-slur"
            d="M 68 198 C 110 180, 280 180, 322 198"
            strokeWidth="4.5"
            fill="none"
          />

          {/* ==========================================================================
             СЛОВО «ЛИГА»: Идеальный плотный ритм
             ========================================================================== */}
          {/* Л + Вливающаяся нота */}
          <path className="sig-letter sig-l" d="M68 252 L76 220 L84 252" />
          <circle
            className="sig-dot dot-l"
            cx="62.5"
            cy="252"
            r="7.5"
            stroke="none"
          />

          {/* И */}
          <path
            className="sig-letter sig-i"
            d="M96 220V252 M96 242L112 220 M112 220V252"
          />

          {/* Г */}
          <path className="sig-letter sig-g" d="M124 252V220H140" />

          {/* А1 + Вливающаяся нота */}
          <path
            className="sig-letter sig-a1"
            d="M142 252L151 220L160 252 M145 242H157"
          />
          <circle
            className="sig-dot dot-a1"
            cx="136.5"
            cy="252"
            r="7.5"
            stroke="none"
          />

          {/* ==========================================================================
             СЛОВО «БРАСС»: Пересчитанный геометрический кернинг и исправленные СС
             ========================================================================== */}
          {/* Б */}
          <path
            className="sig-letter sig-b"
            d="M184 220H197 M184 220V252H195C202 252 206 238 195 238H184"
          />

          {/* Р */}
          <path
            className="sig-letter sig-r"
            d="M211 252V220H223C230 220 230 236 223 236H211"
          />

          {/* А2 + Вливающаяся нота */}
          <path
            className="sig-letter sig-a2"
            d="M237 252L246 220L255 252 M240 242H252"
          />
          <circle
            className="sig-dot dot-a2"
            cx="231.5"
            cy="252"
            r="7.5"
            stroke="none"
          />

          {/* С1 — Полностью восстановленный правильный изгиб буквы */}
          <path
            className="sig-letter sig-s1"
            d="M279 222C273 219 265 222 265 236C265 250 273 253 279 250"
          />

          {/* С2 — Полностью восстановленный изгиб на симметричном расстоянии */}
          <path
            className="sig-letter sig-s2"
            d="M303 222C297 219 289 222 289 236C289 250 297 253 303 250"
          />
        </g>
      </svg>
    );
  }
}

export default LogoLoader;
