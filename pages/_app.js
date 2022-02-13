import React from 'react';
import dynamic from 'next/dynamic';
import { CustomPreloader } from 'react-preloaders';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import Head from 'next/head';
import Loader from '../components/Loader';
import { ModalProvider } from '../contexts/modalContext';
import { ThemeProvider } from '../contexts/themeContext';
import { LanguageProvider } from '../contexts/languageContext';
import { SoundProvider } from '../contexts/soundContext';
import { getItems, localStorageType } from '../utils/localStorage';

const DynamicComponentWithCustomLoading = dynamic(() => import('../components/Main'));

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function _app(props) {
  const [itemsFromLocalStorage, setItemsFromLocalStorage] = React.useState(null);

  React.useEffect(() => {
    const items = getItems([
      localStorageType.THEME,
      localStorageType.SOUND,
      localStorageType.LANGUAGE,
    ]);
    setItemsFromLocalStorage(items);
  }, []);

  if (typeof window !== 'undefined' && itemsFromLocalStorage) {
    return (
      <>
        <Head>
          <title>Jan Hrdý</title>
        </Head>
        <LanguageProvider language={itemsFromLocalStorage.LANGUAGE}>
          <CustomPreloader>
            <Loader />
          </CustomPreloader>
          <ModalProvider>
            <ThemeProvider theme={itemsFromLocalStorage.THEME}>
              <SoundProvider sound={itemsFromLocalStorage.SOUND}>
                <DynamicComponentWithCustomLoading {...props} />
              </SoundProvider>
            </ThemeProvider>
          </ModalProvider>
        </LanguageProvider>
      </>
    );
  }
  return null;
}

export default _app;
