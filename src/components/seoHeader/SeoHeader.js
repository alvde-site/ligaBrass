import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  contactSocials, // Используем ваш существующий массив
} from "../../portfolio.js";

function SeoHeader() {
  // Безопасный сбор ссылок на социальные сети (VK, Telegram)
  let sameAs = [];
  if (contactSocials && Array.isArray(contactSocials)) {
    contactSocials
      .filter(
        (media) =>
          media?.link &&
          !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
      )
      .forEach((media) => {
        sameAs.push(media.link);
      });
  }

  // Автоматический поиск почты прямо внутри вашего массива contactSocials
  let mail = "";
  if (contactSocials && Array.isArray(contactSocials)) {
    const mailMedia = contactSocials.find((media) =>
      media?.link?.startsWith("mailto:")
    );
    if (mailMedia) {
      mail = mailMedia.link.substring("mailto:".length);
    }
  }

  // Автоматическое извлечение телефона из ссылки Telegram (+79323251050)
  let phone = "";
  if (contactSocials && Array.isArray(contactSocials)) {
    const tgMedia = contactSocials.find((media) =>
      media?.link?.includes("t.me/")
    );
    if (tgMedia) {
      // Вытаскиваем цифры номера из ссылки Telegram
      const match = tgMedia.link.match(/\+\d+/);
      if (match) phone = match[0];
    }
  }

  // Формируем правильные поисковые данные Schema.org для Музыкальной Группы
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: greeting?.title || "Лига Брасс",
    url: seo?.og?.url || "",
    email: mail || "vilnur.tubist1@gmail.com",
    telephone: phone || "+79323251050", //
    sameAs: sameAs,
    description: seo?.description || "",
  };

  return (
    <Helmet>
      <title>{seo?.title || "Лига Брасс"}</title>
      {seo?.description && (
        <meta name="description" content={seo.description} />
      )}
      {seo?.og?.title && <meta property="og:title" content={seo.og.title} />}
      {seo?.og?.type && <meta property="og:type" content={seo.og.type} />}
      {seo?.og?.url && <meta property="og:url" content={seo.og.url} />}
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
