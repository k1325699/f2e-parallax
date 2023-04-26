import Image from 'next/image';
import talking from '@/public/assets/bg/talking_sponsor.png';
import blockstudio from '@/public/assets/main/logo_blockstudio.png';
import titansoft from '@/public/assets/main/logo_titansoft.png';
import kdanmobile from '@/public/assets/main/logo_kdanmobile.png';

import { useContext, useEffect, useState } from 'react';
import ScrollContext from '@/context';
import SponsorContent from './SponsorContent';
const Sponsor = () => {
  const { sponsorNowIndex, nowPageIndex } = useContext(ScrollContext);
  const contextTranslate = (index) => {
    return sponsorNowIndex >= index ? 'translate-y-0' : 'translate-y-[100%]';
  };
  const contentOpacity = (index) => {
    return sponsorNowIndex >= index ? 'opacity-100' : 'opacity-0';
  };
  return (
    <div
      className={`h-[200vh] ${
        nowPageIndex === 6 ? 'opacity-100' : 'opacity-0'
      } `}
    >
      {/* <div
    className={`fixed left-1/2 -translate-x-1/2 top-[40px]  flex items-center flex-col ${
      sponsorNowIndex > 0 ? 'opacity-100' : 'opacity-0'
    }`}
  > */}
      <Image
        src={talking}
        alt={'title'}
        width={446}
        className={`fixed left-1/2 -translate-x-1/2 top-[40px]  ${
          sponsorNowIndex > 0 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={` flex fixed top-[200px] left-1/2 -translate-x-1/2 z-50  ${
          sponsorNowIndex > 1
            ? 'opacity-100  translate-y-0'
            : 'opacity-0 translate-y-[100%]'
        }`}
      >
        <SponsorContent image={blockstudio} title={'版塊設計'} />
        <SponsorContent image={titansoft} title={'鈦坦科技'} />
        <SponsorContent image={kdanmobile} title={'凱鈿科技'} />
      </div>
    </div>
  );
};

export default Sponsor;
