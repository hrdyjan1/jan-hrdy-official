import React from 'react';
import { subject$ } from '../../../pages/projects';
import Intro from './Intro';

const Projects = React.memo(({ projects }) => {
  return (
    <section className='basic-grid'>
      {projects.map((project) => (
        <div key={project} className='card'>
          <div className='space'></div>
          <p>{project}</p>
        </div>
      ))}
    </section>
  );
});

const Default = ({ getSuggestions }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);
  const [isFocused, setFocused] = React.useState(false);
  const ulRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const changeSearchValue = (value) => {
    setSearchValue(value);
    subject$.next(value);
  };

  const changeInputValue = React.useCallback(({ target: { value } }) => changeSearchValue(value), [
    changeSearchValue,
    setSearchValue,
  ]);

  // Clear visible suggesting results
  const hideResults = (shouldClear) => {
    ulRef.current.classList.add('hidden');
    if (shouldClear) {
      ulRef.current.innerHTML = '';
    }
  };

  // Focused on input
  const setFocusOn = () => {
    if (!isFocused) {
      setFocused(true);
    }
  };

  // Focused off input
  const setFocusOff = () => {
    if (isFocused) {
      setFocused(false);
    }
  };

  const handleShowingSuggestions = () => {
    hideResults(true);
    if (suggestions.length === 0) {
      const li = document.createElement('li');
      li.style.transition = 'opacity .5s linear';
      li.getBoundingClientRect();
      // it transitions!
      li.style.opacity = 1;
      li.innerHTML = `Whoah! <strong>${searchValue}</strong> is not in the index`;
      ulRef.current.appendChild(li);
    } else if (suggestions.length > 0) {
      for (let i = 0; i < suggestions.length && i < 5; i++) {
        const li = document.createElement('li');
        const result = suggestions[i]
          .toLowerCase()
          .replace(searchValue, `<strong>${searchValue}</strong>`);

        li.style.transition = 'opacity .5s linear';

        // reflow
        li.getBoundingClientRect();

        // it transitions!
        li.style.opacity = 1;
        li.onclick = () => changeSearchValue(suggestions[i].toLowerCase());
        li.innerHTML = result;
        ulRef.current.appendChild(li);
      }
    }

    if (ulRef.current.className !== 'term-list') {
      ulRef.current.className = 'term-list';
    }
  };

  const handleClearingSuggestions = (event) => {
    const isClickedOnSuggestionBar =
      event.target.tagName === 'UL' ||
      event.target.tagName === 'LI' ||
      event.target.tagName === 'INPUT';
    if (!isClickedOnSuggestionBar) {
      setFocusOff();
    }
  };

  // Handled suggestions
  React.useEffect(() => {
    if (isFocused) {
      handleShowingSuggestions();
    } else {
      hideResults();
    }
  }, [isFocused, suggestions]);

  // Handled focus on input
  React.useEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    body.addEventListener('click', handleClearingSuggestions);
    inputRef.current.addEventListener('focusin', setFocusOn);
    inputRef.current.addEventListener('keyup', setFocusOn);
    return () => {
      body.removeEventListener('click', handleClearingSuggestions);
      inputRef.current.removeEventListener('focusin', setFocusOn);
      inputRef.current.removeEventListener('keyup', setFocusOn);
    };
  }, [handleClearingSuggestions, setFocusOn]);

  // Handled new suggestions from "API"
  React.useEffect(() => {
    const subscription = getSuggestions(subject$).subscribe(
      (newSuggestions) => {
        setSuggestions(newSuggestions);
      },
      (error) => {
        console.error(error);
      }
    );

    return () => subscription.unsubscribe();
  }, [getSuggestions]);

  return (
    <div id='project-container'>
      <Intro />
      <input
        // autoFocus
        type='text'
        id='searchBox'
        ref={inputRef}
        autoComplete='off'
        className='search-field'
        value={searchValue}
        onChange={changeInputValue}
        placeholder='Search in projects...'
      />
      <ul ref={ulRef} id='searchResults' className='term-list hidden'></ul>
      <Projects projects={suggestions} />
    </div>
  );
};

export default Default;
