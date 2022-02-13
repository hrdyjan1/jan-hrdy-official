import React from 'react';
import Link from 'next/link';
import { useComplexLanguageMethod } from '../contexts/languageContext';
import Intro from '../components/pages/projects/Intro';
import Head from 'next/head';

const bonusSection = () => {
  const { t } = useComplexLanguageMethod();
  return (
    <section>
      <p className='online'>
        <span className='big'>Online</span>
        <br />
        <span className='small'>{t('lifeWithTech')}</span>
      </p>
      <p className='offline'>
        <span className='big'>Offline</span>
        <br />
        <span className='small'>{t('lifeWithoutTech')}</span>
      </p>
    </section>
  );
};

function About() {
  const { t } = useComplexLanguageMethod();
  return (
    <>
      <Head>
        <title>Jan Hrdý - O mně</title>
      </Head>
      <div id='page-about-id'>
        <div id='about-container'>
          <Intro header='about' subHeader='aboutDescription' renderBottom={bonusSection} />
          <ul className='timeline'>
            <li>
              <div className='direction-r'>
                <div className='flag-wrapper'>
                  <span className='hexa'></span>
                  <span className='flag'>{t('timeline1Heading')}</span>
                  <span className='time-wrapper'>
                    <span className='time'>{t('timeline1Date')}</span>
                  </span>
                </div>
                <div className='desc'>{t('timeline1Description')}</div>
              </div>
            </li>
            <li>
              <div className='direction-r'>
                <div className='flag-wrapper'>
                  <span className='hexa'></span>
                  <span className='flag'>{t('timeline2Heading')}</span>
                  <span className='time-wrapper'>
                    <span className='time'>{t('timeline2Date')}</span>
                  </span>
                </div>
                <div className='desc'>{t('timeline2Description')}</div>
              </div>
            </li>

            <li>
              <div className='direction-l'>
                <div className='flag-wrapper'>
                  <span className='hexa'></span>
                  <span className='flag'>{t('timeline3Heading')}</span>
                  <span className='time-wrapper'>
                    <span className='time'>{t('timeline3Date')}</span>
                  </span>
                </div>
                <div className='desc'>{t('timeline3Description')}</div>
              </div>
            </li>

            <li>
              <div className='direction-l'>
                <div className='flag-wrapper'>
                  <span className='hexa'></span>
                  <span className='flag'>{t('timeline4Heading')}</span>
                  <span className='time-wrapper'>
                    <span className='time'>{t('timeline4Date')}</span>
                  </span>
                </div>
                <div className='desc'>{t('timeline4Description')}</div>
              </div>
            </li>

            <li>
              <div className='direction-l'>
                <div className='flag-wrapper'>
                  <span className='hexa'></span>
                  <span className='flag'>{t('timeline5Heading')}</span>
                  <span className='time-wrapper'>
                    <span className='time'>{t('timeline5Date')}</span>
                  </span>
                </div>
                <div className='desc'>{t('timeline5Description')}</div>
              </div>
            </li>

            <li>
              <div className='direction-r'>
                <div className='flag-wrapper'>
                  <span className='hexa'></span>
                  <span className='flag'>{t('timeline6Heading')}</span>
                  <span className='time-wrapper'>
                    <span className='time'>{t('timeline6Date')}</span>
                  </span>
                </div>
                <div className='desc'>{t('timeline6Description')}</div>
              </div>
            </li>
            <li>
              <div className='direction-l'>
                <div className='flag-wrapper'>
                  <span className='hexa'></span>
                  <span className='flag'>{t('timeline7Heading')}</span>
                  <span className='time-wrapper'>
                    <span className='time'>{t('timeline7Date')}</span>
                  </span>
                </div>
                <div className='desc'>{t('timeline7Description')}</div>
              </div>
            </li>

            <li>
              <div className='direction-r'>
                <div className='flag-wrapper'>
                  <span className='hexa'></span>
                  <span className='flag'>{t('timeline8Heading')}</span>
                  <span className='time-wrapper'>
                    <span className='time'>{t('timeline8Date')}</span>
                  </span>
                </div>
                <div className='desc'>{t('timeline8Description')}</div>
              </div>
            </li>
          </ul>
          <h3>{t('contact')}</h3>
          <div className='social-menu'>
            <ul>
              <li>
                <a href='mailto:hrdyjan1@gmail.com"'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='envelope'
                    className='fab'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/jan.hrdy/'>
                  <svg
                    className='fab'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='instagram'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='currentColor'
                      d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <Link href='/pdf/cv'>
                  <a>
                    <svg
                      version='1.0'
                      xmlns='http://www.w3.org/2000/svg'
                      width='256.000000pt'
                      viewBox='0 0 256.000000 256.000000'
                      preserveAspectRatio='xMidYMid meet'
                      className='fab'
                    >
                      <g
                        transform='translate(0.000000,256.000000) scale(0.100000,-0.100000)'
                        fill='currentColor'
                        stroke='none'
                      >
                        <path
                          d='M808 2385 c-43 -36 -78 -68 -78 -70 0 -2 45 -57 99 -122 l100 -118
                      -195 -5 -196 -5 -34 -37 -34 -38 0 -890 c0 -971 -1 -953 56 -979 18 -8 178
                      -11 544 -11 l518 0 251 236 251 236 0 707 c0 637 -2 709 -16 730 -35 49 -55
                      51 -467 51 l-384 0 -158 188 c-87 103 -163 188 -169 190 -6 1 -46 -27 -88 -63z
                      m313 -535 c37 -42 90 -84 178 -141 69 -44 138 -90 153 -101 39 -30 44 -17 14
                      35 -14 24 -44 88 -67 143 -22 54 -43 105 -46 112 -4 9 57 12 286 12 l291 0 0
                      -629 0 -630 -157 -3 c-172 -3 -199 -10 -237 -61 -19 -25 -21 -45 -24 -178 l-4
-149 -434 0 -434 0 0 608 c0 334 -3 705 -7 825 l-6 217 221 0 221 0 52 -60z'
                        />
                        <path
                          d='M1034 1341 c-122 -31 -185 -153 -150 -290 20 -77 46 -115 96 -141 53
                      -27 147 -27 200 0 54 27 111 127 83 143 -5 3 -22 8 -39 11 -29 6 -32 4 -47
                      -34 -21 -53 -72 -78 -128 -61 -48 14 -76 50 -85 106 -16 107 27 183 108 192
                      42 5 50 3 78 -25 16 -17 30 -38 30 -47 0 -13 6 -15 33 -10 56 12 58 16 37 62
                      -32 73 -131 115 -216 94z'
                        />
                        <path
                          d='M1279 1293 c10 -26 49 -128 87 -226 l68 -178 39 3 39 3 84 215 c46
                      118 84 219 84 223 0 5 -19 7 -42 5 l-43 -3 -62 -165 c-44 -116 -64 -159 -68
                      -145 -4 11 -30 85 -58 165 l-52 145 -48 3 -47 3 19 -48z'
                        />
                      </g>
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <a href='https://github.com/hrdyjan1/'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='github'
                    className='fab'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 496 512'
                  >
                    <path
                      fill='currentColor'
                      d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href='https://wa.me/420606347567'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='whatsapp'
                    className='fab'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='currentColor'
                      d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
