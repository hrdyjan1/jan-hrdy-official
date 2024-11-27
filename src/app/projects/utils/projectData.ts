import yourpass from '../../../../public/images/yourpass.png';
import gigworker from '../../../../public/images/gigworker.jpg';
import shopping from '../../../../public/images/shopping.jpg';
import rohlik from '../../../../public/images/rohlik.png';
import notify from '../../../../public/images/notify.jpg';
import czc from '../../../../public/images/czc.jpg';
import caraudit from '../../../../public/images/caraudit.jpg';

const normalizedProjectListEnglish = {
  '1587414508969': {
    type: 'Web App',
    title: 'Gigworker',
    subTitle: 'Find you Gig.',
    description:
      'Gigworker app helps users explore gig economy opportunities, compare platforms, and access tips to maximize earnings efficiently.',
    year: '2020',
    technologies: ['React, Redux, Lodash, Formik, Webpack, Yup'],
    href: 'https://www.gigworker.com/',
    src: gigworker,
  },
  '1587557459482': {
    type: 'Web App',
    title: 'Rohlík bistro',
    subTitle: 'Food courier',
    description: 'Participated in basic React to kinds of stuff.',
    year: '2020',
    technologies: ['Next JS, React'],
    href: 'https://www.rohlik.cz/c300117732',
    src: rohlik,
  },
  '1587542417768': {
    type: 'Web App',
    title: 'Shopping Cart',
    subTitle: 'Lite Eshop version',
    description: 'Tried to set up some DevOps stuffs (CI, CD).',
    year: '2020',
    technologies: ['CircleCI, Docker, Firebase'],
    href: 'https://github.com/hrdyjan1/4IT572_circleci',
    src: shopping,
  },
  '1587045213421': {
    type: 'Web App',
    title: 'Your Pass',
    subTitle: 'Digital wallet solutions',
    description:
      'YourPass specializes in digital wallet solutions, enabling businesses to create and manage digital passes for seamless customer engagement.',
    year: '2020',
    technologies: ['JavaScript/TypeScript, Go Lang'],
    href: 'https://www.yourpass.eu/',
    src: yourpass,
  },
  '1587439619981': {
    type: 'Mobile App',
    title: 'CZC.cz',
    subTitle: 'E-commerce app',
    description:
      'The CZC.cz mobile app allows you to conveniently browse and purchase computers and consumer electronics directly from your smartphone. The App was removed from Stores.',
    year: '2020',
    technologies: [
      'React Native, Expo, Redux, Firebase, Jest, React Navigation, StoryBook, Axios, Detox, MMKV',
    ],
    href: 'https://allegro.cz/obchod/czc-cz',
    src: czc,
  },
  '1587474125414': {
    type: 'Mobile App',
    title: 'Notify',
    subTitle: 'Notification tool',
    description:
      'App that simplifies your life by organizing tasks, sending timely notifications, and keeping you on track effortlessly.',
    year: '2022',
    technologies: ['React Native, Expo, Github Actions, AppsFlyer, Zustand, i18next'],
    href: 'https://apps.apple.com/us/app/notify-mobile-app/id6448720164',
    src: notify,
  },
  '1587575918884': {
    type: 'Mobile App',
    title: 'CarAudit',
    subTitle: 'Audits for cars',
    description:
      'CarAudit is a mobile application designed to streamline vehicle inspections for car dealerships and bazaars.',
    year: '2023',
    technologies: [
      'React Native, Expo, Firebase, Expo Router, React Native Vision Camera, Aws Amplify, NX',
    ],
    href: 'https://www.omnetic.com/cs/caraudit/',
    src: caraudit,
  },
};

const normalizedProjectListCzech = {
  '1587414508969': {
    ...normalizedProjectListEnglish['1587414508969'],
    type: 'Webová aplikace',
    title: 'Gigworker',
    subTitle: 'Najdi si vlastní melouch.',
    description:
      'Aplikace Gigworker pomáhá uživatelům objevovat příležitosti v ekonomice, porovnávat platformy a získat tipy pro efektivní zvýšení výdělků.',
  },
  '1587557459482': {
    ...normalizedProjectListEnglish['1587557459482'],
    type: 'Webová aplikace',
    title: 'Rohlík bistro',
    subTitle: 'Kurýr jídel',
    description: 'Účastnil jsem se pokládání základů při tvorbě registrace a přihlašování.',
  },
  '1587542417768': {
    ...normalizedProjectListEnglish['1587542417768'],
    type: 'Webová aplikace',
    title: 'Nákupní košík',
    subTitle: 'Jednoduchá varianta eshopu',
    description: 'Pokus o propojení DevOps nástrojů (CI, CD).',
  },
  '1587045213421': {
    ...normalizedProjectListEnglish['1587045213421'],
    type: 'Webová aplikace',
    title: 'Your Pass',
    subTitle: 'Digitální peněženka',
    description:
      'YourPass se specializuje na digitální peněženky, umožňuje firmám vytvářet a spravovat digitální karty pro lepší zapojení zákazníků.',
  },
  '1587439619981': {
    ...normalizedProjectListEnglish['1587439619981'],
    type: 'Mobilní aplikace',
    tile: 'CZC.cz',
    subTitle: 'Eshop aplikace',
    description:
      'Mobilní aplikace CZC.cz vám umožňuje pohodlně procházet a nakupovat počítače a spotřební elektroniku přímo z vašeho smartphonu. Aplikace byla odstraněna z App Store/Google Play Store.',
    year: '2020',
  },
  '1587474125414': {
    ...normalizedProjectListEnglish['1587474125414'],
    type: 'Mobilní aplikace',
    title: 'Notify',
    subTitle: 'Nástroj na notifikace',
    description:
      'Aplikace, která vám usnadní život organizací úkolů, odesíláním včasných upozornění a udržováním vás na cestě vyšší produktivity.',
  },
  '1587575918884': {
    ...normalizedProjectListEnglish['1587575918884'],
    type: 'Mobilní aplikace',
    title: 'CarAudit',
    subTitle: 'Inspekce pro vozidla',
    description:
      'CarAudit je mobilní aplikace navržená pro zjednodušení inspekcí vozidel pro autosalony a autobazary.',
  },
};

const englishProjectList = {
  entities: normalizedProjectListEnglish,
  results: Object.keys(normalizedProjectListEnglish),
};

const czechProjectList = {
  entities: normalizedProjectListCzech,
  results: Object.keys(normalizedProjectListCzech),
};

const englishEntities = englishProjectList.entities;
const englishResults = englishProjectList.results;

const czechEntities = czechProjectList.entities;
const czechResults = czechProjectList.results;

export {
  englishProjectList,
  englishEntities,
  englishResults,
  czechProjectList,
  czechEntities,
  czechResults,
};
