import React from "react";

function UniversalPlayer({ videoUrl, theme, title }) {
  if (!videoUrl) return null;
  const isVk = videoUrl.includes("vk.com") || videoUrl.includes("vk.ru");
  const isRutube = videoUrl.includes("rutube.ru");
  let allowSettings =
    "autoplay; encrypted-media; fullscreen; picture-in-picture;";
  if (isRutube) {
    // RuTube просит clipboard-write для функции "поделиться" внутри плеера
    allowSettings += " clipboard-write;";
  } else if (isVk) {
    // VK умеет удерживать экран смартфона от засыпания
    allowSettings += " screen-wake-lock;";
  }
  return (
    <div
      className="video-card"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        borderColor: theme.secondaryText + "18",
      }}
    >
      <div className="video-responsive-wrap">
        <iframe
          src={videoUrl}
          //   src={"https://rutube.ru/play/embed/" + video.id}
          frameBorder="0"
          allow={allowSettings}
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      <p className="video-card-title" style={{ color: theme.text }}>
        {title}
      </p>
    </div>
  );
}

export default UniversalPlayer;
