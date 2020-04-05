import dynamic from 'next/dynamic';
import { CustomPreloader } from 'react-preloaders';
import { Router } from 'next/router';
import nProgress from 'nprogress';
import Loader from '../components/Loader';
import { ModalProvider } from '../contexts/modalContext';
import { ThemeProvider } from '../contexts/toggleContext';

const DynamicComponentWithCustomLoading = dynamic(() => import('../components/Main'));

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function _app(props) {
  if (typeof window !== 'undefined') {
    return (
      <>
        <CustomPreloader background='linear-gradient(180deg, #f95759 0%, #a62022 100%)'>
          <Loader />
        </CustomPreloader>
        <ModalProvider>
          <ThemeProvider>
            <DynamicComponentWithCustomLoading {...props} />
          </ThemeProvider>
        </ModalProvider>
      </>
    );
  }
  return null;
}

export default _app;
