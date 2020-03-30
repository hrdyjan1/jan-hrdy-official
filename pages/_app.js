import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('../components/Main.js'),
  loading() {
    return <p>First loading...</p>;
  }
});

const _app = props => {
  return <LoadableComponent {...props} />;
};

export default _app;
