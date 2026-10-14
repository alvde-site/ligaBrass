import React from "react";

function MainLogo(props) {
  const brassColor = "#E4A834"; 

  return (
    <svg 
      xmlns="http://w3.org" 
      viewBox="40 170 290 95" /* Расширили viewBox влево (с 60 до 40), чтобы нота Л не обрезалась */
      width={props.size || "130px"}  
      height={props.size ? "auto" : "45px"}
      fill="none"
      style={{ ...props.style }}
      className={props.className}
    >
      <defs>
        <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9D076" />   
          <stop offset="50%" stopColor={brassColor} /> 
          <stop offset="100%" stopColor="#B77F1E" /> 
        </linearGradient>
      </defs>

      <g stroke="url(#brassGradient)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* ОБЩАЯ МУЗЫКАЛЬНАЯ ЛИГА */}
        <path d="M 68 198 C 110 180, 280 180, 322 198" strokeWidth="4" fill="none" />

        {/* --- СЛОВО: ЛИГА --- */}
        {/* Л + Крупная нота слева (теперь в полной безопасности внутри viewBox) */}
        <path d="M68 252 L76 220 L84 252" />
        <circle cx="61.0" cy="252" r="7.5" fill="url(#brassGradient)" stroke="none" />
        
        {/* И */} 
        <path d="M96 220V252 M96 242L112 220 M112 220V252" />
        
        {/* Г */} 
        <path d="M124 252V220H140" />
        
        {/* А (в слове ЛИГА) */}
        <path d="M152 252L161 220L170 252 M155 242H167" />
        <circle cx="145.0" cy="252" r="7.5" fill="url(#brassGradient)" stroke="none" />

        {/* --- СЛОВО: БРАСС --- */}
        {/* Б */} 
        <path d="M192 220H205 M192 220V252H203C210 252 210 238 203 238H192" />
        
        {/* Р */} 
        <path d="M221 252V220H233C240 220 240 236 233 236H221" />
        
        {/* А (в слове БРАСС) */}
        <path d="M245 252L254 220L263 252 M248 242H260" />
        <circle cx="238.0" cy="252" r="7.5" fill="url(#brassGradient)" stroke="none" />
        
        {/* С */} 
        <path d="M289 222C283 219 275 222 275 236C275 250 283 253 289 250" />
        {/* С */} 
        <path d="M315 222C309 219 301 222 301 236C301 250 309 253 315 250" />
      </g>
    </svg>
  );
}

export default MainLogo;
