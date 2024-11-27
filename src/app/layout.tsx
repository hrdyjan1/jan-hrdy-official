// Add this at the top of your file to mark it as a client component
'use client';

import '@/app/ui/index.css';
import '@/app/ui/fake.css';
import '@/app/ui/welcome/toggle.css'; /* Independent */
import '@/app/ui/welcome/form.css'; /* Almost independent */
import '@/app/ui/welcome/index.css';
import '@/app/ui/loading.css'; /* Independent */
import '@/app/ui/nprogress.css'; /* Independent */
import '@/app/ui/toggle.css'; /* Independent */
import '@/app/ui/button.css'; /* Independent */
import '@/app/ui/root/modal.css'; /* Independent */
import '@/app/ui/pages/about.css'; /* Independent */
import '@/app/ui/pages/about-extended.css'; /* Independent */
import '@/app/ui/pages/home.css';
import '@/app/ui/pages/404.css';
import '@/app/ui/pages/projects.css'; /* Independent */
import '@/app/ui/projects/kanban/index.css'; /* Independent */
// Here all CSS from css directory

import React, { Suspense } from 'react';
import { isDefined } from '../constants/isDefined';
import { LanguageProvider } from '@/features/language/LanguageProvider';
import { ModalProvider } from '@/context/modal/ModalProvider';
import { ThemeProvider, themeStatus } from '@/features/theme/ThemeProvider';
import { SoundProvider, soundStatus } from '@/features/sound/SoundProvider';
import Loader from '@/components/loader/Loader';
import { Storage } from '@/utils/localStorage';
import { languageStatus } from '@/features/language/translations';
import { MainLazy } from '@/components/main/Main';

function RootLayout({ children }: React.PropsWithChildren) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [storageData, setStorageData] = React.useState<null | Record<string, null | string>>(null);

  React.useEffect(() => {
    const items = Storage.getItems([Storage.key.THEME, Storage.key.SOUND, Storage.key.LANGUAGE]);
    setStorageData(items);
  }, []);

  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/images/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/images/favicon/site.webmanifest' />
        <meta name='author' content='Jan Hrdý' />
        <meta
          name='description'
          content='This app is a personal website of myself, Jan Hrdý. Feel free to move here as you like. If you are interested in projects, that I am part of, then visit "projects page".'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        {isDefined(storageData) && isDefined(storageData) ? (
          <LanguageProvider
            language={storageData[Storage.key.LANGUAGE] as keyof typeof languageStatus}
          >
            <Loader isLoaded={isLoaded} />
            <ModalProvider>
              <ThemeProvider status={storageData[Storage.key.THEME] as keyof typeof themeStatus}>
                <SoundProvider status={storageData[Storage.key.SOUND] as keyof typeof soundStatus}>
                  <Suspense>
                    <MainLazy finishLoading={() => setIsLoaded(true)}>{children}</MainLazy>
                  </Suspense>
                </SoundProvider>
              </ThemeProvider>
            </ModalProvider>
          </LanguageProvider>
        ) : null}
      </body>
    </html>
  );
}

export default RootLayout;
