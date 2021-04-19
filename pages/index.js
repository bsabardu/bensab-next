import Head from 'next/head'

// == Import npm
import React from 'react';

// == Import Components
import HeaderCustom from 'components/HeaderCustom';
import Footer from 'components/Footer';
import Home from 'components/Home';

// == Composant
const App = () => (
  <div className="app">
      <HeaderCustom />
      <Home />
      <Footer />
  </div>
);

// == Export
export default App;
