// Add this at the top of your file to mark it as a client component
'use client';

import { useLanguageTranslation } from '@/features/language/useLanguageTranslation';
import proudSVG from '../../../public/images/proud.svg';

import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useModalAction } from '@/context/modal/helpers';

function Home() {
  const { t } = useLanguageTranslation();
  const { push } = useRouter();
  const { show } = useModalAction();

  return (
    <>
      <Head>
        <title>Jan Hrdý - Domů</title>
      </Head>
      <div id='page-home-id'>
        <section className='c-section'>
          <div className='c-section__title'>
            <span>
              <h1>{t('home')}</h1>
              <h2>{t('homePageDescription')}</h2>
            </span>
            <Image src={proudSVG} alt='TODO' className='main-home-image' />
          </div>
          <ul className='c-services'>
            <li className='c-services__item'>
              <h3>{t('homePageSection1Heading')}</h3>
              <p>{t('homePageSection1Description')}</p>
            </li>
            <li
              className='c-services__item c-services__item__link'
              onClick={() =>
                window.open('https://www.omnetic.com/cs/caraudit/', '_blank', 'noopener,noreferrer')
              }
            >
              <h3>{t('homePageSection2Heading')}</h3>
              <p>{t('homePageSection2Description')}</p>
            </li>
            <li
              className='c-services__item c-services__item__link'
              onClick={() =>
                window.open('https://github.com/hrdyjan1', '_blank', 'noopener,noreferrer')
              }
            >
              <h3>{t('homePageSection3Heading')}</h3>
              <p>{t('homePageSection3Description')}</p>
            </li>
            <li
              className='c-services__item c-services__item__link'
              onClick={() => push('/projects')}
            >
              <h3>{t('homePageSection4Heading')}</h3>
              <p>{t('homePageSection4Description')}</p>
            </li>
            <li className='c-services__item c-services__item__link' onClick={() => push('/about')}>
              <h3>{t('homePageSection5Heading')}</h3>
              <p>{t('homePageSection5Description')}</p>
            </li>
            <li
              className='c-services__item c-services__item__link'
              onClick={() => show('SETTINGS')}
            >
              <h3>{t('homePageSection6Heading')}</h3>
              <p>{t('homePageSection6Description')}</p>
            </li>
            <li
              className='c-services__item c-services__item__link'
              onClick={() =>
                window.open(
                  'https://apps.apple.com/ua/app/notify-mobile-app/id6448720164',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
              <h3>{t('homePageSection7Heading')}</h3>
              <p>{t('homePageSection7Description')}</p>
            </li>
            <li
              className='c-services__item c-services__item__link'
              onClick={() =>
                window.open('https://www.instagram.com/jan.hrdy/', '_blank', 'noopener,noreferrer')
              }
            >
              <h3>{t('homePageSection8Heading')}</h3>
              <p>{t('homePageSection8Description')}</p>
            </li>
            <li className='c-services__item c-services__item__link' onClick={() => push('/about')}>
              <h3>{t('homePageSection9Heading')}</h3>
              <p>{t('homePageSection9Description')}</p>
            </li>
          </ul>
        </section>
        <div className='spaceDown'></div>
      </div>
    </>
  );
}

export default Home;
