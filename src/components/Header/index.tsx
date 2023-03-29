import React, { useState } from 'react';
import './index.css';

const Header = () => {
  const [navActive, setNavActive] = useState<number>(2);

  const navItem = ['NavItem1', 'NavItem2', 'NavItem3'];

  return (
    <>
      <div className={'header'}>
        <span className={'text'}>PRODUCT</span>
        <img className={'image'} src={require('../../assets/images/logo.png')} />
        <div className={'nav'}>
          {navItem.map((el, index) => (
            <span
              key={index}
              onClick={() => setNavActive(index)}
              className={navActive === index ? 'nav__text active ' : 'nav__text '}
            >
              {el}
            </span>
          ))}
        </div>
        <span className={'nav__text active button'}>Button</span>
      </div>
    </>
  );
};

export default Header;
