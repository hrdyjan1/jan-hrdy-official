const languageStatus = {
  CZECH: 'CZECH',
  ENGLISH: 'ENGLISH',
};

const { ENGLISH, CZECH } = languageStatus;

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
