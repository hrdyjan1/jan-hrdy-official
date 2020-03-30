import React from 'react';
import { useRouter } from 'next/router';
import {
  pageChangeType,
  pageChangeStatus,
  pageChangeInitialState,
  pageChangeReducer
} from './helpers';

const usePageChange = () => {
  const router = useRouter();
  const [state, dispatch] = React.useReducer(pageChangeReducer, pageChangeInitialState);
  const { status } = state;

  const dispatchStart = () => dispatch({ type: pageChangeType.STARTED });
  const dispatchSuccess = () => dispatch({ type: pageChangeType.SUCCESS });
  const dispatchStartVisible = () => dispatch({ type: pageChangeType.STARTED_VISIBLE });

  const handleSuccess = url => url !== router.pathname && dispatchSuccess();
  const handleError = (err, url) =>
    dispatch({
      type: pageChangeType.ERROR,
      error: err.cancelled ? 'Canceled navigation.' : `Bad url ${url}`
    });
  const handleStart = url => {
    if (url !== router.pathname) {
      dispatchStart();
      setTimeout(dispatchStartVisible, 500);
    }
  };

  React.useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleSuccess);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleSuccess);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  return {
    isLoadingVisible: status === pageChangeStatus.PENDING_VISIBLE,
    isDoneOrIsLoadingHidden:
      status === pageChangeStatus.RESOLVED ||
      status === pageChangeStatus.IDLE ||
      status === pageChangeStatus.PENDING,
    ...state
  };
};

export default usePageChange;
