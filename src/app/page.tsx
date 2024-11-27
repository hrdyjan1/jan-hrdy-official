// Add this at the top of your file to mark it as a client component
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguageTranslation } from '@/features/language/useLanguageTranslation';

import avatarSvg from '../../public/images/avatar.svg';
import vectorpaintSvg from '../../public/images/vectorpaint.svg';
import waitingSvg from '../../public/images/waiting.svg';
import { ToggleLanguage } from '@/components/toggle/ToggleLanguage';
import { ToggleTheme } from '@/components/toggle/ToggleTheme';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export default function Home() {
  const { t } = useLanguageTranslation();
  // elements
  React.useEffect(() => {
    const page = document.getElementsByClassName('page')[0];
    const welcomeMenuToggle = document.getElementsByClassName('welcome-menu-toggle')[0];
    const content = document.getElementsByClassName('content')[0];

    const toggleMenu = () => page.classList.toggle('shazam');
    const closeMenu = () => page.classList.remove('shazam');

    welcomeMenuToggle.addEventListener('click', toggleMenu);
    content.addEventListener('click', closeMenu);

    return () => {
      welcomeMenuToggle.removeEventListener('click', toggleMenu);
      content.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div className='page'>
      <span className='welcome-menu-toggle' id='welcome-menu-toggle-id'>
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
            <Image className='background' priority src={vectorpaintSvg} alt='TODO' />
          </div>
          <div className='container'>
            <div className='login-content'>
              <form>
                <Image src={avatarSvg} alt='TODO' />
                <h2 className='title'>{t('welcome')}</h2>
                <p className='intro'>
                  {t('textIntroPart1')}
                  <span style={{ whiteSpace: 'nowrap' }}>Jan Hrdý.</span>
                  {t('textIntroPart2')}
                  <Link href='/projects' prefetch className='site-link'>
                    {t('here')}
                  </Link>
                  .
                </p>
                <Link href='/home' prefetch role='button' className='anchor-button'>
                  {t('feelFree')}
                  <br />
                  {t('toEnter')}
                </Link>
              </form>
            </div>
            <div className='img'>
              <Image src={waitingSvg} alt='TODO' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
