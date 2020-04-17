const normalizedProjectList = {
  '1587045210872': {
    type: 'Web App',
    title: 'Facebook',
    subTitle: 'Social network',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu varius, sagittis metus ut, placerat ligula. Aliquam id felis sagittis, consectetur nibh eu, consectetur dui. In hac habitasse platea dictumst.',
    year: '2020',
    technologies: ['TAG 1'],
    href: 'https://www.robinwieruch.de/react-render-props'
},
'1587045213421': {
    type: 'Web App',
    title: 'Twitter',
    subTitle: 'Social network',
    description:
    'Curabitur sed magna hendrerit, sagittis libero eu, commodo turpis. Duis et mi commodo, ultrices leo a, lacinia magna.',
    year: '2020',
    technologies: ['TAG 2'],
    href: '/projects/starwars'
},
'1587045214025': {
    type: 'Video',
    title: 'Fight of Night',
    subTitle: 'International match in mix martial art.',
    description:
    'Nulla et tempor sem. Nulla consectetur lacinia placerat. Morbi consectetur lobortis lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    year: '2019',
    technologies: ['UFC'],
    href: '/projects/starwars'
  },
};

const projectList = {
  entities: normalizedProjectList,
  results: Object.keys(normalizedProjectList),
};

const entities = projectList.entities;
const results = projectList.results;

export { projectList, entities, results };
