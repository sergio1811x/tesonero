import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Questions from './components/Questions';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Questions />
      <img className={'background1'} src={require('./assets/images/background1.png')} />
      <img className={'background2'} src={require('./assets/images/background2.png')} />
    </>
  );
}

export default App;
