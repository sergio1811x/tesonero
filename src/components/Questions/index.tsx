import React from 'react';
import RightBlock from './rightBlock';
import LeftBlock from './leftBlock';
import './index.css';

const Questions = () => {
  return (
    <div className={'questions'}>
      <RightBlock />
      <LeftBlock />
    </div>
  );
};

export default Questions;
