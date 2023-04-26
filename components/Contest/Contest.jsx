import Image from 'next/image';

import decorate3 from '@/public/assets/bg/bg_decorate_03.png';
import decorate7 from '@/public/assets/bg/bg_decorate_07.png';
import talking from '@/public/assets/bg/talking_contest.png';
import award from '@/public/assets/main/award.png';

import { useContext, useEffect, useState } from 'react';
import ScrollContext from '@/context';
import ContestContent from './ContestContent';
const Contest = () => {
  const { contestNowIndex, nowPageIndex } = useContext(ScrollContext);
  const contextTranslate = (index) => {
    return contestNowIndex >= index ? 'translate-y-0' : 'translate-y-[100%]';
  };
  const contentOpacity = (index) => {
    return contestNowIndex >= index ? 'opacity-100' : 'opacity-0';
  };
  const titleStyle = () => {
    return contestNowIndex >= 1
      ? 'opacity-100 scale-[100%]'
      : 'opacity-0 scale-[300%]';
  };
  return (
    <div
      className={`h-[200vh] ${
        nowPageIndex === 5 ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`${contestNowIndex >= 2 ? 'opacity-0' : 'opacity-100'}`}>
        <h2
          className={`text-highlight fixed top-[232px] text-center left-1/2 -translate-x-1/2 z-50 ${titleStyle()}`}
        >
          區區修煉已經無法滿足了嗎？
        </h2>
        <Image
          src={decorate3}
          alt={`雲3 icon`}
          width={368}
          className={`fixed top-1/2 -translate-y-1/2 left-[206px] ${
            contestNowIndex >= 1 ? 'translate-x-0' : '-translate-x-[309px]'
          }`}
        />
        <Image
          src={decorate7}
          alt={`雲7 icon`}
          width={450}
          className={`fixed top-1/2 -translate-y-1/2 right-[114px] ${
            contestNowIndex >= 1 ? 'translate-x-0' : 'translate-x-[171px]'
          }`}
        />
      </div>
      {/* 第2頁 */}
      <div className={`${contestNowIndex < 2 ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={talking}
          alt={'title'}
          width={627}
          className={`fixed left-1/2 -translate-x-1/2 top-[40px]  `}
        />
        <div
          className={` w-full flex justify-center items-start fixed top-[210px] left-1/2 -translate-x-1/2 z-50 ${
            contestNowIndex >= 3
              ? '-translate-x-1/2 opacity-100'
              : '-translate-x-[300%] opacity-0'
          }`}
        >
          <Image src={award} alt={'皇冠'} width={375} className="mr-[60px]" />
          <div className="">
            <div className="mb-8">
              <h4 className="text-highlight mb-3">評審機制</h4>
              <p className="highlight text-primary">
                初選： 將由六角學院前端、UI 評審進行第一波篩選。
                <br />
                決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
                由評審進行直播公布名單！
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-highlight mb-3">獎項 </h4>
              <ul className="highlight text-primary">
                <li>1. 初選佳作 共六十位 數位獎狀</li>
                <li>
                  2. 個人企業獎 共六位 NTD{' '}
                  <span className="text-h5-d text-highlight">3,000</span> /位
                </li>
                <li>
                  3. 團體企業獎 共三組 NTD{' '}
                  <span className="text-h5-d text-highlight">10,000</span> /組
                </li>
                <li>4. 以上皆提供完賽數位獎狀</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
