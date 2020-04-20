import React from 'react';
import { useComplexLanguageMethod } from '../contexts/languageContext';
import proudSVG from '../public/images/proud.svg';

function Home() {
  const { t } = useComplexLanguageMethod();

  return (
    <div id='page-home-id'>
      <section className='c-section'>
        <div className='c-section__title'>
          <span>
            <h1>{t('home')}</h1>
            <h2>{t('homePageDescription')}</h2>
          </span>
          <img src={proudSVG} className='main-home-image' />
        </div>
        <ul className='c-services'>
          <li className='c-services__item'>
            <h3>{t('homePageSection1Heading')}</h3>
            <p>{t('homePageSection1Description')}</p>
          </li>
          <li className='c-services__item'>
            <h3>{t('homePageSection2Heading')}</h3>
            <p>{t('homePageSection2Description')}</p>
          </li>
          <li className='c-services__item'>
            <h3>{t('homePageSection3Heading')}</h3>
            <p>{t('homePageSection3Description')}</p>
          </li>
          <li className='c-services__item'>
            <h3>{t('homePageSection4Heading')}</h3>
            <p>{t('homePageSection4Description')}</p>
          </li>
          <li className='c-services__item'>
            <h3>{t('homePageSection5Heading')}</h3>
            <p>{t('homePageSection5Description')}</p>
          </li>
          <li className='c-services__item'>
            <h3>{t('homePageSection6Heading')}</h3>
            <p>{t('homePageSection6Description')}</p>
          </li>
          <li className='c-services__item'>
            <h3>{t('homePageSection7Heading')}</h3>
            <p>{t('homePageSection7Description')}</p>
          </li>
          <li className='c-services__item'>
            <h3>{t('homePageSection8Heading')}</h3>
            <p>{t('homePageSection8Description')}</p>
          </li>
          <li className='c-services__item'>
            <h3>{t('homePageSection9Heading')}</h3>
            <p>{t('homePageSection9Description')}</p>
          </li>
        </ul>
      </section>
      <div className='spaceDown'></div>
    </div>
  );
}

export default Home;
