/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Брасс-квинтет НФОР: музыка от классики до джаза",
  description:
    "Профессиональный брасс-квинтет. Живая музыка на концерты, фестивали и культурные события: от классики до джаза",
  og: {
    title: "Брасс-квинтет НФОР | От классики до джаза",
    type: "website",
    url: "https://google.com", // Замените на реальный адрес вашего сайта
  },
};

//Home Page
const greeting = {
  title: "ЛИГА БРАСС-КВИНТЕТ",
  logo_name: "NFORBrassQuintet",
  subTitle:
    "Яркий и виртуозный брасс-квинтет, меняющий представление о возможностях медных духовых. В наших программах — элегантная классика, культовые джазовые стандарты и современные хиты в эксклюзивных аранжировках",
  resumeLink: "https://google.com", // Ссылка на PDF-презентацию или репертуарный лист
};

const socialMediaLinks = [
  {
    name: "VK",
    link: "https://vk.com", // Ссылка на ваше сообщество ВК
    fontAwesomeIcon: "fa-vk",
    backgroundColor: "#0077FF",
  },
  {
    name: "Telegram",
    link: "https://t.me", // Ссылка на ваш канал или контакт администратора
    fontAwesomeIcon: "fa-telegram",
    backgroundColor: "#24A1DE",
  },
  {
    name: "YouTube",
    link: "https://youtube.com", // Ссылка на ваш YouTube с выступлениями
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:yourbrassquintet@gmail.com", // Почта для коммерческих предложений и заказов
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Состав и инструменты",
      fileName: "DataScienceImg",
      skills: [
        "Две трубы — ведут основные мелодические линии, отвечая за яркие, парящие пассажи и торжественные фанфары.",
        "Валторна — добавляет мягкий, глубокий и бархатистый романтический тембр, который гармонично связывает весь ансамбль.",
        "Тромбон — привносит плотность, мощный пронзительный звук и эффектные джазовые глиссандо.",
        "Туба — надежный фундамент коллектива, уверенно заменяющий собой целую басовую линию и ритм-секцию.",
      ],
      softwareSkills: [
        {
          skillName: "Труба I",
          fontAwesomeClassname: "🎺",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Труба II",
          fontAwesomeClassname: "🎺",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Валторна",
          fontAwesomeClassname: "📯",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Тромбон",
          fontAwesomeClassname: "🎵",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Туба",
          fontAwesomeClassname: "🔊",
          style: { color: "#E4A834" },
        },
      ],
    },
    {
      title: "Форматы выступлений",
      fileName: "FullStackImg",
      skills: [
        "Официальные события — аккуратно озвучиваем церемонии, добавляем статусности награждениям и встречаем гостей в Welcome-зоне.",
        "Открытые площадки — уверенно звучим на городских фестивалях и праздниках, полностью собирая внимание аудитории.",
        "Частные мероприятия — составляем динамичные сеты для свадеб и юбилеев, включая интерактивы и музыкальные сюрпризы.",
        "Концертные залы — предлагаем полноценные тематические программы для филармоний, музеев и арт-пространств.",
      ],
      softwareSkills: [
        {
          skillName: "Welcome",
          fontAwesomeClassname: "🥂",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Концерты",
          fontAwesomeClassname: "🏛️",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Праздники",
          fontAwesomeClassname: "🎉",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Церемонии",
          fontAwesomeClassname: "📜",
          style: { color: "#E4A834" },
        },
      ],
    },
    {
      title: "Музыкальные жанры",
      fileName: "CloudInfraImg",
      skills: [
        "Академическая классика — благородные и величественные произведения Баха, Моцарта, Чайковского и других композиторов.",
        "Джаз и свинг — легкие, ритмичные стандарты в духе Луи Армстронга, Фрэнка Синатры и эпохи диксиленда.",
        "Современные каверы — популярные радио-хиты, поп-музыка и классика рока в наших эксклюзивных аранжировках.",
        "Торжественные марши — парадный репертуар для знаковых, патриотических и праздничных дат.",
      ],
      softwareSkills: [
        {
          skillName: "Классика",
          fontAwesomeClassname: "🎼",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Джаз",
          fontAwesomeClassname: "🎷",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Каверы",
          fontAwesomeClassname: "🎸",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Марши",
          fontAwesomeClassname: "🥁",
          style: { color: "#E4A834" },
        },
      ],
    },
    {
      title: "Условия и комфорт",
      fileName: "DesignImg",
      skills: [
        "Честный живой звук — играем исключительно вживую, без использования фонограмм, плейбеков или «минусовок».",
        "Полная мобильность — легко выступаем в движении, на воде, в парках и на площадках, где нет точек питания.",
        "Соответствие дресс-коду — заранее подбираем образы под ваше событие: от строгих смокингов до ярких сценических костюмов.",
        "Простой райдер — не требуем сложного звукового оборудования, для выступления нам нужны лишь пять стульев и гримерная комната.",
      ],
      softwareSkills: [
        {
          skillName: "100% Live",
          fontAwesomeClassname: "🔌",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Автономность",
          fontAwesomeClassname: "🔋",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Смокинги",
          fontAwesomeClassname: "🤵",
          style: { color: "#E4A834" },
        },
        {
          skillName: "Легкий быт",
          fontAwesomeClassname: "📋",
          style: { color: "#E4A834" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Александр Бахарев",
      subtitle: "Художественный руководитель / Первая труба",
      duration: "Главный по творчеству",
      descriptions: [
        "Отвечает за художественный вектор и репертуар.",
        "Задает темп, собирает всех на репетиции и следит, чтобы всё звучало идеально.",
      ],
      website_link: "/musicians/bakharev",
      logo_path: "musicians/bakharev_trumpet.jpg",
    },
    {
      title: "Георгий Гринемайер",
      subtitle: "Солист / Вторая труба",
      duration: "Творческая единица",
      descriptions: [
        "Обеспечивает ансамблю идеальный баланс и вторую партию.",
        "Мастер точных вступлений и деликатного интонирования.",
      ],
      website_link: "/musicians/grinemayer",
      logo_path: "musicians/grinemayer_trumpet.jpg",
    },
    {
      title: "Дмитрий Береговский",
      subtitle: "Солист / Валторна",
      duration: "Творческая единица",
      descriptions: [
        "Отвечает за самое мягкое и бархатистое звучание в центре квинтета.",
        "Связующее звено между трубами и низкими духовыми.",
      ],
      website_link: "/musicians/beregovsky",
      logo_path: "musicians/beregovsky_horn.jpg",
    },
    {
      title: "Александр Демиденко",
      subtitle: "IT-директор & Бухгалтер / Тромбон",
      duration: "Сайт, бумаги, будущие миллионы",
      descriptions: [
        "Собрал этот сайт своими руками и следит, чтобы код не падал.",
        "Взял на себя всю бумажную работу и готовится взять под контроль будущие бюджеты квинтета.",
      ],
      website_link: "/musicians/demidenko",
      logo_path: "musicians/demidenko_trombone.jpg",
    },
    {
      title: "Вильнур Самигуллин",
      subtitle: "Директор / Туба",
      alt_name: "Вильнур Самигуллин (Туба)",
      duration: "Контент, фотосессии и пиар", // Коротко и без пафоса
      descriptions: [
        "Главный продюсер и двигатель квинтета: организует съёмки, собирает контент и общается с прессой.",
        "Пока остальные музыканты думают о высоком, Вильнур находит лучшие ракурсы для фото и продвигает группу во внешнем мире.",
      ],
      website_link: "/musicians/samigullin",
      logo_path: "musicians/samigullin_tuba.jpg",
    },
  ],
};

const certifications = {
  certifications: [
    {
      concert_date: "25.10",
      concert_day: "воскресенье",
      concert_time: "13:00",
      title: "КОНЦЕРТ: БРАСС-КВИНТЕТА",
      alt_name: "КОНЦЕРТ: БРАСС-КВИНТЕТА",
      concert_city: "Пермь",
      concert_hall: "ПЕРМСКИЙ ГОСУДАРСТВЕННЫЙ ИНСТИТУТ КУЛЬТУРЫ",
      concert_info: "Приглашаем на наш замечательный концерт!",
      concert_workslist: [
        "Л.Бернстайн: Вестсайдская история",
        "Э.Мариконе: Сюита",
        "Ж.Родриго",
        "Р.Роджерс и др.",
      ],
      concert_artists: [
        "Александр Бахарев",
        "Георгий Гринимайер",
        "Дмитрий Береговский",
        "Александр Демиденко",
        "Вильнур Самигуллин",
      ],
      concert_address: 'ул. Газеты "Звезда", д. 18',
      more_button: "https://www.google.com/",
      buy_button:
        "https://intickets.ru/afisha/moscow/concert/novogodnij-cajkovskij-straus-gala/168767",
      concert_poster: "concerts/25.10perm.jpg",
    },
    {
      title: "КОНЦЕРТ: БРАСС-КВИНТЕТА",
      // subtitle: "- Andrew Ng",
      // logo_path: "concerts/tutta_forca.jpg",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "КОНЦЕРТ: БРАСС-КВИНТЕТА",
      concert_city: "Пермь",
      concert_hall: "Концертный зал ЦМШ",
      concert_time: "13:00",
      concert_date: "25.10",
      concert_day: "воскресенье",
      concert_place: "ПЕРМСКИЙ ГОСУДАРСТВЕННЫЙ ИНСТИТУТ КУЛЬТУРЫ",
      concert_info: "Приглашаем на наш замечательный концерт!",
      concert_workslist: [
        "Л.Бернстайн: Вестсайдская история",
        "Э.Мариконе: Сюита",
        "Ж.Родриго",
        "Р.Роджерс и др.",
      ],
      concert_artists: [
        "Александр Бахарев",
        "Георгий Гринимайер",
        "Дмитрий Береговский",
        "Александр Демиденко",
        "Вильнур Самигуллин",
      ],
      more_button: "https://www.google.com/",
      buy_button:
        "https://intickets.ru/afisha/moscow/concert/novogodnij-cajkovskij-straus-gala/168767",
      concert_poster: "concerts/25.10perm.jpg",
    },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Афиша и новости",
  subtitle: "Хроника событий, прошедшие концерты и творческая жизнь коллектива",
  description:
    "Здесь мы делимся главными новостями из жизни квинтета, публикуем отчеты с прошедших выступлений и анонсируем новые музыкальные программы.",
  header_image_path: "brass_main.jpg",
  sections: [
    {
      title: "Концертные программы",
      experiences: [
        {
          title: "Классика сквозь века",
          company: "Концертная программа I",
          company_url: "",
          logo_path: "iiitk_logo.png", // Замените на постер программы, когда он будет готов
          duration: "90 минут",
          location: "Концертный зал",
          description:
            "Величественные произведения Баха, Моцарта, Чайковского и Верди в оригинальных аранжировках для брасс-квинтета.",
          color: "#E4A834",
        },
      ],
    },
    // ==========================================================================
    // НАШ НОВЫЙ БЛОК: НОВОСТИ И МЕДИА (Появится отдельной вкладкой в аккордеоне)
    // ==========================================================================
    {
      title: "Новости и медиа",
      experiences: [
        {
          title: "Запись нового видеоклипа",
          company: "Творческий процесс",
          company_url: "",
          logo_path: "iiitk_logo.png", // Замените на кадр со съемок
          duration: "Октябрь 2026",
          location: "Студия звукозаписи",
          description:
            "Завершились съемки нашего нового промо-видео. В программу вошли культовые джазовые стандарты в авторских аранжировках квинтета. Премьера ожидается в ближайшее время.",
          color: "#E4A834",
        },
        {
          title: "Открытие концертного сезона",
          company: "Пресса о нас",
          company_url: "https://vk.com", // Ссылка на пост в ВК или репортаж (опционально)
          logo_path: "iiitk_logo.png",
          duration: "Сентябрь 2026",
          location: "Большой зал",
          description:
            "Квинтет солистов представил обновленную репертуарную программу. Спасибо нашим слушателям за потрясающую атмосферу и теплый прием!",
          color: "#E4A834",
        },
      ],
    },
    // ==========================================================================
    {
      title: "Архив выступлений",
      experiences: [
        {
          title: "Фестиваль «Спасская башня»",
          company: "Красная площадь",
          company_url: "",
          logo_path: "iiitk_logo.png",
          duration: "Август 2025",
          location: "Москва",
          description:
            "Выступление в рамках дневной программы международного военно-музыкального фестиваля.",
          color: "#E4A834",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Наше творчество и программы",
  description:
    "Мы играем музыку любых жанров: от строгой классики Баха до зажигательного джаза и современных каверов.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Контакты",
    description:
      "По вопросам согласования концертных программ, репертуара и участия в фестивалях вы можете связаться напрямую с Вильнуром Самигуллиным.",
    profile_image_path: "musicians/samigullin_tuba.jpg", // Фото Вильнура в assets/images/
    phone_title: "Телефон для связи",
    phone_number: "+7 (999) 123-45-67", // Актуальный телефон
  },
};

const musiciansDetails = {
  bakharev: {
    name: "Александр Бахарев",
    instrument: "Первая труба / Солист",
    photo: "musicians/bakharev_trumpet.jpg",
    vk: "https://vk.com",
    telegram: "",
    bio: [
      "Александр Бахарев — один из самых ярких и авторитетных трубачей-солистов нашего времени, чье исполнительское мастерство признано на самом высоком академическом уровне. Являясь артистом-солистом Национального филармонического оркестра России под управлением Владимира Спивакова, он сочетает эталонный звук с феноменальной виртуозностью.",
      "Александр ведет активную гастрольную и просветительскую деятельность, регулярно проводя востребованные мастер-классы по всей России. Его авторитет в профессиональном сообществе подтвержден регулярными совместными выступлениями на одной сцене с такими легендами мировой музыки, как Сергей Накаряков, Маттиас Хёфс, Денис Мацуев и Тимур Мартынов.",
    ],
  },
  grinemayer: {
    name: "Георгий Гринемайер",
    instrument: "Вторая труба",
    photo: "musicians/grinemayer_trumpet.jpg",
    vk: "https://vk.com",
    telegram: "",
    bio: [
      "Георгий Гринемайер — блестящий представитель нового поколения российской духовой школы. Его выдающийся талант отмечен Грантом Президента РФ, а также стипендиями авторитетных институтов — Международного благотворительного фонда Владимира Спивакова и фонда «Новые имена» имени И. Н. Вороновой.",
      "Георгий впитал лучшие традиции европейского исполнительства благодаря обучению на мастер-классах мировых звезд, среди которых Сергей Накаряков, Томас Хаммес и Эммануэль Рихтер. В составе ансамбля он обеспечивает безупречную ансамблевую точность и тонкую нюансировку.",
    ],
  },
  beregovsky: {
    name: "Дмитрий Береговский",
    instrument: "Валторна",
    photo: "musicians/beregovsky_horn.jpg",
    vk: "https://vk.com",
    telegram: "",
    bio: [
      "Дмитрий Береговский — глубокий, авторитетный музыкант с колоссальным опытом оркестрового и ансамблевого исполнительства. Окончив Российскую академию музыки имени Гнесиных, он сформировал свой уникальный, бархатистый и романтический тембр звучания, который связывает воедино всю палитру квинтета.",
      "В разные годы Дмитрий являлся солистом ведущих музыкальных институтов и коллективов страны: он выступал в качестве солиста известного Академического ансамбля песни и пляски Российской Армии имени А. В. Александрова и Симфонического оркестра театра «Новая Опера».",
    ],
  },
  demidenko: {
    name: "Александр Демиденко",
    instrument: "Тромбон",
    photo: "musicians/demidenko_trombone.jpg",
    vk: "https://vk.com",
    telegram: "",
    bio: [
      "Александр Демиденко — признанный мэтр отечественной духовой школы и музыкант экстра-класса. Занимая позицию первого тромбона в Национальном филармоническом оркестре России, он по праву входит в музыкальную элиту современной страны, задавая высочайшие стандарты мастерства.",
      "Его исполнение отличают невероятная харизма, плотность звука и безупречное техническое совершенство. В ансамбле Александр отвечает не только за мощные, драйвовые партии, но и привносит в общее звучание академическое благородство и весомость.",
    ],
  },
  samigullin: {
    name: "Вильнур Самигуллин",
    instrument: "Туба",
    photo: "musicians/samigullin_tuba.jpg",
    vk: "https://vk.com",
    telegram: "",
    bio: [
      "Вильнур Самигуллин — выдающийся музыкант, завоевавший признание на мировой арене. Он является лауреатом XVII Международного конкурса имени П. И. Чайковского (2023 год) — самого престижного музыкального состязания планеты, а также лауреатом II Всероссийского музыкального конкурса (2016 год).",
      "Вильнур виртуозно ломает стереотипы о тубе как о неповоротливом инструменте, демонстрируя невероятную гибкость, подвижность и легкость исполнения. Он создает массивный, глубокий фундамент и безупречный ритмический баланс, на котором держится всё звучание брасс-квинтета.",
    ],
  },
};

const mediaPageData = {
  videoList: [
    {
      id:
        "9bf63737c02b115668e18f2780e9fcb9" /* Живое выступление брасс-ансамбля */,
      title: "Классический брасс-квинтет — Концертное выступление",
    },
    {
      id: "c9751e04db1402fe0452d0fa0402283e" /* Концерт духовой музыки */,
      title: "Акадимическая программа духовых инструментов",
    },
  ],
  photoList: [
    { src: "brass_main.jpg", alt: "Концертное фото квинтета" },
    { src: "brass_main.jpg", alt: "Репетиционный процесс" },
    { src: "brass_main.jpg", alt: "Артисты за кулисами" },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  musiciansDetails,
  mediaPageData,
};
