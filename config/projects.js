import kanban from '../public/images/kanban.png';
import starwars from '../public/images/starwars.jpg';
import gigworker from '../public/images/gigworker.jpg';

const normalizedProjectListEnglish = {
  '1587045210872': {
    type: 'Web App',
    title: 'Kanban',
    subTitle: 'Helper for agile development',
    description:
      'This project is for training purposes only, using the technologies used with React. Specifically, it is Redux',
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
      'A simple application only to test the combination of two technologies: Redux and Redux Observable',
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
    technologies: ['React, Redux, Redux Observable, RxJS'],
    href: '/projects/starwars',
    src: gigworker,
  },
};

const normalizedProjectListCzech = {
  '1587045210872': {
    type: 'Webová aplikace',
    title: 'Kanban',
    subTitle: 'Pomůcka na agilní vývoj',
    description:
      'Tento projekt slouží pouze pro účely zaučení k použití technologií používaných společně s Reactem. Konkrétně se jedná o Redux.',
    year: '2020',
    technologies: ['React, Redux, Normalizer, Lodash, Reselect'],
    href: '/projects/kanban',
    src: kanban,
  },
  '1587045213421': {
    type: 'Webová aplikace',
    title: 'Star Wars seznam',
    subTitle: 'Vyhledávač jmen postav ze starwars',
    description:
      'Jednoduchá aplikace pouze pro zkoušku spojenení dvou technologií: Redux a Redux Observable',
    year: '2020',
    technologies: ['React, Redux, Redux Observable, RxJS'],
    href: '/projects/starwars',
    src: starwars,
  },
  '1587414508969': {
    type: 'Webová aplikace',
    title: 'Gigworker',
    subTitle: 'Najdi si vlastní melouch.',
    description:
      'Posláním Gigworkeru je sdílet cenné informace o chvilkových volnočasových pracích nabízených na internetu. Melouchy jsem pro všechny, od začátečníků, kteří chtějí začít s drobným přivýdělkem, až po veterány z gigantických firem, kteří se snaží rozšířit svou říši.',
    year: '2020',
    technologies: ['React, Redux, Redux Observable, RxJS'],
    href: '/projects/starwars',
    src: gigworker,
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
