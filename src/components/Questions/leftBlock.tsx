import React, { useState } from 'react';

const LeftBlock = () => {
  const [hiddenTextIndex, setHiddenTextIndex] = useState([2]);

  const handleClickOpenText = (index: number) => {
    const number = hiddenTextIndex.includes(index);
    if (number) {
      setHiddenTextIndex(hiddenTextIndex.filter((el) => el !== index));
    } else setHiddenTextIndex((prev) => [...prev, index]);
  };

  return (
    <div className={'leftBlock'}>
      <div className={'line'} />
      <div className={'title title-left '}>
        Lorem ipsum, dolor sit adipisicing elit.
        <p>Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
      </div>
      <div>
        {[...Array(5)].map((el, index) => {
          return (
            <div key={index} className={'block'}>
              <div className={'image-and-text'}>
                <img
                  className={'block-image'}
                  src={require(`../../assets/images/image${index}.png`)}
                />
                <span
                  onClick={() => handleClickOpenText(index)}
                  className={
                    hiddenTextIndex.includes(index) ? 'text-span green-color' : 'text-span'
                  }
                >
                  Lorem ipsum, dolor sit amet adipisicing elit.
                </span>
                <img
                  className={'arrow'}
                  src={require(`../../assets/images/arrow${
                    hiddenTextIndex.includes(index) ? 2 : 1
                  }.png`)}
                  onClick={() => handleClickOpenText(index)}
                />
              </div>
              <div className={hiddenTextIndex.includes(index) ? 'hidden-text' : 'hidden'}>
                Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit
                exercitationem laborum cupiditate magnam eaque quae delenit
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftBlock;
