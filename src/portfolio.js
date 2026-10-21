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
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
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
};
