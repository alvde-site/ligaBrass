import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  contactPageData,
} from "../../portfolio.js";

function SeoHeader() {
  // Безопасный сбор ссылок на социальные сети
  let sameAs = [];
  if (socialMediaLinks && Array.isArray(socialMediaLinks)) {
    socialMediaLinks
      .filter(
        (media) =>
          media?.link &&
          !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
      )
      .forEach((media) => {
        sameAs.push(media.link);
      });
  }

  // Безопасный поиск почты
  let mail = "";
  if (socialMediaLinks && Array.isArray(socialMediaLinks)) {
    const mailMedia = socialMediaLinks.find((media) =>
      media?.link?.startsWith("mailto")
    );
    if (mailMedia) {
      mail = mailMedia.link.substring("mailto:".length);
    }
  }

  // Безопасный поиск телефона из нашей новой чистой структуры контактов
  let phone = contactPageData?.contactSection?.phone_number || "";

  // Формируем правильные поисковые данные Schema.org для Музыкальной Группы
  const data = {
    "@context": "https://schema.org/",
    "@type": "MusicGroup",
    name: greeting?.title || "Брасс-квинтет солистов",
    url: seo?.og?.url || "",
    email: mail,
    telephone: phone,
    sameAs: sameAs,
    description: seo?.description || "",
  };

  return (
    <Helmet>
      <title>{seo?.title || "Брасс-квинтет"}</title>
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
