import React from 'react';
import RightBlock from './RightBlock';
import LeftBlock from './LeftBlock';
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
