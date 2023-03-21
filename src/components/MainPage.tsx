import React from 'react';
import Header from './Header';
import Main from './Main';
import Questions from './Questions';
import '../index.css';

const MainPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Questions />
      <img className={'background1'} src={require('../assets/images/background1.png')} />
      <img className={'background2'} src={require('../assets/images/background2.png')} />
    </>
  );
};

export default MainPage;
