import React from 'react';

function Header() {
  return (
    <nav className='deep-orange darken-2'>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>
          React Showcase
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a
              href='https://github.com/Udemy-React-Pet/showcase-project-2'
              target='_blank'
              without
              rel='noreferrer'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
