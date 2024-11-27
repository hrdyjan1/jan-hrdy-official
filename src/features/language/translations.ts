const languageStatus = {
  CZECH: 'CZECH',
  ENGLISH: 'ENGLISH',
} as const;

const { ENGLISH, CZECH } = languageStatus;

const aboutPageTranslation = {
  [ENGLISH]: {
    aboutDescription:
      'Here’s me in a nutshell: just a regular human navigating the tech rollercoaster with a proud grin. Over the years, I’ve embraced life as a mobile engineer, and I genuinely enjoy crafting mobile apps that people love to use. I’m all about React Native these days, along with JavaScript, TypeScript, and all the logic, APIs, and frontend libraries that come with it. Testing? Sure, that’s in my toolbox too. Plus, I keep GitHub busy with a steady stream of open-source contributions—it’s my little way of giving back to the tech world. So yeah, I’m a proud app builder who likes to keep things fun, functional, and always moving forward. 🚀',
    lifeWithTech: 'Life in Tech',
    lifeWithoutTech: 'Normal bio life',
    // Timeline sections
    timeline1Date: '15 July 1996',
    timeline1Heading: 'Birth',
    timeline1Description:
      'I was born in the south of the Czech Republic as a first child in family of teachers.',

    timeline2Date: '1996-2011',
    timeline2Heading: 'Childhood',
    timeline2Description:
      'As I grow up, I was constantly in touch with two activities, music and sport. Most of my family are musicians, so playing the guitar and listening to The Beatles is part of my life. Regarding sports activities , ever since I am able to walk I do some sports pieces of stuff.',

    timeline3Date: '2015',
    timeline3Heading: 'University',
    timeline3Description:
      'At the beginning of summer 2015, I successfully completed grammar school and found a perfect girlfriend. Then I started university life. I had chosen to attend CTU in Prague. This was a complex introduction to IT, including basics of programming, databases, system commands and so on.',

    timeline4Date: '2016',
    timeline4Heading: 'First web attempts',
    timeline4Description:
      'The moment the outside world learned that I had something to do with programming, they started bombarding me with orders for websites.',

    timeline5Date: '2017',
    timeline5Heading: 'Mobile Developer',
    timeline5Description:
      'Before I got a good look, I got a job offer at Definity Systems as a mobile developer. It was quite challenging at first. I did not have enough experience, but I learned quickly and soon began to work fully with the development team. We wrote applications in Xamarin for various Czech companies.',

    timeline6Date: '2019',
    timeline6Heading: 'Graduated in university',
    timeline6Description:
      "After exhaustive writing of my bachelor's thesis, which was represented by a mobile application to React Native, I completed college. I received mark B from the final state examination.",

    timeline7Date: '2019',
    timeline7Heading: 'Web developer',
    timeline7Description:
      'In summer 2019 I have changed my employer. I was lucky. When I fell more in love with React a new opportunity has come to Prague. I got an offer to work in the company name Netvor. We develop a web app using React and PHP.',

    timeline8Date: '2019',
    timeline8Heading: 'Sweet little pug',
    timeline8Description:
      'Getting a pug together as a couple was a life-changing decision for us. This little bundle of joy brought endless laughter, love, and a whole new rhythm to our daily lives. Our home truly feels complete with our furry companion.',
    timeline9Date: '2020',
    timeline9Description:
      'At CZC.cz, I worked as the lead of mobile development, managing the team, designing app architecture, and delivering solutions using React Native. Together, we created mobile apps that enhanced user experience and simplified shopping for customers.',
    timeline9Heading: 'Mobile app CZC.cz',
    timeline10Date: '2023',
    timeline10Description:
      'At Carvago, I served as a lead mobile developer, steering the development of the CarAudit app. I designed the app’s architecture, guided the team, and ensured smooth delivery of a solution tailored for efficient vehicle inspection and auditing. This role marked a period of professional growth, where I became more assured in leading teams and driving projects to completion.',
    timeline10Heading: 'Mobile app in Carvago',
  },
  [CZECH]: {
    aboutDescription:
      'Tady jsem já, ve zkratce: obyčejný člověk, který s miluje kreativitní práci ve světě technologií. Za poslední roky jsem si osvojil roli mobilního vývojáře a opravdu mě baví tvořit mobilní aplikace, které lidé rádi používají. Momentálně mě nejvíc baví React Native, spolu s JavaScriptem, TypeScriptem a vším, co k tomu patří – logika aplikací, API, frontendové knihovny. Testování? Jasně, to mám taky pod palcem. K tomu občas přispívám do open-source projektů na GitHubu – můj malý příspěvek zpátky do světa technologií. Takže ano, jsem Hrdý vývojář aplikací, který rád dělá věci zábavné, funkční a vždy směřuje dopředu. 🚀',
    lifeWithTech: 'Život spojený s IT',
    lifeWithoutTech: 'Normální běžný život',

    timeline1Date: '15 Červenec 1996',
    timeline1Heading: 'Narození',
    timeline1Description:
      'Narodil jsem se v Jižních Čechách do učitelské rodiny, tudíž mi školní výchova začala dříve než ostatním. A jsem za to rád.',

    timeline2Date: '1996-2011',
    timeline2Heading: 'Dětství',
    timeline2Description:
      'Už v útlém věku jsem se propojil s hudbou a sportem. Bez nich si nedokáži představit život. Většina rodiny jsou sportovní/hudební nadšenci, takže není divu, že jsme na jedné trase. Už od dětství hraji na kytaru. Mojí hudební mantrou je britská kapela The Beatles. Co se sportu týká, začínal jsem u fotbalu, skončil jsem u basketbalu.',

    timeline3Date: '2015',
    timeline3Heading: 'Vysokoškolský život',
    timeline3Description:
      'Začátkem léta 2015 jsem úspěšně dokončil gymnázium a našel perfektní přítelkyni. Poté jsem začal studovat na vysoké škole. Vybral jsem si ČVUT v Praze. Jednalo se o komplexní úvod do světa IT, včetně základů programování, databází, systémových příkazů atd.',

    timeline4Date: '2016',
    timeline4Heading: 'První IT zakázky',
    timeline4Description:
      'Ve chvíli, kdy se okolní svět dozvěděl, že mám něco do činění s programováním, také mě začal bombardovat zakázkami na webové stránky.',

    timeline5Date: '2017',
    timeline5Heading: 'Mobilní vývojář',
    timeline5Description:
      'Než jsem se pořádně rozkoukal, tak jsem dostal nabídku práce ve firmě Definity Systems jako mobilní vývojář. Z počátku to bylo dosti náročné. Neměl jsem dostatek zkušeností, ale učil jsem se rychle a brzy jsem začal naplno spolupracovat s vývojářským týmem. Psali jsme aplikace v Xamarinu pro různé české firmy.',

    timeline6Date: '2019',
    timeline6Heading: 'Bakalář',
    timeline6Description:
      'Po vyčerpávajícím sepsání bakalářské práce, kterou reprezentovala mobilní aplikace v React Native, jsem úspěšně dostudoval vysokou školu. Od státní závěrečné zkoušky jsem si odnesl známku B.',

    timeline7Date: '2019',
    timeline7Heading: 'Webový vývojář',
    timeline7Description:
      'V létě 2019 jsem změnil svého zaměstnavatele. Měl jsem štěstí. Když jsem propadl kouzlu React JS, přišla z Prahy nová příležitost. Dostal jsem nabídku pracovat ve společnosti Netvor. Vyvíjíme zde webovou aplikaci pomocí Reactu a PHP.',

    timeline8Date: '2019',
    timeline8Heading: 'Malý mopsík',
    timeline8Description:
      'Pořídit si mopse jako pár byla pro nás životní změna. Tento malý chlupatý společník přinesl do našeho života spoustu radosti, lásky a nový rytmus každodenního života. S ním je náš domov skutečně kompletní.',
    timeline9Date: '2020',
    timeline9Description:
      'V CZC.cz jsem působil jako vedoucí mobilního vývoje, kde jsem řídil tým, navrhoval architekturu aplikací a zajišťoval jejich realizaci pomocí React Native. Společně jsme vytvořili mobilní aplikace, které zlepšily uživatelský zážitek a usnadnily nakupování zákazníkům.',
    timeline9Heading: 'Mobilní aplikace CZC.cz',
    timeline10Date: '2023',
    timeline10Description:
      'V Carvagu jsem vedl vývoj mobilní aplikace CarAudit. Navrhoval architekturu, řídil tým a zajistil dodání řešení pro efektivní inspekci a audit vozidel. V poslední době jsem pracoval na nahrávání/stahování videí. Tato zkušenost mě posunula nejen po stránce vývojářské ale hlavně v oblasti vedení a řízení projektů.',
    timeline10Heading: 'Mobilní aplikace CarAudit',
  },
};

const mainPageTranslation = {
  [ENGLISH]: {
    homePageDescription:
      'Welcome back! You’ve landed on the heart of my personal website. Here, I’ve broken down the key aspects of my life and work into a few neat categories. Dive in and explore!',
    homePageSection1Heading: 'What’s the purpose of this app?',
    homePageSection1Description:
      "Every once in a while, someone stumbles across this corner of the web. If that's you—welcome! This is my personal hub, where I share insights about my projects and showcase a bit of who I am. Feel free to explore and learn more!",
    homePageSection2Heading: 'My Current job',
    homePageSection2Description:
      'Since 2023, I’ve been the Mobile Lead Developer at Carvago, where I focus on building innovative tools to transform the car-buying experience. One of my key projects is CarAudit, an app designed to provide comprehensive audits on vehicles—an essential first step in buying cars safely and confidently. It’s just one piece of a broader ecosystem of apps aimed at simplifying and enhancing the car-buying journey for everyone.',
    homePageSection3Heading: 'Me and Programming',
    homePageSection3Description:
      'Programming has been my passion since my university days at CTU, where I began with simple web applications and later expanded into backend systems and mobile development. Discovering React Native was a game-changer, and now I focus on crafting sleek, intuitive solutions with JavaScript and React Native. Bringing ideas to life through code is what drives me. Click to explore my GitHub and dive deeper into my work.',
    homePageSection4Heading: 'Projects I’m Part Of',
    homePageSection4Description:
      'Over the years, I’ve had the privilege of contributing to a variety of exciting projects. Whether it’s collaborating on innovative IT solutions, organizing sports events, or diving into video production, I thrive on teamwork and creativity. These experiences have shaped my skills and fueled my passion for creating impactful work. Want to see more? Check out the "Projects" page.',
    homePageSection5Heading: 'Who am I?',
    homePageSection5Description:
      'I’m just a regular human trying to make sense of this wild ride called life. By day, I’m a frontend engineer based in the beautiful capital of the Czech Republic, turning complex challenges into sleek, intuitive web and mobile experiences. By night? You might find me jamming on my guitar, diving into the latest tech trends, or breaking a sweat with some sports. Want to know more? Head over to the "About" page.',
    homePageSection6Heading: 'App settings',
    homePageSection6Description:
      'Take control of your experience here. Switch up the language, toggle between light and dark modes, or add a touch of silence by muting the music. Want to fine-tune things further? Head over to "Settings" and make it yours.',
    homePageSection7Heading: 'Current project',
    homePageSection7Description:
      'Our team believes that there is beauty in simplicity. We also think our simple tool for organizing things can make your life easier. If you want to get notified at a specific time, to be more punctual by creating projects, to relieve your head from remembering things to do then feel free to formulate a assignment a make your life easier. We believe in Notify App.',
    homePageSection8Heading: 'Social life',
    homePageSection8Description:
      'When I’m not coding, I’m all about staying active and connected. I’ve played basketball my whole life, enjoy jogging, working out, and diving into psychology books. Music keeps me grounded—I love playing acoustic guitar—and I never miss a chance to play board games with friends. Weekends are for quality time with my wife and our pug, traveling with friends, or organizing social events. I’m also a hackathon enthusiast, always chasing new ideas and collaborations. Click here to explore more of my world on Instagram.',
    homePageSection9Heading: 'Questions and errors',
    homePageSection9Description:
      'Need to reach out or report an issue? You\'re just one click away! Press this article to head straight to the "About" page, where you’ll find all my contact details. I recommend using email for the best response. Let’s connect—I’d love to hear from you!',
  },
  [CZECH]: {
    homePageDescription:
      'Ještě jednou, vítejte na mém osobním webu. Nyní jste se ocitli na domovské stránce. Zde je několik různých kategorií, které se snaží charakterizovat hlavní části celého webu.',
    homePageSection1Heading: 'Co vás na těchto stránkách čeká a nemine?',
    homePageSection1Description:
      'Občas se stane, že na tyto stránky zavítá někdo, kdo by se rád rychle dozvěděl, co lze najít na těchto stránkách. Tak přátelé, tento web reprezentuje mé vlastní osobní portfolio. Můžete se zde dozvědět několik informací o projektech, kterých jsem součástí, zjistit, jak mě kontaktovat a mnohé další.',
    homePageSection2Heading: 'Moje aktuální práce',
    homePageSection2Description:
      'Je mi velkou ctí sdělit Vám, že aktuálně jsem zaměstnaný v úžasné firmě, která řeší tvorbu webových a mobilních aplikací. Funguji zde jako Frontendový specialista. Mou hlavní náplní je čistě JavaScript. Konkrétně React JS. Sídlíme v Praze a říkáme si Netvor',
    homePageSection3Heading: 'Programování',
    homePageSection3Description:
      'Na cestu počítačových technologií jsem se dostal až na vysoké škole. Začal jsem studium na ČVUT, kde jsem si postupem času osvojil základy. Na počátku jsem tvořil webové aplikace. Později jsem se věnoval více serverové části. Začal jsem využívat několik základních programátorských nástrojů či knihoven. Dostal jsem se na čas i k mobilnímu vývoji. Ve chvíli, kdy jsem narazil na React Native, jsem byl ohromen, s jakou ladností a lehkostí lze tvořit mobilní aplikace. Od té doby žiji převážně ve světě, kde dominuje jazyk JavaScript a technologie spojené s ReactJS. Největší radost mi dělá tvořit logiku aplikace, stylování posouvám většinou na poslední místo.',
    homePageSection4Heading: 'Projekty',
    homePageSection4Description:
      'Pracoval jsem v životě už na několika různorodých projektech. Do většiny projektů jsem se zapojil hlavně proto, že mě lidé často považují za pozitivního, týmového hráče s vynikajícími tvůrčími schopnostmi. Většina z mých konexí je spojena se světem IT. Mezi mé zkušenosti patří také video produkce nebo organizace sportovních akcí. Pokud se chcete dozvědět více, navštivte stránku "Projekty".',
    homePageSection5Heading: 'Co jsem zač?',
    homePageSection5Description:
      'Cítím se jako normální člověk, žijící normální život. Také se mimo jiné považuji za frontendistu žijícím v hlavním městě České republiky. Baví mě proměnit složité problémy v jednoduché, tvořit krásné a intuitivní webové nebo mobilní aplikace. Pokud zrovna nepřidávám na server pár řádků kódu nebo netvořím logiku aplikace, tak mě nejspíš najdete někde, kde buď jím, hraji na kytaru nebo dělám něco sportovního. Pokud se chcete dozvědět o mně více, stačí navštívit stránku "O mně".',
    homePageSection6Heading: 'Úpravy podle vás',
    homePageSection6Description:
      'Tato webová stránka obsahuje několik různých variant. Neváhejte a využijte toho. Lze například přepnout jazyk, změnit aktuální vzhled. Wau, můžete zvolit buď tmavý či světlý režim. Pokud dáváte přednost procházení stránek bez možných zvuků, tak lze na webu vypnout hudbu. Pokud se chcete dozvědět více, stačí navštívit sekci "Nastavení".',
    homePageSection7Heading: 'Aktuální projekt',
    homePageSection7Description:
      'Aktuální projekt, na kterém pracujeme, se jmenuje Notify. Jde o mobilní aplikaci, které nám má usnadnit společné bytí, kdy se nemusíme starat o různé prapodivné upozornění či pravidelné připomínky. Notify funguje i na principu spojení více lidí.',
    homePageSection8Heading: 'Připoj se do naší party',
    homePageSection8Description:
      'Jaký by byl život bez přátel. Oceňuji chvíle strávené se svými blízkými. Díky přátelské atmosféře se cítím dobře. Téměř každý pátek se scházíme s přáteli u karetní hry Bang. Často také hraji basketbal nebo sleduji utkání mého oblíbeného týmu v NBA. Boston Celtics! Jsem také velmi vděčný za skvělou přítelkyni a fantastického malého mopsíka.',
    homePageSection9Heading: 'Otázky a chyby',
    homePageSection9Description:
      'Nebývá to zvykem, ale někdy se mezi Vámi vyskytne někdo, kdo má otázku, kterou by chtěl ode mě zodpovědět. Občas se také stane, že někdo najde chybu na těchto stránkách. Nebývá to časté, ale můžete se to stát. V takovýchto případech stačí navštívit stránku: "O mně", kde najde sekci kontakt Zde si můžete vybrat, jakou cestou se se mnou spojit. Budu rád za případné dotazy či upozornění na chybu.',
  },
};

const languageStrings = {
  [ENGLISH]: {
    home: 'Home', // Main Navigation
    about: 'About', // Main Navigation
    projects: 'Projects', // Main Navigation
    settings: 'Settings', // Main Navigation, Modal
    close: 'Close', // Modal
    tryToReload: 'Try to reload.', // Loading page
    loading: 'Loading', // Loading page
    welcome: 'Welcome', // Welcome page
    textIntroPart1: 'Hey there! My name is ', // Welcome page
    textIntroPart2:
      ' Welcome to my little corner of the web. Take your time, look around, and check out some of the cool projects I’ve been working on',
    here: 'here', // Welcome page - introText
    feelFree: 'Curious?', // Welcome page - button
    toEnter: 'Dive in here.', // Welcome page - button
    homePageText: 'This is home page.', // Home page - button
    aboutPageText: 'This is about page.', // Home page - button
    projectsDescription: 'Here is a list of projects I have participated in 2020.', // Projects page = h2
    name: 'Name', // Projects page = search type value
    type: 'Type', // Projects page = search type value
    search: 'Search', // Projects page = default search input value
    contact: 'Contact', // About page = Contact
    description404: 'Oops, there is nothing in there.', // 404 page
    ...mainPageTranslation.ENGLISH,
    ...aboutPageTranslation.ENGLISH,
  },
  [CZECH]: {
    home: 'Domů',
    about: 'O mně',
    projects: 'Projekty',
    settings: 'Nastavení',
    close: 'Zavřít',
    tryToReload: 'Zkuste znovu načíst.',
    loading: 'Načítání',
    welcome: 'Vítejte',
    textIntroPart1: 'Tato aplikace reprezentuje mé osobní stránky. Zdraví Vás ',
    textIntroPart2:
      ' Je mi ctí, že jste zavítali přímo sem. Pokud Vás zajímá nějáký projekt, na kterém jsem se podílel, tak prosím kliknětě',
    here: 'zde',
    feelFree: 'Neváhejte',
    toEnter: 'vstoupit',
    homePageText: 'Toto je domovská stránka.',
    aboutPageText: 'Tato stránka je o mně.',
    projectsDescription: 'Zde je uveden seznam projektů, na kterých jsem se podílel v roce 2020.',
    name: 'Název',
    type: 'Typ',
    search: 'Vyhledat',
    contact: 'Kontakt',
    description404: 'Ups,tady nic není.',
    ...mainPageTranslation.CZECH,
    ...aboutPageTranslation.CZECH,
  },
} as const;

const languageReducerType = {
  [languageStatus.CZECH]: languageStatus.CZECH,
  [languageStatus.ENGLISH]: languageStatus.ENGLISH,
  TOGGLE: 'TOGGLE',
};

const defaultLanguage = languageStatus.ENGLISH;

const initializeLanguage = (status: keyof typeof languageStatus) => ({
  status: languageStatus[status] || defaultLanguage,
});

export {
  languageStrings,
  languageStatus,
  languageReducerType,
  defaultLanguage,
  initializeLanguage,
};
