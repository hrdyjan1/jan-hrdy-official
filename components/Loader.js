import React from 'react';

const Loader = ({ isLoading }) => {
  const [isLoadLong, setLoadLong] = React.useState(false);
  setTimeout(() => setLoadLong(true), 5000);
  return (
    <div id='loaderWrapper'>
      <div id='loader'>
        <div id='shadow'></div>
        <div id='box'></div>
        <h3 id='loaderHeading'>janhrdy.net</h3>
        {isLoadLong && <h3 id='loaderHeadingLong'>Try to reload.</h3>}
      </div>
      <h4 id='loaderSubHeading'>Loading...</h4>
    </div>
  );
};

export default Loader;
