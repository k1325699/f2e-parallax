import Image from 'next/image';

import { logoWidth } from '@/styles/lengthStyle';
import talking from '@/public/assets/bg/talking_theme.png';
import { useContext, useEffect, useState } from 'react';
import ScrollContext from '@/context';
import ThemeContent from './ThemeContent';
const Theme = () => {
  const { themeNowIndex, nowPageIndex } = useContext(ScrollContext);
  return (
    <div
      className={`h-[100vh] ${
        nowPageIndex === 2 ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-[40px]  flex items-center flex-col ${
          themeNowIndex > 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image src={talking} alt={'title'} width={875} />
        <h5 className="text-secondary-dark">以下兩個角色進行攜手合作</h5>
      </div>
      <div
        className={`fixed top-[calc(213px+(100vh-213px-(100vh-44px-177px-35.4vw*0.3471))/2)] w-[80%] left-1/2 -translate-x-1/2  flex ${
          themeNowIndex > 1 ? '-translate-y-1/2' : 'translate-y-[100vh]'
        }`}
      >
        <ThemeContent title={'前端工程師'} />
        <ThemeContent title={'ＵＩ設計師'} />
        <ThemeContent title={'團體組(UI+前端)'} />
      </div>
    </div>
  );
};

export default Theme;
