import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Main = ({ Component, pageProps }) => {
  const {pathname} = useRouter();
  const modalRef = React.useRef(null);
  const modalContainerRef = React.useRef(null);

  React.useEffect(() => {
    const modalCurrent = modalRef.current;
    modalCurrent.addEventListener('click', e => e.stopPropagation());

    const modalContainerCurrent = modalContainerRef.current;
    modalContainerCurrent.addEventListener('click', () => {
      modalContainerCurrent.classList.add('out');
    });

    return () => {
      modalCurrent.removeEventListener('click', () => {});
      modalContainerCurrent.removeEventListener('click', () => {});
    };
  }, []);

  const onSettingsClick = () => {
    modalContainerRef.current.removeAttribute('class');
    modalContainerRef.current.classList.add('basic');
  };

  return (
    <>
      <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='logo'>
            <a href='#' className='nav-link'>
              <span className='link-text logo-text'>Jan Hrdý </span>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fad'
                data-icon='angle-double-right'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='svg-inline--fa fa-angle-double-right fa-w-14 fa-5x'
              >
                <g className='fa-group'>
                  <path
                    fill='currentColor'
                    d='M58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm352 272H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16z'
                    className='fa-secondary'
                  ></path>
                  <path
                    fill='currentColor'
                    d='M512 304a48 48 0 0 1-48 48H48a48 48 0 0 1 0-96h416a48 48 0 0 1 48 48z'
                    className='fa-primary'
                  ></path>
                </g>
              </svg>
            </a>
          </li>

          <li className='nav-item'>
            <Link href='/'>
              <a className={`nav-link${pathname === '/' ? ' active' : ''}`}>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fad'
                  data-icon='cat'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                  className='svg-inline--fa fa-cat fa-w-16 fa-9x'
                >
                  <g className='fa-group'>
                    <path
                      fill='currentColor'
                      d='M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z'
                      className='fa-secondary'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z'
                      className='fa-primary'
                    ></path>
                  </g>
                </svg>
                <span className='link-text'>Home</span>
              </a>
            </Link>
          </li>

          <li className='nav-item'>
            <Link href='/about'>
            <a className={`nav-link${pathname === '/about' ? ' active' : ''}`}>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fad'
                  data-icon='cat'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='svg-inline--fa fa-cat fa-w-16 fa-9x'
                >
                  <g className='fa-group'>
                    <path
                      fill='currentColor'
                      d='M191.35 414.77L208 344l-32-56h96l-32 56 16.65 70.77L224 480zM224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128z'
                      className='fa-secondary'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M319.8 288.6L224 480l-95.8-191.4C56.9 292 0 350.3 0 422.4V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z'
                      className='fa-primary'
                    ></path>
                  </g>
                </svg>
                <span className='link-text'>About</span>
              </a>
            </Link>
          </li>

          <li className='nav-item'>
            <Link href='/projects'>
            <a className={`nav-link${pathname === '/projects' ? ' active' : ''}`}>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fad'
                  data-icon='cat'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='svg-inline--fa fa-cat fa-w-16 fa-9x tiny'
                >
                  <g className='fa-group'>
                    <path
                      fill='currentColor'
                      d='M175.45 0C73.44.31 0 83 0 176a175 175 0 0 0 43.56 115.78c16.52 18.85 42.36 58.22 52.21 91.45 0 .26.07.52.11.78h160.24c0-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45A175.9 175.9 0 0 0 175.45 0zm.55 96a80.09 80.09 0 0 0-80 80 16 16 0 0 1-32 0A112.12 112.12 0 0 1 176 64a16 16 0 0 1 0 32z'
                      className='fa-secondary'
                    ></path>
                    <path
                      fill='currentColor'
                      d='M96.06 454.35L96 416h160v38.35a32 32 0 0 1-5.41 17.65l-17.09 25.73A32 32 0 0 1 206.86 512h-61.71a32 32 0 0 1-26.64-14.28L101.42 472a32 32 0 0 1-5.36-17.65z'
                      className='fa-primary'
                    ></path>
                  </g>
                </svg>
                <span className='link-text'>Projects</span>
              </a>
            </Link>
          </li>

          <li className='nav-item' id='themeButton'>
            <button type='button' className='nav-link' onClick={onSettingsClick}>
              <svg
                className='svg-inline--fa fa-cat fa-w-16 fa-9x'
                aria-hidden='true'
                focusable='false'
                data-prefix='fad'
                data-icon='moon-stars'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <g className='fa-group'>
                  <path
                    fill='currentColor'
                    d='M496 64H288v64h208a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zM16 128h176V64H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16zm0 160h304v-64H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm480-64h-80v64h80a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 160H160v64h336a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM0 400v32a16 16 0 0 0 16 16h48v-64H16a16 16 0 0 0-16 16z'
                    className='fa-secondary'
                  ></path>
                  <path
                    fill='currentColor'
                    d='M272 32h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm128 160h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zM144 352h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16z'
                    className='fa-primary'
                  ></path>
                </g>
              </svg>
              {/* <svg
                className='theme-icon'
                id='solarIcon'
                aria-hidden='true'
                focusable='false'
                data-prefix='fad'
                data-icon='sun'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <g className='fa-group'>
                  <path
                    fill='currentColor'
                    d='M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z'
                    className='fa-secondary'
                  ></path>
                  <path
                    fill='currentColor'
                    d='M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z'
                    className='fa-primary'
                  ></path>
                </g>
              </svg> */}
              {/* <svg
                className='theme-icon'
                id='darkIcon'
                aria-hidden='true'
                focusable='false'
                data-prefix='fad'
                data-icon='sunglasses'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <g className='fa-group'>
                  <path
                    fill='currentColor'
                    d='M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z'
                    className='fa-secondary'
                  ></path>
                  <path
                    fill='currentColor'
                    d='M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z'
                    className='fa-primary'
                  ></path>
                </g>
              </svg> */}
              <span className='link-text'>Settings</span>
            </button>
          </li>
        </ul>
      </nav>
      <main>
        <div id='modal-container' ref={modalContainerRef}>
          <div className='modal-background'>
            <div className='modal' ref={modalRef}>
              <h2>Settings</h2>
              <h2>I'm a Modal</h2>
              <p>Hear me roar.</p>
            </div>
          </div>
        </div>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default Main;
