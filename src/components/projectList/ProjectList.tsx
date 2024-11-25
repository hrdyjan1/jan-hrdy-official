// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguageState } from '@/features/language/helpers';
import { czechEntities, englishEntities } from '@/app/projects/utils/projectData';
import Image from 'next/image';

interface Props {
  projects: string[];
}

const ProjectList = ({ projects }: Props) => {
  const { language } = useLanguageState();
  const currentLanguageEntities = language === 'CZECH' ? czechEntities : englishEntities;

  return (
    <section className='basic-grid'>
      {projects.map((projectId) => {
        const project = currentLanguageEntities[projectId as keyof typeof currentLanguageEntities];
        const shouldMoveExternal = project.href.toLowerCase().includes('http');
        const anchorProps = shouldMoveExternal ? { target: '_blank' } : {};
        const linkProps = shouldMoveExternal ? { prefetch: false } : {};

        return (
          <Link
            key={projectId}
            href={project.href}
            {...linkProps}
            className='card-anchor'
            {...anchorProps}
          >
            <div className='card'>
              <div className='post-module'>
                <div className='post-thumbnail'>
                  <div className='date'>
                    <p className='day'>{project.year}</p>
                  </div>
                  <Image src={project.src} alt='TODO' style={{ height: 'auto' }} />
                </div>
                <div className='post-content'>
                  <div className='category'>{project.type}</div>
                  <h3 className='title'>{project.title}</h3>
                  <h4 className='sub_title'>{project.subTitle}</h4>
                  <p className='description'>{project.description}</p>
                  <div className='post-meta'>
                    {project.technologies.map((technology) => (
                      <span key={technology} className='timestamp'>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export { ProjectList };
