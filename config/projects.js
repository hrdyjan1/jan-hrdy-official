import kanban from '../public/images/kanban.png';
import starwars from '../public/images/starwars.jpg';
import gigworker from '../public/images/gigworker.jpg';
import shopping from '../public/images/shopping.jpg';
import rohlik from '../public/images/rohlik.jpg';

const normalizedProjectListEnglish = {
  '1587045210872': {
    type: 'Web App',
    title: 'Kanban',
    subTitle: 'Helper for agile development',
    description:
      'This project is for training purposes only, using the technologies used with React. Specifically, it is Redux.',
    year: '2020',
    technologies: ['React, Redux, Normalizer, Lodash, Reselect'],
    href: '/projects/kanban',
    src: kanban,
  },
  '1587045213421': {
    type: 'Web App',
    title: 'Starwars List',
    subTitle: 'Star Wars character finder',
    description:
      'A simple application only to test the combination of two technologies: Redux and Redux Observable.',
    year: '2020',
    technologies: ['React, Redux, Redux Observable, RxJS'],
    href: '/projects/starwars',
    src: starwars,
  },
  '1587414508969': {
    type: 'Web App',
    title: 'Gigworker',
    subTitle: 'Find you Gig.',
    description: 'All your favorite companies, all in one place. Online gig opportunity in US.',
    year: '2020',
    technologies: ['React, Redux, Lodash, Formik, Webpack, Yup'],
    href: 'https://gigworker-stage.herokuapp.com/',
    src: gigworker,
  },
  '1587542417768': {
    type: 'Web App',
    title: 'Shopping Cart',
    subTitle: 'Lite Eshop version',
    description: 'Tried to set up some DevOps stuffs (CI, CD).',
    year: '2020',
    technologies: ['CircleCI, Docker, Firebase'],
    href: 'https://gigworker-stage.herokuapp.com/',
    src: shopping,
  },
  '1587557459482': {
    type: 'Web App',
    title: 'Rohlík bistro',
    subTitle: 'Food courier',
    description: 'Participated in basic React to kinds of stuff.',
    year: '2020',
    technologies: ['Next JS, React'],
    href: 'https://rohlikbistro.cz/',
    src: rohlik,
},
};

const normalizedProjectListCzech = {
    '1587045210872': {
        ...normalizedProjectListEnglish['1587045210872'],
        type: 'Webová aplikace',
        title: 'Kanban',
        subTitle: 'Pomůcka na agilní vývoj',
        description:
        'Tento projekt slouží pouze pro účely zaučení k použití technologií používaných společně s Reactem. Konkrétně se jedná o Redux.',
    },
    '1587045213421': {
        ...normalizedProjectListEnglish['1587045213421'],
        type: 'Webová aplikace',
        title: 'Star Wars seznam',
        subTitle: 'Vyhledávač jmen postav ze starwars',
        description:
        'Jednoduchá aplikace pouze pro zkoušku spojenení dvou technologií: Redux a Redux Observable.',
    },
    '1587414508969': {
        ...normalizedProjectListEnglish['1587414508969'],
        type: 'Webová aplikace',
        title: 'Gigworker',
        subTitle: 'Najdi si vlastní melouch.',
        description:
        'Posláním Gigworkeru je sdílet cenné informace o chvilkových volnočasových pracích nabízených na internetu. Melouchy jsem pro všechny, od začátečníků, kteří chtějí začít s drobným přivýdělkem, až po veterány z gigantických firem, kteří se snaží rozšířit svou říši.',
    },
    '1587542417768': {
        ...normalizedProjectListEnglish['1587542417768'],
        type: 'Webová aplikace',
        title: 'Nákupní košík',
        subTitle: 'Jednoduchá varianta eshopu',
        description: 'Pokus o propojení DevOps nástrojů (CI, CD).',
    },
    '1587557459482': {
        ...normalizedProjectListEnglish['1587557459482'],
        type: 'Webová aplikace',
        title: 'Rohlík bistro',
        subTitle: 'Kurýr jídel',
        description: 'Účastnil jsem se pokládání základů při tvorbě registrace a přihlašování.',
        
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
