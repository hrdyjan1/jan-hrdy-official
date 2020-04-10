import React from 'react';
import avatarSvg from '../public/images/avatar.svg';
import vectorpaintSvg from '../public/images/vectorpaint.svg';
import waitingSvg from '../public/images/waiting.svg';
import ToggleTheme from '../components/common/toggle/ToggleTheme';
import ToggleLanguage from '../components/common/toggle/ToggleLanguage';
import Link from 'next/link';
import { useComplexLanguageMethod } from '../contexts/languageContext';

const IndexPage = () => {
  const { t } = useComplexLanguageMethod();
  // elements
  React.useEffect(() => {
    const page = document.getElementsByClassName('page')[0];
    const welcomeMenuToggle = document.getElementsByClassName('welcome-menu-toggle')[0];
    const content = document.getElementsByClassName('content')[0];

    welcomeMenuToggle.addEventListener('click', function () {
      page.classList.toggle('shazam');
    });

    content.addEventListener('click', function () {
      page.classList.remove('shazam');
    });

    return () => {
      welcomeMenuToggle.removeEventListener('click', () => {});
      content.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <div className='page'>
      <span className='welcome-menu-toggle'>
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='bars'
          className='menu_open svg-inline--fa fa-bars fa-w-14'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
          />
        </svg>
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='times'
          className='menu_close svg-inline--fa fa-times fa-w-11'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 352 512'
        >
          <path
            fill='currentColor'
            d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'
          />
        </svg>
      </span>
      <ul className='welcome-menu-items'>
        <li>
          <ToggleLanguage />
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
      <main className='content'>
        <div className='container-wrapper'>
          <div className='background-wrapper'>
            <img className='background' src={vectorpaintSvg} />
          </div>
          <div className='container'>
            <div className='login-content'>
              <form>
                <img src={avatarSvg} />
                <h2 className='title'>{t('welcome')}</h2>
                <p className='intro'>
                  {t('textIntroPart1')}
                  <nobr>Jan Hrdý.</nobr>
                  {t('textIntroPart2')}
                  <Link href='/projects'>
                    <a className='site-link' href='/projects'>
                      {t('here')}
                    </a>
                  </Link>
                  .
                </p>
                <Link href='/home'>
                  <a role='button' className='anchor-button'>
                    {t('feelFree')}
                    <br />
                    {t('toEnter')}
                  </a>
                </Link>
              </form>
            </div>
            <div className='img'>
              <img src={waitingSvg} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
