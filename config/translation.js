const languageStatus = {
  CZECH: 'CZECH',
  ENGLISH: 'ENGLISH',
};

const { ENGLISH, CZECH } = languageStatus;

const mainPageTranslation = {
  [ENGLISH]: {
    homePageDescription:
      'Once again, welcome to my personal website. You are now at home page. Here are a few different categories that characterize main part of my life.',
    homePageSection1Heading: 'Why a vegetarian?',
    homePageSection1Description:
      'For a few years now, I have had a different lifestyle than the average person. I am not able to simply accept the idea that an animal has died at the expense of myself. I give up meat because of their concern for animals. Sometimes, however, I make an exception.',
    homePageSection2Heading: 'Lovers of books',
    homePageSection2Description:
      'Books are my inspiration. There are two titles that I read each year: "The Four agreements", "The man who loved the seagulls". The rest of my book initiative is tied to playing with programming.',
    homePageSection3Heading: 'Programming',
    homePageSection3Description:
      'I made my way to computer technology at university. I started my studies at CTU, where I learned the basics over time. at the beginning I created web applications. Later I devoted more server part. I started using several basic programming tools or libraries. I got to mobile development for a while. The moment I came across React Native, I was amazed at how graceful and easy it was to create mobile apps. Since then I have lived mostly in a world dominated by JavaScript and ReactJS-related technologies. The greatest joy makes me create the logic of the application, I usually move styling to the last place.',
    homePageSection4Heading: 'Sport to health',
    homePageSection4Description:
      'One of the few activities without which life would probably not make sense to me. I have been involved in sports throughout my existence, and I believe that I will continue to devote myself for a long time. The first place is 100% basketball. I am a fan of the Boston Celtics. If I had to successfully answer the question: "Which activity do I do most in my life?", Sport would certainly be in the first place. He would probably share first place along with music and programming. I cannot clearly say which activity I am more inclined to do.',
    homePageSection5Heading: 'Questions and errors',
    homePageSection5Description:
      'Occasionally, there may be someone in the vast community of people browsing the Internet who has a personal question to answer from me. Sometimes it also happens that someone finds a mistake on this site. It\'s not common, but you can. In such cases, just visit the "About Me" page, where you will find a contact section where you can choose which way to contact me. I will be glad for any questions or warnings about the error.',
    homePageSection6Heading: 'Card game the Bang',
    homePageSection6Description:
      "We have been meeting with friends over the Bang game for some Friday. We first started playing in a bunch at the end of 2018, and since 2019 we even have a cup and regularly announce the winners for each quarter. By the way, I've never been on the podium before.",
    homePageSection7Heading: 'Notify App',
    homePageSection7Description:
      'The current project we are working on. It is a mobile application designed to make it easier for us to be together, without worrying about strange notifications or regular reminders. Notify also works on the principle of connecting more people.',
    homePageSection8Heading: 'Family gem',
    homePageSection8Description:
      "What a life without friends and family. I appreciate the moments spent in my loved ones. The friendly atmosphere makes me feel good, and there are also a few people who would dare to understand me. I'm also grateful for a great girlfriend and a fantastic little pug.",
    homePageSection9Heading: 'Music, music, music ...',
    homePageSection9Description:
      'If I narrow my eye a little, I do music every day. I love to play songs associated with pop rock bands. My favorite foreign artists are The Beatles. On the Czech scene, I fell in love with a promising Czech musician, Pokáč, who presents himself as: an attempt at folk.',
  },
  [CZECH]: {
    homePageDescription:
      'Ještě jednou Vás vítám na mých osobních webových stránkách. Právě jste se ocitli na hlavní stránce. Zde je představeno několik různorodých kategorii, které charakterizují části mého života.',
    homePageSection1Heading: 'Proč vegetarián?',
    homePageSection1Description:
      'Už pár let mám odlišný životní styl než průměrný člověk. Normálně nejím maso. Nejsem schopný jednoduše přijmout myšlenku, že nějaký zvíře umřelo na úkor toho, abych se najedl, když existuje i jiná cesta stravování. Občas se však stane, že udělám výjimku.',
    homePageSection2Heading: 'Milovník knih',
    homePageSection2Description:
      'Knihy jsou pro mě inspirací. Jsou dva tituly, které čtu pravidelně každý rok: "Čtyři dohody", "Muž, který miloval racky". Zbytek mé knižní iniciativy je spjatý většinou s programováním.',
    homePageSection3Heading: 'Programování',
    homePageSection3Description:
      'Na cestu počítačových technologií jsem se dostal až na vysoké škole. Začal jsem studium na ČVUT, kde jsem si postupem času osvojil základy. na počátku jsem tvořil webové aplikace. Později jsem se věnoval více serverové části. Začal jsem využívat několik základních programátorských nástrojů či knihoven. Dostal jsem se na čas i k mobilnímu vývoji. Ve chvíli, kdy jsem narazil na React Native jsem byl ohromen, s jakou ladností a lehkostí lze tvořit mobilní aplikace. Od té doby žiji převážně ve světě, kde dominuje jazyk JavaScript a technologie spojené s ReactJS. Nejvetší radost mi dělá tvořit logiku aplikace, stylování posouvám většinou na poslední místo.',
    homePageSection4Heading: 'Sportem ku zdraví',
    homePageSection4Description:
      'Jedna z mála aktivit, bez kterých by mi nejspíš život nedával smysl. Sportu se věnuji po celou dobu své vlastní existence, a věřím, že ještě hodně dlouho věnovat budu. Na první místo patří stoprocentně basketbal. Jsem mimo jiné fanoušek týmu Boston Celtics. Pokud bych měl úspěšně odpovědět na otázku: "Které aktivitě se v životě věnuji nejvíce?", tak sport by byl určitě někde v prvních příčkách. Pravděpodobně by se dělil o první místo společně s hudbou a programováním. Nedokážu jasně říct, které aktivitě jsem více nakloněný.',
    homePageSection5Heading: 'Otázky a chyby',
    homePageSection5Description:
      'Občas se může stát, že se v té obrovské komunitě lidí pohybujících se na internetu vyskytne někdo, kdo má osobní otázku, kterou by chtěl ode mě zodpovědět. Občas se také stane, že někdo najde chybu na těchto stránkách. Nebývá to časté, ale můžete se to stát. V takovýchto případech stačí navštívit stránku: "O mně", kde najde sekci kontakt, kde si můžete vybrat, jakou cestou se se mnou spojit. Budu rád za případné dotazy, či upozornění na chybu.',
    homePageSection6Heading: 'Karetní hra Bang',
    homePageSection6Description:
      'Už nějaký ten pátek se společné s přáteli scházíme nad partičkou karetní hry Bang. Poprvé jsme začali hrát v partě na konci roku 2018 a od roku 2019 máme dokonce pohár a pravidelně vyhlašujeme vítěze za každé čtvrtletí. Mimochodem ještě jsem nikdy nebyl na stupni vítězů.',
    homePageSection7Heading: 'Aplikace Notify',
    homePageSection7Description:
      'Aktuální projekt, na kterém pracujeme. Jde o mobilní aplikaci, které nám má usnadnit společné bytí, kdy se nemusíme starat o různé prapodivné upozornění či pravidelné připomínky. Notify funguje i na principu spojení více lidí.',
    homePageSection8Heading: 'Rodinný klenot',
    homePageSection8Description:
      'Co by to bylo za život bez přátel a rodiny. Vážím si momentů strávených v okruhu svých blízkých. Ta přátelská atmosféra ve mě totiž vyvolává pocit pohody, a také se jedná o několika málo lidí, kteří bych si dovolil tvrdit, že mi rozumí. Jsem také vděčný za skvělou přítelkyni a fantastického malého mopsíka.',
    homePageSection9Heading: 'Hudba, hudba, hudba,..',
    homePageSection9Description:
      'Pokud trochu přimhouřím očko, tak hudbě se věnuji denně. Velice rád hraji na kytaru skladby spojené s pop-rockovými kapelami. Mezi mé nejoblíbenější zahraniční interprety patří The Beatles. Na české scéně jsem si zamiloval nadějného českého muzikanta, Pokáče, který se prezentuje jako: pokus o folk.',
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
    textIntroPart1: 'This app is a personal website of myself, ', // Welcome page
    textIntroPart2:
      ' Feel free to move here as you like. If you are interested in projects, that I am part of, than click', // Welcome page
    here: 'here', // Welcome page - introText
    feelFree: 'Feel free', // Welcome page - button
    toEnter: 'to enter', // Welcome page - button
    homePageText: 'This is home page.', // Home page - button
    aboutPageText: 'This is about page.', // Home page - button
    projects: 'Projects', // Projects page = h1
    projectsDescription: 'Here is a list of projects I have participated in.', // Projects page = h2
    name: 'Name', // Projects page = search type value
    type: 'Type', // Projects page = search type value
    search: 'Search', // Projects page = default search input value
    about: 'About Me', // About page = h1
    aboutDescription: 'Description', // About page = h2
    ...mainPageTranslation.ENGLISH,
  },
  [CZECH]: {
    home: 'Domů',
    about: 'O mě',
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
    projects: 'Projekty',
    projectsDescription: 'Zde je uveden seznam projektů, na kterých jsem se podílel.',
    name: 'Název',
    type: 'Typ',
    search: 'Vyhledat',
    about: 'O mě', // About page = h1
    aboutDescription: 'Popis', // About page = h2
    ...mainPageTranslation.CZECH,
  },
};

const languageReducerType = {
  [languageStatus.CZECH]: languageStatus.CZECH,
  [languageStatus.ENGLISH]: languageStatus.ENGLISH,
  TOGGLE: 'TOGGLE',
};

const defaultLanguage = languageStatus.ENGLISH;

const initializeLanguage = (status) => ({
  status: languageStatus[status] || defaultLanguage,
});

export {
  languageStrings,
  languageStatus,
  languageReducerType,
  defaultLanguage,
  initializeLanguage,
};
