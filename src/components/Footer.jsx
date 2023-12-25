import React from 'react';

function Footer() {
  return (
    <footer className='page-footer deep-orange darken-1'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a className='grey-text indigo lighten-4 right' href='#!'>
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
