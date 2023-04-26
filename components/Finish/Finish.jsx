import Image from 'next/image';
import joinHandIcon from '@/public/assets/btn/btn_joinHand.png';
import { useContext, useEffect, useState } from 'react';
import ScrollContext from '@/context';
const Finish = () => {
  const { nowPageIndex } = useContext(ScrollContext);

  return (
    <div
      className={`h-[100vh] ${
        nowPageIndex === 8 ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <div className="fixed left-1/2 -translate-x-1/2 bottom-[140px] highlight flex flex-col items-center justify-center z-50">
        <Image
          src={joinHandIcon}
          alt={'報名按鈕'}
          width={57}
          height={71}
          className="animate-hand"
        />
        <a
          className="bg-joinButton hover:bg-joinButtonHover w-[160px] block h-[93.1px] bg-cover z-50"
          href="https://2022.thef2e.com/signup"
          target="_blank"
          rel="noreferrer"
        ></a>
        <h2 className="text-highlight mt-5">立即報名</h2>
      </div>
    </div>
  );
};

export default Finish;
