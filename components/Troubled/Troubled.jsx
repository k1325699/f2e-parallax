import Image from 'next/image';

import { logoWidth } from '@/styles/lengthStyle';
import talking from '@/public/assets/bg/talking_troubled.png';
import question1 from '@/public/assets/main/question_1.png';
import question2 from '@/public/assets/main/question_2.png';
import question3 from '@/public/assets/main/question_3.png';
import { useContext } from 'react';
import ScrollContext from '@/context';
import TroubledContent from './TroubledContent';
const Troubled = () => {
  const { troubledNowIndex, nowPageIndex } = useContext(ScrollContext);
  return (
    <div
      className={`h-[100vh] ${
        nowPageIndex === 1 ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <Image
        src={talking}
        alt={'title'}
        width={736}
        className={`fixed left-1/2 -translate-x-1/2 top-[40px]  `}
      />
      <div
        className={`fixed top-[195px] left-1/2 -translate-x-1/2 w-[95%] flex `}
      >
        <TroubledContent
          title={'羨慕別人的酷酷網頁動畫？'}
          image={question1}
          alt={'羨慕別人的酷酷網頁動畫？圖片'}
          className={`${
            troubledNowIndex > 0 ? 'translate-x-0' : '-translate-x-[300%]'
          }`}
        />
        <TroubledContent
          title={'滿足不了同事的許願？'}
          image={question2}
          alt={'滿足不了同事的許願？圖片'}
          className={`${troubledNowIndex > 1 ? 'opacity-100' : 'opacity-0'}`}
        />
        <TroubledContent
          title={'動畫技能樹太雜無從下手？'}
          image={question3}
          alt={'動畫技能樹太雜無從下手？圖片'}
          className={`${
            troubledNowIndex > 2 ? 'translate-x-0' : 'translate-x-[300%]'
          }`}
        />
      </div>
    </div>
  );
};

export default Troubled;
