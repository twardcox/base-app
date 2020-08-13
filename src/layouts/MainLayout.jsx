import React from 'react';
import Header from '../components/Header';
import ThemeContext from '../context/ThemeContext';
import Main from '../components/Main';
import { useState } from 'react';


const MainLayout = () => {

  const themeHook = useState('light');

  return (
    <ThemeContext.Provider value={themeHook}>
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    </ThemeContext.Provider>
  );
};

export default MainLayout;