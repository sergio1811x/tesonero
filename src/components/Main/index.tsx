import React from 'react';
import './index.css';

const Main = () => {
  return (
    <div className={'main'}>
      <div>
        <div className={'line'} />
        <div className={'title'}>Lorem ipsum, dolor sit amet consectetur</div>
        <div>
          <img
            className={'main-image about-block'}
            src={require('../../assets/images/image-main.png')}
          />
        </div>
        <div className={'about'}>
          <div className={'about1 about-block'}>
            <img className={'about-image'} src={require('../../assets/images/main1.png')} />
            <p className={'about-text'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={'about2 about-block'}>
            <img className={'about-image'} src={require('../../assets/images/main3.png')} />
            <p className={'about-text'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={'about3 about-block'}>
            <img className={'about-image'} src={require('../../assets/images/main2.png')} />
            <p className={'about-text'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={'about4 about-block'}>
            <img className={'about-image'} src={require('../../assets/images/main4.png')} />
            <p className={'about-text'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={'about5 about-block'}>
            <img className={'about-image'} src={require('../../assets/images/main1.png')} />
            <p className={'about-text'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={'about6 about-block'}>
            <img className={'about-image'} src={require('../../assets/images/main3.png')} />
            <p className={'about-text'}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <img className={'background1'} src={require('../../assets/images/background1.png')} />
      <img className={'background2'} src={require('../../assets/images/background2.png')} />
    </div>
  );
};

export default Main;
