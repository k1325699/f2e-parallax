import Image from 'next/image';

import { useContext, useEffect, useState } from 'react';
import ScrollContext from '@/context';
const End = () => {
  const { endNowIndex, nowPageIndex } = useContext(ScrollContext);
  const contextTranslate = (index) => {
    return endNowIndex >= index ? 'translate-y-0' : 'translate-y-[100%]';
  };
  const contentOpacity = (index) => {
    return endNowIndex >= index ? 'opacity-100' : 'opacity-0';
  };
  const finishLineAllStyle = (item) => {
    //item: all left right
    if (item === 'all')
      return endNowIndex < 1 || endNowIndex > 2 ? 'opacity-0' : 'opacity-100';
    if (item === 'left') {
      if (endNowIndex <= 1) return 'translate-x-[25px]';
      if (endNowIndex === 2) return '-translate-x-[70px]';
      if (endNowIndex >= 3) return '-translate-x-[500px]';
    }
    if (item === 'right') {
      if (endNowIndex <= 1) return '-translate-x-[25px]';
      if (endNowIndex === 2) return 'translate-x-[70px]';
      if (endNowIndex >= 3) return 'translate-x-[500px]';
    }
  };
  return (
    <div
      className={`h-[200vh] ${
        nowPageIndex === 7 ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <div
        className={` fixed top-0  left-1/2 -translate-x-1/2 bg-finish bg-top bg-[length:1430px_1080px] w-[1430px] h-[1080px] ${
          endNowIndex > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-125'
        }`}
      ></div>
      <div
        className={` fixed top-[70%]  left-1/2 -translate-x-1/2  flex z-40 ${finishLineAllStyle(
          'all'
        )}`}
      >
        <div
          className={` bg-finishLineL bg-right bg-[length:975px_129.5px] w-[975px] h-[129.5px]  ${finishLineAllStyle(
            'left'
          )}`}
        ></div>
        <div
          className={` bg-finishLineR bg-left bg-[length:975px_129.5px] w-[975px] h-[129.5px]  ${finishLineAllStyle(
            'right'
          )}`}
        ></div>
      </div>
    </div>
  );
};

export default End;
