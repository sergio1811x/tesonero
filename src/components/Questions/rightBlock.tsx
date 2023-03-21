import React from 'react';

const RightBlock = () => {
  return (
    <div className={'rightBlock'}>
      <div className={'line'} />
      <div className={'title'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
      <div className={'quote'}>
        <img className={'quote-photo'} src={require('../../assets/images/photo.png')} />

        <div className={'quote-text'}>
          <img className={'quote-image1'} src={require('../../assets/images/quotes1.png')} />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
          animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque
          quae deleniti, iste nisi expedita, provident excepturi officia! Porro ab rerum omnis
          magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis
          dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?
        </div>
        <div className={'quote-bottom'}>
          <p className={'quote-text'}>Jane Doe</p>
          <img className={'quote-image2'} src={require('../../assets/images/quotes2.png')} />
        </div>
        <div className={'quote-box'}>
          <div className={'quote-text quote-right'}>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut
              consectetur animi autem aliquid
              <p>Jane Doe</p>
            </span>
            <img className={'quote-photo-mini1'} src={require('../../assets/images/photo.png')} />
          </div>
          <div className={'quote-text quote-left'}>
            <img className={'quote-photo-mini2'} src={require('../../assets/images/photo.png')} />
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

export default RightBlock;
