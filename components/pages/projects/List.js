import React from 'react';
import { czechEntities, englishEntities } from '../../../config/projects';
import Link from 'next/link';
import { useComplexLanguageMethod, useLanguageState } from '../../../contexts/languageContext';

const List = React.memo(({ projects }) => {
  const { t } = useComplexLanguageMethod();
  const { isCzechLanguage } = useLanguageState();
  const currentLanguageEntities = isCzechLanguage ? czechEntities : englishEntities;

  return (
    <section className='basic-grid'>
      {projects.map((projectId) => {
        const project = currentLanguageEntities[projectId];
        const shouldMoveExternal = project.href.toLowerCase().includes('http');
        const anchorProps = shouldMoveExternal ? { target: '_blank' } : {};
        const linkProps = shouldMoveExternal ? { prefetch: false } : {};

        return (
          <Link key={projectId} href={project.href} {...linkProps}>
            <a className='card-anchor' {...anchorProps}>
              <div className='card'>
                <div className='post-module'>
                  <div className='post-thumbnail'>
                    <div className='date'>
                      <p className='day'>{project.year}</p>
                    </div>
                    <img src={project.src} />
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
            </a>
          </Link>
        );
      })}
    </section>
  );
});

export default List;
