import React from 'react';

const RightContainer = () => {
  return (
    <div className={'right'}>
      <div className={'line'} />
      <div className={'title'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      <div className={'quote'}>
        <span className={'quote__block'}>
          <img className={'quote__photo'} src={require('../../assets/images/photo.png')} />

          <div className={'quote__text'}>
            <img className={'quote__image1'} src={require('../../assets/images/quotes1.png')} />
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut
              consectetur animi autem aliquid consequuntur suscipit exercitationem laborum
              cupiditate magnam eaque quae deleniti, iste nisi expedita, provident excepturi
              officia! Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis
              magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis
              dolore?
            </span>
          </div>
          <div className={'quote__bottom'}>
            <p className={'quote__text'}>Jane Doe</p>
            <img className={'quote__image2'} src={require('../../assets/images/quotes2.png')} />
          </div>
        </span>
        <div className={'quote__box'}>
          <div className={'quote__text quote__right'}>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut
              consectetur animi autem aliquid
              <p>Jane Doe</p>
            </span>
            <img className={'quote__photo_mini1'} src={require('../../assets/images/photo.png')} />
          </div>
          <div className={'quote__text quote__left'}>
            <img className={'quote__photo_mini2'} src={require('../../assets/images/photo.png')} />
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut
              consectetur animi autem aliquid
              <p>Jane Doe</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
