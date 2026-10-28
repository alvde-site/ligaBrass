<h1 align="center"> Software Developer Liga Brass 🔥 </h1>

# Pages 📚

✔️ Splash (/ - Заставка)\
✔️ Home (/home - Главная)\
✔️ Education (/about - О квинтете)\
✔️ MusicianPage (/musicians/:id - О музыкантах)\
✔️ Experience (/experience - Хроника и новости)\
✔️ ArchiveDetails (/archive/:id - Хроника и новости подробно)\
✔️ Projects (/projects - Программы)\
✔️ Opensource (/opensource - Медиа)\
✔️ GalleryAlbum (/gallery/:id - Фото подробно)\
✔️ Contact (/contact - Контакты)\
✔️ Error (/\* - 404)\

# Not in use pages

✔️ ResumePage (/resume - Резюме с возможностью скачать файл)\

To view a live site, **[click here](https://ligabrass.ru)**

### Section Information

You will find `src/portfolio` folder which contains the complete information. Setting for sections:

```javascript
//SEO Related settings
const seo = {
  title: "Брасс-квинтет Лика Брасс: музыка от классики до джаза",
  description:
    "Профессиональный брасс-квинтет. Живая музыка на концерты, фестивали и культурные события: от классики до джаза",
  og: {
    title: "Брасс-квинтет Лига Брасс | От классики до джаза",
    type: "website",
    url: "https://ligabrass.ru", // Реальный адрес вашего сайта
  },
};

// Concert poster settings
const certifications = {
  certifications: [
    {
      title: "КОНЦЕРТ: БРАСС-КВИНТЕТА",
      alt_name: "КОНЦЕРТ: БРАСС-КВИНТЕТА",
      concert_city: "Пермь",
      concert_hall: "Колонный зал",
      concert_time: "13:00",
      concert_date: "25.10",
      concert_year: "2026", // Техническое поле для JS
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
  ],
};

//Home Page
const greeting = {
  title: "ЛИГА БРАСС-КВИНТЕТ",
  logo_name: "LigaBrassQuintet",
  subTitle:
    "Яркий и виртуозный брасс-квинтет, меняющий представление о возможностях медных духовых. В наших программах — элегантная классика, культовые джазовые стандарты и современные хиты в эксклюзивных аранжировках",
  resumeLink: "https://google.com", // Ссылка на PDF-презентацию или репертуарный лист
};

// Socials for home page
const homeSocials = [
  {
    name: "VK",
    link: "https://vk.ru/ligabrass", // Ссылка на ваше сообщество ВК
    fontAwesomeIcon: "fa-vk",
    backgroundColor: "#0077FF",
  },
  {
    name: "Telegram",
    link: "https://t.me/+79323251050", // Ссылка на ваш канал или контакт администратора
    fontAwesomeIcon: "fa-telegram",
    backgroundColor: "#24A1DE",
  },
  {
    name: "Gmail",
    link: "mailto:vilnur.tubist1@gmail.com", // Почта для коммерческих предложений и заказов
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "YouTube",
    link: "https://youtube.com", // Ссылка на ваш YouTube с выступлениями
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
];

// Socials for contact page
const contactSocials = [
  {
    name: "VK",
    link: "https://vk.ru/vilnur_tuba", // Ссылка на ваше сообщество ВК
    fontAwesomeIcon: "fa-vk",
    backgroundColor: "#0077FF",
  },
  {
    name: "Telegram",
    link: "https://t.me/+79323251050", // Ссылка на ваш канал или контакт администратора
    fontAwesomeIcon: "fa-telegram",
    backgroundColor: "#24A1DE",
  },
  {
    name: "Gmail",
    link: "mailto:vilnur.tubist1@gmail.com", // Почта для коммерческих предложений и заказов
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "YouTube",
    link: "https://youtube.com", // Ссылка на ваш YouTube с выступлениями
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
];

// About page
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
  ],
};

// Детальная информация а музыканте
const musiciansDetails = {
  bakharev: {
    name: "Александр Бахарев",
    instrument: "Первая труба / Солист",
    photo: "musicians/bakharev_trumpet.jpg",
    vk: "https://vk.ru/bakharevtrumpet",
    telegram: "https://t.me/bakharev_trumpet",
    bio: [
      "Александр Бахарев — один из самых ярких и авторитетных трубачей-солистов нашего времени, чье исполнительское мастерство признано на самом высоком академическом уровне. Являясь артистом-солистом Национального филармонического оркестра России под управлением Владимира Спивакова, он сочетает эталонный звук с феноменальной виртуозностью.",
      "Александр ведет активную гастрольную и просветительскую деятельность, регулярно проводя востребованные мастер-классы по всей России. Его авторитет в профессиональном сообществе подтвержден регулярными совместными выступлениями на одной сцене с такими легендами мировой музыки, как Сергей Накаряков, Маттиас Хёфс, Денис Мацуев и Тимур Мартынов.",
    ],
  },
};

// Experience Page (Хроника и новости)
const experience = {
  title: "Хроника и новости",
  subtitle: "Архив выступлений и творческий дневник коллектива",
  description:
    "Здесь вы можете полистать хронологию наших прошедших концертов, репортажей и узнать последние новости из жизни ансамбля.",
  header_image_path: "brass_main.jpg",
  sections: [
    {
      title: "Новости коллектива",
      experiences: [
        {
          id: "new-trumpeter-announcement", // ID для точного адреса страницы
          type: "news",
          title:
            "Новое дыхание «Лига Брасс»: коллектив принимает второго трубача",
          company: "Творческий дневник",
          logo_path: "about.jpg",
          duration: "Анонс",
          location: "Жизнь ансамбля",
          news_date: "Октябрь 2026",
          // КРАТКОЕ ОПИСАНИЕ ДЛЯ КАРТОЧКИ:
          description:
            "В составе нашего брасс-квинтета грядут важные творческие перемены. Мы рады объявить о пополнении в духовой секции: к ансамблю присоединяется новый молодой солист. Имя музыканта пока держится в секрете.",
          // РАЗВЕРНУТЫЙ ТЕКСТ ДЛЯ ВНУТРЕННЕЙ СТРАНИЦЫ:
          poster: "about.jpg", // Можно использовать сквозной постер
          fullStory: [
            "Каждый брасс-квинтет — это единый, тонко настроенный живой организм, где звук одной трубы неотделим от общего дыхания ансамбля. Именно поэтому выбор нового музыканта для нас — это не просто поиск техничного исполнителя, а обретение единомышленника, готового разделить академические ценности и преданность сцене.",
            "Сегодня мы приоткрываем завесу тайны над грядущими переменами: в состав «Лига Брасс» официально входит второй трубач. Это молодой, амбициозный исполнитель, чей профессионализм, порядочность и глубокое, ответственное отношение к музыке сразу расположили к себе весь наш коллектив.",
            "Его исполнительское мастерство и безупречное звучание не оставляют сомнений — он станет мощным, ярким усилением для наших текущих программ.",
            "Официальное имя нового солиста и его подробная творческая биография будут раскрыты совсем скоро. Следите за нашими новостями и афишами — премьерное выступление в обновленном составе обещает стать по-настоящему особенным!",
          ],
        },
      ],
    },
    {
      title: "Архив прошедших выступлений", // ВТОРАЯ ВКЛАДКА
      experiences: [
        {
          id: "tyumen-college",
          type: "archive",
          title:
            "«Спиваковцы — ТГИКовцам»: благотворительный концерт-мастер-класс",
          company: "Тюменский государственный институт культуры (ТГИК)",
          logo_path: "concerts/colleg-tumen.png",
          duration: "Октябрь 2026",
          location: "Большой концертный зал ТГИК, Тюмень",
          description:
            "Творческая встреча и благотворительное выступление солистов Национального филармонического оркестра России в Большом зале ТГИК. Живой диалог, секреты мастерства и официальная благодарность руководства института.",
          poster: "concerts/colleg-tumen.png",
          news_date: "20 октябрь 2026",
          fullStory: [
            "В Большом концертном зале Тюменского государственного института культуры состоялось знаковое событие — благотворительный концерт-мастер-класс «Брасс-квинтета», состоящего из участников Национального филармонического оркестра России под управлением народного артиста СССР Владимира Спивакова.",
            "Артисты подарили зрителям незабываемый вечер, который прошел в формате живого диалога. Музыканты откровенно рассказали о себе, о том, почему они делятся своим искусством с юными коллегами, и что их вдохновляет. Особое внимание было уделено тому, насколько долог, интересен и полон труда путь самосовершенствования от ученика ДШИ до артиста ведущего оркестра страны.",
            "Зал, затаив дыхание, слушал и внимал: учителя и ученики детской школы искусств ТГИК, студенты, преподаватели, ветераны СВО и члены их семей. У этой музыки есть удивительное свойство объединять и уносить в высокие дали духа. Это было щедрое соприкосновение с прекрасным, подаренное спиваковцами тюменской земле.",
          ],
          reviews: [
            {
              author: "Н. А. Семешко, директор Колледжа искусств ТГИК",
              text:
                "«Сердечно благодарим артистов за проявленную щедрость души и таланта, внимание к начинающим музыкантам и незабываемую творческую встречу. Надеемся на новые музыкальные встречи в Тюмени!»",
            },
          ],
        },
  ],
};

// Projects Page (Программа - репертуар)
const projectsHeader = {
  title: "Концертные программы",
  description:
    "Репертуар коллектива охватывает широкий спектр музыкальных стилей и эпох. Мы предлагаем готовые тематические программы, адаптированные под различные форматы выступлений.",
  avatar_image_path: "brass_main.jpg", // Главное изображение раздела
  programs: [
    {
      id: "jazz-program", // Сохраняем ID для сквозного роутинга
      type: "program",
      title: "Шедевры XX века: от Бродвея до Голливуда",
      description:
        "Яркая, контрастная и невероятно кинематографичная эстрадно-классическая программа. Известные бродвейские мюзиклы, культовые киносаундтреки и утонченная европейская классика XX века в виртуозных аранжировках для брасс-квинтета.",
      duration: "75 минут",
      location: "Концертные площадки и залы",
      company: "Программа — Музыка театра и кино",
      poster: "brass_main.jpg", // Сквозное главное фото
      programList: [
        "Л. Бернстайн — Сюита из мюзикла «Вестсайдская история» (West Side Story)",
        "Э. Морриконе — Эпическая сюита культовых киносаундтреков (Сюита)",
        "Х. Родриго — Утонченные испанские мотивы и концертные адажио",
        "Р. Роджерс — Популярные бродвейские темы и эстрадные миниатюры",
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Контакты",
    description:
      "По вопросам согласования концертных программ, репертуара и участия в фестивалях вы можете связаться напрямую с Вильнуром Самигуллиным.",
    profile_image_path: "musicians/samigullin_tuba.jpg",
    phone_title: "Телефон для связи",
    phone_number: "+7 (932) 325-10-50", // Актуальный телефон
  },
};

// Media page
const mediaPageData = {
  // ШАБЛОН ВИДЕО VK И RUTUBE НА СТРАНИЦУ МЕДИА
  videoList: [
    {
      url:
        "https://rutube.ru/play/embed/60f3536d3531867da0a6ad9201c11129",
      title:
        "видео из rutube тест Акадимическая программа духовых инструментов",
    },
    {
      url:
        "https://vkvideo.ru/video_ext.php?oid=-2021308&id=456241255&hash=b5a8b6b7a97d2d13&hd=4",
      title:
        "Творческая мечта «Лига Брасс» — сыграть эту пьесу вместе с нашим другом",
    },
  ],

  // ТЕМАТИЧЕСКИЕ ФОТОАЛЬБОМЫ: при клике проваливаемся внутрь
  albumList: [
    {
      id: "our-days", ID для адресной строки
      title: "Наши будни",
      description:
        "Концерты, репетиции, дорожные хроники и живые эмоции коллектива вне строгих филармонических рамок.",
      cover: "everyday_life.jpg", // Ваша обложка для этой плитки
      photos: [
        { src: "25.10_01.jpg", alt: "Концерт в Колонном" },
        { src: "25.10_02.jpg", alt: "Концерт в Колонном" },
      ],
    },
  ],
};
```

- You can open `src/portfolio.js` file and at the top of this file you will see `settings` component as below:
  ```javascript
  // Website related settings
  const settings = {
    isSplash: true,
  };
  ```
- Change `isSplash` from `true` to `false`
- Now, if you see your website using `npm start`, it will directly open `home` rather than animating logo `splash` screen
- If you design your logo in future, then edit the files in `./src/components/Loader` and then revert `isSplash` to `true` in `src/portfolio.js`.

# Choose Theme 🌈

- You can take a look at `src/theme.js` file where all available themes are mentioned with their respective color codes
- At the bottom of this file you will see the below code:
  - `export const chosenTheme = blueTheme;`
  - You need to change the name from `blueTheme` to whatever theme you want to set your website to
  - You can define new theme similarly as other themes and you can assign name of that new defined theme to `chosenTheme`
- That's it. You just need to change the theme name and the code will take care of everything else
- Run `npm start` to check if everything is ok.

# Resume 📃

- If you want to display your resume, go to the <a href="/src/assets/docs/">/src/assets/docs/</a> directory.
- Paste your resume there and copy your resume's file name.
- Also, keep in mind that your resume must be in A4 size.
- Now, go to <a href="/src/pages/resume/Resume.js">/src/pages/resume/Resume.js</a>.
- In the import section, find:

```
import myResumePdf from "../../assets/docs/Ashutosh_Hathidara_Resume_ML.pdf"
```

- and replace **"Ashutosh_Hathidara_Resume_ML.pdf"** with your resume file name.
- Launch the project and go to the route `/resume` to view your resume.

# Deployment 📦

- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the EASIEST WAY.
- To deploy your website, you have two options. First you need to create a github repository with the name `<your-github-username>.github.io`. Please don't give it any other name.
- Now, you need to generate a production build and deploy the website.

**Option 1:**

- Run `npm run build` to generate the production build folder.
- Enter the build folder, `git init` and push the generated code to the `master` branch of your new repository on github. That's it. It's Done.
- You may need to `git init` and force push at every new build.

**Option 2 (will not work with [user pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)):**

- Run `npm run deploy` to build and create a branch called `gh-pages`. It will push the `build` files to that branch.
- The last step in deploying is to enable `Github Pages` in settings of the repository and select `gh-pages` branch.

Now, your website is successfully deployed and you can visit it at `<your-github-username>.github.io`.  
If you are stuck somewhere and want to observe the deployment process in depth, then please watch below video.

# Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)

# illustrations 🍥

- [UnDraw](https://undraw.co/illustrations)
- You need to change the website photos and use [https://unsplash.com](https://unsplash.com)
