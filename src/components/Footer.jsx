import React from 'react';

function Footer() {
  return (
    <footer className='page-footer deep-orange darken-1'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a
            className='grey-text indigo lighten-4 right'
            href='https://github.com/Udemy-React-Pet/showcase-project-2'
            target='_blank'
            without
            rel='noreferrer'
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
