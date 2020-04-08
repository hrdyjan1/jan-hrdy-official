import React, { useEffect } from 'react';
import avatarSvg from '../public/images/avatar.svg';
import vectorpaintSvg from '../public/images/vectorpaint.svg';
import waitingSvg from '../public/images/waiting.svg';

const IndexPage = () => {
  // elements
  useEffect(() => {
    const page = document.getElementsByClassName('page')[0];
    const menu_toggle = document.getElementsByClassName('menu_toggle')[0];
    const content = document.getElementsByClassName('content')[0];
    const inputs = document.querySelectorAll('.input');

    menu_toggle.addEventListener('click', function () {
      page.classList.toggle('shazam');
    });

    content.addEventListener('click', function () {
      page.classList.remove('shazam');
    });

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add('focus');
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == '') {
        parent.classList.remove('focus');
      }
    }

    inputs.forEach((input) => {
      input.addEventListener('focus', addcl);
      input.addEventListener('blur', remcl);
    });
  }, []);

  return (
    <div className='page'>
      <span className='menu_toggle'>
        <i className='menu_open fa fa-bars fa-lg' />
        <i className='menu_close fa fa-times fa-lg' />
      </span>
      <ul className='menu_items'>
        <li>
          <div className='toggleWrapperDayNight'>
            <input type='checkbox' className='dn' id='dn' />
            <label htmlFor='dn' className='toggleDayNight'>
              <span className='toggleDayNightHandler'>
                <span className='crater crater--1' />
                <span className='crater crater--2' />
                <span className='crater crater--3' />
              </span>
              <span className='star star--1' />
              <span className='star star--2' />
              <span className='star star--3' />
              <span className='star star--4' />
              <span className='star star--5' />
              <span className='star star--6' />
            </label>
          </div>
        </li>
        <li>
          <div className='toggleWrapperCzechEnglish'>
            <input type='checkbox' className='ce' id='ce' />
            <label htmlFor='ce' className='toggleCzechEnglish'>
              <div>
                <span className='toggleCzechEnglishHandler'> </span>
              </div>
            </label>
          </div>
        </li>
        <li>
          <div className='btns-social'>
            <a className='btn-social social-facebook' href='#'>
              <i className='fab fa-facebook-f' />
            </a>
            <a className='btn-social social-instagram' href='#'>
              <i className='fab fa-instagram' />
            </a>
            <a className='btn-social social-github' href='#'>
              <i className='fab fa-github' />
            </a>
          </div>
        </li>
      </ul>
      <main className='content'>
        <div className='container-wrapper'>
          <div className='background-wrapper'>
            <img className='background' src={vectorpaintSvg} />
          </div>
          <div className='container'>
            <div className='login-content'>
              <form>
                <img src={avatarSvg} />
                <h2 className='title'>Welcome</h2>
                <input
                  defaultChecked
                  id='signin'
                  name='action'
                  type='radio'
                  defaultValue='signin'
                />
                <label htmlFor='signin'>Sign in</label>
                <input id='signup' name='action' type='radio' defaultValue='signup' />
                <label htmlFor='signup'>Sign up</label>
                <input id='reset' name='action' type='radio' defaultValue='reset' />
                <label htmlFor='reset'>Reset</label>
                <div id='wrapper'>
                  <div id='arrow' />
                  <input id='email' placeholder='Email' type='text' inputMode='email' />
                  <input id='pass' placeholder='Password' type='password' />
                  <input id='repass' placeholder='Repeat password' type='password' />
                </div>
                <button type='submit' className='primary'>
                  <span className='valid'>
                    Reset password
                    <br />
                    Sign in
                    <br />
                    Sign up
                  </span>
                </button>
                <button type='button' className='secondary'>
                  <span>Anonymous</span>
                </button>
              </form>
            </div>
            <div className='img'>
              <img src={waitingSvg} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
