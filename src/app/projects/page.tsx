// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import { useLanguageState } from '@/features/language/helpers';
import { BehaviorSubject } from 'rxjs';
import { czechProjectList, englishProjectList } from './utils/projectData';
import Head from 'next/head';
import { ProjectBoard } from '@/components/projectBoard/ProjectBoard';
import { getSuggestionsFromArray } from './utils/getSuggestionsFromArray';

function ProjectPage() {
  const { language } = useLanguageState();
  const currentLanguageList = language === 'CZECH' ? czechProjectList : englishProjectList;
  const getSuggestions = getSuggestionsFromArray(currentLanguageList);
  const subject$ = new BehaviorSubject('');

  return (
    <>
      <Head>
        <title>Jan Hrdý - Projekty</title>
      </Head>
      <div id='page-project-id'>
        <ProjectBoard getSuggestions={getSuggestions} subject$={subject$} />
      </div>
    </>
  );
}

export default ProjectPage;
