import React from 'react';
import { BehaviorSubject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import Default from '../components/pages/projects/Default';
import { projectList } from '../config/projects';

export const subject$ = new BehaviorSubject('');

export const getSuggestionsFromArray = (projects) => (subject) => {
  return subject.pipe(
    debounceTime(200), // wait until user stops typing
    distinctUntilChanged(),
    map((value) =>
      !value || value === ''
        ? projects
        : projects.filter((p) => p.toLocaleLowerCase().includes(value))
    )
  );
};

function Projects() {
  const getSuggestions = getSuggestionsFromArray(projectList.results);
  return (
    <div id='page-project-id'>
      <Default getSuggestions={getSuggestions} />
    </div>
  );
}

export default Projects;
