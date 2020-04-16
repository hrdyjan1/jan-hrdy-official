const normalizedProjectList = {
  '1587045210872': {
    type: 'Web App',
    title: 'Facebook',
    subTitle: 'Social network',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin arcu varius, sagittis metus ut, placerat ligula. Aliquam id felis sagittis, consectetur nibh eu, consectetur dui. In hac habitasse platea dictumst.',
    year: '2020',
    tags: ['TAG 1'],
  },
  '1587045213421': {
    type: 'Mobile App',
    title: 'Twitter',
    subTitle: 'Social network',
    description:
      'Curabitur sed magna hendrerit, sagittis libero eu, commodo turpis. Duis et mi commodo, ultrices leo a, lacinia magna.',
    year: '2020',
    tags: ['TAG 2'],
  },
  '1587045214025': {
    type: 'Video',
    title: 'Fight of Night',
    subTitle: 'International match in mix martial art.',
    description: 'Nulla et tempor sem. Nulla consectetur lacinia placerat. Morbi consectetur lobortis lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    year: '2019',
    tags: ['UFC'],
  },
};

const projectList = {
  entities: normalizedProjectList,
  results: Object.keys(normalizedProjectList),
};

export { projectList };
