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

You can change the personal information, experience, education, social media, certifications, blog information, contact information etc. in `src/portfolio.js` to directly reflect them in portfolio website.

### How to change the icons on homepage under what i do section?

1. This section pulls data from `skills` in portfolio.js file.
2. Visit this website: https://icon-sets.iconify.design/
3. Search for the skill you are looking to add.
4. Select the icon of your choice.
5. Copy the text beside **Selected Icon** and replace it with `fontAwesomeClassName` of that particular softwareSkill.

#### How to use custom images instead of Iconify Icons?

1. Add a valid image file into the `public/skills` folder
2. Insert the image name into the `imageSrc` attribute of the particular softwareSkill
3. Remove the `fontAwesomeClassName` property or leave it empty because it takes precedence over `imageSrc`
4. Add custom styling to the `img` using the `style` Property

### How to Change the Icons on Education page under Basic Qualification and Certifications?

1. The icons for this section are pulled from the `competitiveSites` array in the `portfolio.js` file.
2. Visit the [Simple Icons website](https://simpleicons.org/).
3. Search for the competitive site you want to add an icon for.
4. Select the icon you want to use.
5. Copy the text beside Selected Icon and replace it with iconifyClassname of that particular competitive site.

### How to Use Custom Images Instead of Simple Icons for Competitive Sites

1. Place the custom image file in the `public/skills` folder.
2. Update the `imageSrc` attribute of the corresponding competitive site with the name of your custom image (e.g., `imageSrc: "customImage.png"`).
3. Remove the `iconifyClassname` property or leave it empty, as the `imageSrc` property takes precedence over `iconifyClassname`.
4. Optionally, add custom styling to the `<img>` tag using the `style` property to adjust size, positioning, etc.

### Github Information

You will find `git_data_fetcher.mjs` file in the main directory of the repository. This file is used to fetch the data (Pull requests, Issues, Organizations, Pinned projects etc.) from your github.

In the project you will see a `env.example` file, create a new file named `.env` and copy contents of `env.example` into it. In that file, you will see the following environment variables

```javascript
GITHUB_TOKEN = your_token;
GITHUB_USERNAME = your_username;
```

You can get a github token as described [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). Give all permissions while generating token. Add your github username and the token generated in `GITHUB_USERNAME` and `GITHUB_TOKEN` variables in the .env file.

Now, you need to run following command. (Make sure you executed `npm install` before this)

**Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

```node
node git_data_fetcher.mjs
```

This will fetch all the data from your github and it will automatically replace my data with yours.
Whenever you want to update the github related information on the website you need to run this command.

### Splash Logo

Note here that if you click [my portfolio](https://ashutosh1919.github.io), you can see animating the logo at the beginning. I have designed that logo in [`Figma`](https://www.figma.com/) and then animated it using css.
Therefore, this part of portfolio is not customizable. But don't worry we have a solution to this problem. You have below two alternatives:

- If you want to design your own logo, then you can design it using `Figma` or `Adobe XD` or `Adobe Illustrator` or `Inkscape`. If you want to animate it, you can refer to `./src/components/Loader` directory which contains `js` and `css` files which animates the logo
- If you don't want Splash screen or you don't know how to design logo, then this option is for you

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

## Other

- You need to change the website title and other descriptions in `public/index.html`
- You can define your own favicon in `public/icons` directory. If you don't have a favicon, you can generate favicons from [Favicon Generator](https://www.favicon-generator.org/) and [Favicon IO](https://favicon.io/)
- You can also edit your website preview (known as description image). Run your site locally, take a screenshot and replace with `public/icons/desc.png`. Note that your screenshot should be 1280x640 for better preview.

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

<p align="center"> 
    <a href="http://www.youtube.com/watch?v=IwBS39TOmpA" target="_blank">
    <img src="http://img.youtube.com/vi/IwBS39TOmpA/0.jpg"></img>
  </a>
</p>

# Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)

# illustrations 🍥

- [UnDraw](https://undraw.co/illustrations)

# License 📄

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.

# Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://ashutosh1919.github.io"><img src="https://avatars3.githubusercontent.com/u/20843596?s=460&u=7f184b911f73ae1dc5765ab686fff2b2e984830f&v=4?s=100" width="100px;" alt="Ashutosh Hathidara"/><br /><sub><b>Ashutosh Hathidara</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=ashutosh1919" title="Code">💻</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=ashutosh1919" title="Documentation">📖</a> <a href="#design-ashutosh1919" title="Design">🎨</a> <a href="#maintenance-ashutosh1919" title="Maintenance">🚧</a> <a href="#ideas-ashutosh1919" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://danielmarostica.github.io/"><img src="https://avatars3.githubusercontent.com/u/3595998?v=4?s=100" width="100px;" alt="Daniel Marostica"/><br /><sub><b>Daniel Marostica</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=danielmarostica" title="Documentation">📖</a> <a href="#design-danielmarostica" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dineshnadimpalli.com"><img src="https://avatars2.githubusercontent.com/u/13104926?v=4?s=100" width="100px;" alt="Dinesh Nadimpalli"/><br /><sub><b>Dinesh Nadimpalli</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=dineshnadimpalli" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jivthesh.github.io"><img src="https://avatars3.githubusercontent.com/u/20579980?v=4?s=100" width="100px;" alt="Jivthesh M R"/><br /><sub><b>Jivthesh M R</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=jivthesh" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jatinchauhan.tech"><img src="https://avatars2.githubusercontent.com/u/40722235?v=4?s=100" width="100px;" alt="Jatin Chauhan"/><br /><sub><b>Jatin Chauhan</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=mrjatinchauhan" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://th3c0d3br34ker.github.io/"><img src="https://avatars1.githubusercontent.com/u/60807938?v=4?s=100" width="100px;" alt="Jainam Desai"/><br /><sub><b>Jainam Desai</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=th3c0d3br34ker" title="Code">💻</a> <a href="#question-th3c0d3br34ker" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://miftaulmannan.wordpress.com/"><img src="https://avatars0.githubusercontent.com/u/42533823?v=4?s=100" width="100px;" alt="Miftaul Mannan"/><br /><sub><b>Miftaul Mannan</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=Tasin5541" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://a-mishra.github.io"><img src="https://avatars0.githubusercontent.com/u/10567548?v=4?s=100" width="100px;" alt="Ashutosh Mishra"/><br /><sub><b>Ashutosh Mishra</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=a-mishra" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://tamojit.wixsite.com/mrtamojit"><img src="https://avatars0.githubusercontent.com/u/40804626?v=4?s=100" width="100px;" alt="Tamojit"/><br /><sub><b>Tamojit</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=tamojit-123" title="Documentation">📖</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=tamojit-123" title="Code">💻</a> <a href="#design-tamojit-123" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://prabin-karki.com.np"><img src="https://avatars.githubusercontent.com/u/43983896?v=4?s=100" width="100px;" alt="Prabin Karki"/><br /><sub><b>Prabin Karki</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=githubprabin143" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://praveen.science/"><img src="https://avatars.githubusercontent.com/u/1830380?v=4?s=100" width="100px;" alt="Praveen Kumar Purushothaman"/><br /><sub><b>Praveen Kumar Purushothaman</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=praveenscience" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://baul.ml"><img src="https://avatars.githubusercontent.com/u/33395806?v=4?s=100" width="100px;" alt="paul"/><br /><sub><b>paul</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=baulml" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SandipDhang"><img src="https://avatars.githubusercontent.com/u/50694884?v=4?s=100" width="100px;" alt="Sandip Dhang"/><br /><sub><b>Sandip Dhang</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=SandipDhang" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ioribrn"><img src="https://avatars.githubusercontent.com/u/43734587?v=4?s=100" width="100px;" alt="Jawad Moustadif"/><br /><sub><b>Jawad Moustadif</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=ioribrn" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/priyanshk20"><img src="https://avatars.githubusercontent.com/u/52736997?v=4?s=100" width="100px;" alt="Priyansh Khandelwal"/><br /><sub><b>Priyansh Khandelwal</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=priyanshk20" title="Code">💻</a> <a href="#design-priyanshk20" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abdslam01"><img src="https://avatars.githubusercontent.com/u/59281502?v=4?s=100" width="100px;" alt="Abdessalam Bahafid"/><br /><sub><b>Abdessalam Bahafid</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=abdslam01" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://dhruvkrishnavaid.github.io"><img src="https://avatars.githubusercontent.com/u/69188774?v=4?s=100" width="100px;" alt="Dhruv Krishna Vaid"/><br /><sub><b>Dhruv Krishna Vaid</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=dhruvkrishnavaid" title="Code">💻</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=dhruvkrishnavaid" title="Documentation">📖</a> <a href="#ideas-dhruvkrishnavaid" title="Ideas, Planning, & Feedback">🤔</a> <a href="#question-dhruvkrishnavaid" title="Answering Questions">💬</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kasroudra.github.io"><img src="https://avatars.githubusercontent.com/u/78908440?v=4?s=100" width="100px;" alt="KasRoudra"/><br /><sub><b>KasRoudra</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=KasRoudra" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://telegram.dog/AlbertEinstein_TG"><img src="https://avatars.githubusercontent.com/u/73480087?v=4?s=100" width="100px;" alt="Albert Einstein"/><br /><sub><b>Albert Einstein</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=AlbertEinsteinTG" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SurajPratap10"><img src="https://avatars.githubusercontent.com/u/92919173?v=4?s=100" width="100px;" alt="Suraj Pratap"/><br /><sub><b>Suraj Pratap</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=SurajPratap10" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lightmap.dev"><img src="https://avatars.githubusercontent.com/u/40917760?v=4?s=100" width="100px;" alt="Sai Teja"/><br /><sub><b>Sai Teja</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=saiteja13427" title="Code">💻</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=saiteja13427" title="Documentation">📖</a> <a href="#maintenance-saiteja13427" title="Maintenance">🚧</a> <a href="#ideas-saiteja13427" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://anirudhpanda.in/"><img src="https://avatars.githubusercontent.com/u/66218496?v=4?s=100" width="100px;" alt="Anirudh Panda"/><br /><sub><b>Anirudh Panda</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=AnirudhPanda" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://hidayat7z.github.io"><img src="https://avatars.githubusercontent.com/u/63554016?v=4?s=100" width="100px;" alt="Md Hidayat Rasool"/><br /><sub><b>Md Hidayat Rasool</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=hidayat7z" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/siddhantsadangi/"><img src="https://avatars.githubusercontent.com/u/41324509?v=4?s=100" width="100px;" alt="Siddhant Sadangi"/><br /><sub><b>Siddhant Sadangi</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=SiddhantSadangi" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://anoopvarghese.in/"><img src="https://avatars.githubusercontent.com/u/59723767?v=4?s=100" width="100px;" alt="Anoop V"/><br /><sub><b>Anoop V</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=vanoop729" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aash1999"><img src="https://avatars.githubusercontent.com/u/39939476?v=4?s=100" width="100px;" alt="Aakash Singh"/><br /><sub><b>Aakash Singh</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=aash1999" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://aherrera3.github.io/"><img src="https://avatars.githubusercontent.com/u/52289646?v=4?s=100" width="100px;" alt="Angélica Herrera Alba"/><br /><sub><b>Angélica Herrera Alba</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=aherrera3" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://davidminkovski.com"><img src="https://avatars.githubusercontent.com/u/1609264?v=4?s=100" width="100px;" alt="David Minkovski"/><br /><sub><b>David Minkovski</b></sub></a><br /><a href="#ideas-dminkovski" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=dminkovski" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://cdigruttola.it"><img src="https://avatars.githubusercontent.com/u/9153905?v=4?s=100" width="100px;" alt="Carmine Di Gruttola"/><br /><sub><b>Carmine Di Gruttola</b></sub></a><br /><a href="#ideas-cdigruttola" title="Ideas, Planning, & Feedback">🤔</a> <a href="#promotion-cdigruttola" title="Promotion">📣</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Vyomrana02"><img src="https://avatars.githubusercontent.com/u/87069619?v=4?s=100" width="100px;" alt="Vyom Rana"/><br /><sub><b>Vyom Rana</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=Vyomrana02" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/parthrc"><img src="https://avatars.githubusercontent.com/u/101104958?v=4?s=100" width="100px;" alt="Parth Chawande"/><br /><sub><b>Parth Chawande</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=parthrc" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0Armaan025"><img src="https://avatars.githubusercontent.com/u/104704093?v=4?s=100" width="100px;" alt="Armaan"/><br /><sub><b>Armaan</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=0Armaan025" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://varundhand.netlify.app/"><img src="https://avatars.githubusercontent.com/u/110025628?v=4?s=100" width="100px;" alt="Varun Dhand"/><br /><sub><b>Varun Dhand</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=varundhand" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://vjspranav.dev"><img src="https://avatars.githubusercontent.com/u/17949836?v=4?s=100" width="100px;" alt="VJS Pranavasri"/><br /><sub><b>VJS Pranavasri</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=vjspranav" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://rahulkush1.github.io/"><img src="https://avatars.githubusercontent.com/u/90745824?v=4?s=100" width="100px;" alt="Rahul Kushwaha"/><br /><sub><b>Rahul Kushwaha</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=Rahulkush1" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Adamou02"><img src="https://avatars.githubusercontent.com/u/42783707?v=4?s=100" width="100px;" alt="Adam Bouhrara"/><br /><sub><b>Adam Bouhrara</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=Adamou02" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/16ratneshkumar"><img src="https://avatars.githubusercontent.com/u/142919875?v=4?s=100" width="100px;" alt="Ratnesh Kumar"/><br /><sub><b>Ratnesh Kumar</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=16ratneshkumar" title="Code">💻</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=16ratneshkumar" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Towbee05"><img src="https://avatars.githubusercontent.com/u/114928370?v=4?s=100" width="100px;" alt="Tobi"/><br /><sub><b>Tobi</b></sub></a><br /><a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=Towbee05" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sakshamjoshi.vercel.app/"><img src="https://avatars.githubusercontent.com/u/109752898?v=4?s=100" width="100px;" alt="SAKSHAM JOSHI"/><br /><sub><b>SAKSHAM JOSHI</b></sub></a><br /><a href="#design-saksham-joshi" title="Design">🎨</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=saksham-joshi" title="Code">💻</a> <a href="https://github.com/ashutosh1919/masterPortfolio/commits?author=saksham-joshi" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

# References 👏🏻

- Some Design and Implementation Ideas are taken from [Saad Pasta's Portfolio Project](https://github.com/saadpasta/developerFolio).
- The Logo of MasterPortfolio is inspired from [prettier-logo](https://github.com/prettier/prettier-logo) for [prettier](https://github.com/prettier/prettier) designed by @ianstormtaylor.
