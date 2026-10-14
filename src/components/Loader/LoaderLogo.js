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
          {/* Большая общая лига сверху */}
          <path
            className="music-slur"
            d="M 68 198 C 110 180, 280 180, 322 198"
            strokeWidth="4.5"
            fill="none"
          />

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
            d="M152 252L161 220L170 252 M155 242H167"
          />
          <circle
            className="sig-dot dot-a1"
            cx="146.5"
            cy="252"
            r="7.5"
            stroke="none"
          />

          {/* Б */}
          <path
            className="sig-letter sig-b"
            d="M192 220H205 M192 220V252H203C210 252 210 238 203 238H192"
          />

          {/* Р */}
          <path
            className="sig-letter sig-r"
            d="M221 252V220H233C240 220 240 236 233 236H221"
          />

          {/* А2 + Вливающаяся нота */}
          <path
            className="sig-letter sig-a2"
            d="M245 252L254 220L263 252 M248 242H260"
          />
          <circle
            className="sig-dot dot-a2"
            cx="239.5"
            cy="252"
            r="7.5"
            stroke="none"
          />

          {/* С1 */}
          <path
            className="sig-letter sig-s1"
            d="M289 222C283 219 275 222 275 236C275 250 283 253 289 250"
          />

          {/* С2 */}
          <path
            className="sig-letter sig-s2"
            d="M315 222C309 219 301 222 301 236C301 250 309 253 315 250"
          />
        </g>
      </svg>
    );
  }
}

export default LogoLoader;
