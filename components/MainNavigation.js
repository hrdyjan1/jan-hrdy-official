import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useModalDispatch, modalType, modalStatus } from '../contexts/modalContext';
import { useComplexLanguageMethod } from '../contexts/languageContext';

const MainNavigation = () => {
  const { pathname } = useRouter();
  const modalDispatch = useModalDispatch();
  const { t } = useComplexLanguageMethod();

  const showSettings = () =>
    modalDispatch({
      type: modalType.SHOW,
      payload: { status: modalStatus.SETTINGS, heading: 'settings' },
    });

  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='logo'>
          <a href='#' className='nav-link'>
            <span className='link-text logo-text'>Jan Hrdý </span>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='angle-double-right'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='svg-inline--fa fa-angle-double-right fa-w-14 fa-5x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm352 272H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16z'
                  className='fa-secondary'
                ></path>
                <path
                  fill='currentColor'
                  d='M512 304a48 48 0 0 1-48 48H48a48 48 0 0 1 0-96h416a48 48 0 0 1 48 48z'
                  className='fa-primary'
                ></path>
              </g>
            </svg>
          </a>
        </li>

        <li className='nav-item'>
          <Link href='/home'>
            <a className={`nav-link${pathname === '/home' ? ' active' : ''}`}>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fad'
                data-icon='cat'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
                className='svg-inline--fa fa-cat fa-w-16 fa-9x'
              >
                <g className='fa-group'>
                  <path
                    fill='currentColor'
                    d='M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z'
                    className='fa-secondary'
                  ></path>
                  <path
                    fill='currentColor'
                    d='M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z'
                    className='fa-primary'
                  ></path>
                </g>
              </svg>
              <span className='link-text'>{t('home')}</span>
            </a>
          </Link>
        </li>

        <li className='nav-item'>
          <Link href='/about'>
            <a className={`nav-link${pathname === '/about' ? ' active' : ''}`}>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fad'
                data-icon='cat'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='svg-inline--fa fa-cat fa-w-16 fa-9x'
              >
                <g className='fa-group'>
                  <path
                    fill='currentColor'
                    d='M191.35 414.77L208 344l-32-56h96l-32 56 16.65 70.77L224 480zM224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128z'
                    className='fa-secondary'
                  ></path>
                  <path
                    fill='currentColor'
                    d='M319.8 288.6L224 480l-95.8-191.4C56.9 292 0 350.3 0 422.4V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z'
                    className='fa-primary'
                  ></path>
                </g>
              </svg>
              <span className='link-text'>{t('about')}</span>
            </a>
          </Link>
        </li>

        <li className='nav-item'>
          <Link href='/projects'>
            <a className={`nav-link${pathname === '/projects' ? ' active' : ''}`}>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fad'
                data-icon='cat'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='svg-inline--fa fa-cat fa-w-16 fa-9x tiny'
              >
                <g className='fa-group'>
                  <path
                    fill='currentColor'
                    d='M175.45 0C73.44.31 0 83 0 176a175 175 0 0 0 43.56 115.78c16.52 18.85 42.36 58.22 52.21 91.45 0 .26.07.52.11.78h160.24c0-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45A175.9 175.9 0 0 0 175.45 0zm.55 96a80.09 80.09 0 0 0-80 80 16 16 0 0 1-32 0A112.12 112.12 0 0 1 176 64a16 16 0 0 1 0 32z'
                    className='fa-secondary'
                  ></path>
                  <path
                    fill='currentColor'
                    d='M96.06 454.35L96 416h160v38.35a32 32 0 0 1-5.41 17.65l-17.09 25.73A32 32 0 0 1 206.86 512h-61.71a32 32 0 0 1-26.64-14.28L101.42 472a32 32 0 0 1-5.36-17.65z'
                    className='fa-primary'
                  ></path>
                </g>
              </svg>
              <span className='link-text'>{t('projects')}</span>
            </a>
          </Link>
        </li>

        <li className='nav-item' id='themeButton'>
          <button type='button' className='nav-link' onClick={showSettings}>
            <svg
              className='svg-inline--fa fa-cat fa-w-16 fa-9x'
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='moon-stars'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M496 64H288v64h208a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zM16 128h176V64H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16zm0 160h304v-64H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm480-64h-80v64h80a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 160H160v64h336a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM0 400v32a16 16 0 0 0 16 16h48v-64H16a16 16 0 0 0-16 16z'
                  className='fa-secondary'
                ></path>
                <path
                  fill='currentColor'
                  d='M272 32h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm128 160h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zM144 352h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16z'
                  className='fa-primary'
                ></path>
              </g>
            </svg>
            <span className='link-text'>{t('settings')}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
