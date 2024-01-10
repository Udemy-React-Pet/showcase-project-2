import React from 'react';

import Header from './components/Header';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

import { ContextProvider } from './context';

function App() {
  return (
    <React.Fragment>
      <Header />
      <ContextProvider>
        <Showcase />
      </ContextProvider>
      <Footer />
    </React.Fragment>
  );
}

export default App;
