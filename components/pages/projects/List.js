import React from 'react';
import { projectList } from '../../../config/projects';
import Link from 'next/link';

const List = React.memo(({ projects }) => {
  return (
    <section className='basic-grid'>
      {projects.map((projectId) => {
        const project = projectList.entities[projectId];
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
                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg' />
                  </div>
                  <div className='post-content'>
                    <div className='category'>{project.type}</div>
                    <h3 className='title'>{project.title}</h3>
                    <h4 className='sub_title'>{project.subTitle}</h4>
                    <p className='description'>{project.description}</p>
                    <div className='post-meta'>
                      <span className='timestamp'>{project.technologies[0]}</span>
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
