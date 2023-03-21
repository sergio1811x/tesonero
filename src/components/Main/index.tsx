import React from 'react';
import './index.css';

const Main = () => {
  return (
    <div className={'main'}>
      <div>
        <div className={'line-main'} />
        <div className={'title-main'}>Lorem ipsum, dolor sit amet consectetur</div>
        <div className={'about'}>
          <img className={'main-image'} src={require('../../assets/images/image-main.png')} />
          <div className={'top_and_bottom '}>
            <div className={'about1 '}>
              <img className={'about-image'} src={require('../../assets/images/main1.png')} />
              <p className={'about-text'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className={'about2 '}>
              <img className={'about-image'} src={require('../../assets/images/main3.png')} />
              <p className={'about-text'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className={'middle'}>
            <div className={'about3'}>
              <img className={'about-image'} src={require('../../assets/images/main2.png')} />
              <p className={'about-text'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className={'about4'}>
              <img className={'about-image'} src={require('../../assets/images/main4.png')} />
              <p className={'about-text'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className={'top_and_bottom '}>
            <div className={'about5'}>
              <img className={'about-image'} src={require('../../assets/images/main1.png')} />
              <p className={'about-text'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className={'about6'}>
              <img className={'about-image'} src={require('../../assets/images/main3.png')} />
              <p className={'about-text'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
