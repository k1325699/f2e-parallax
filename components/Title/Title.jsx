import Image from 'next/image';
import start from '@/public/assets/main/start.png';
import red from '@/public/assets/main/ready_3.png';
import yellow from '@/public/assets/main/ready_2.png';
import green from '@/public/assets/main/ready_1.png';
import logoText from '@/public/assets/logo/logo_text.png';
import TitleContent from './TitleContent';
import { logoWidth } from '@/styles/lengthStyle';
import { useContext, useEffect, useState } from 'react';
import ScrollContext from '@/context';
// const lengthStyle = {
//   logoWidth: "35.4vw",
// };
const titleContentData = [
  { title: '前端工程師', number: 920 },
  { title: 'UI設計師', number: 110 },
  { title: '團體組', number: 41 },
];
const Title = () => {
  const { titleNowIndex } = useContext(ScrollContext);
  const lightShow = () => {
    const initStyle = {
      red: { opacity: 1 },
      yellow: { opacity: 1 },
      green: { opacity: 1 },
    };
    const emptyStyle = {
      red: { opacity: 0 },
      yellow: { opacity: 0 },
      green: { opacity: 0 },
    };
    if (titleNowIndex === 0) {
      return initStyle;
    }
    if (titleNowIndex === 1) {
      return { ...emptyStyle, red: { opacity: 1 } };
    }
    if (titleNowIndex === 2) {
      return { ...emptyStyle, yellow: { opacity: 1 } };
    }
    if (titleNowIndex >= 3) {
      return { ...emptyStyle, green: { opacity: 1 } };
    }
  };
  const lightText = () => {
    if (titleNowIndex === 0) {
      return 'READY?';
    }
    if (titleNowIndex === 3) {
      return 'GO!';
    }
    return '';
  };
  // const [,set]=useState(0)
  return (
    <div
      className={`h-[200vh] ${titleNowIndex < 5 ? 'opacity-100' : 'opacity-0'}`}
    >
      <Image
        src={start}
        alt={'start'}
        width={1430}
        height={1080}
        className="fixed left-1/2 top-0 -translate-x-1/2"
      />
      <div className="fixed left-1/2 top-[44px] -translate-x-1/2 flex flex-col items-center">
        <div
          className={`relative  max-w-[680px] max-h-[236.03px]`}
          style={{
            width: logoWidth,
            height: `calc(${logoWidth} * 0.3471)`,
          }}
        >
          <Image src={logoText} alt={'logo'} fill />
        </div>
        {/* 文字說明 */}
        <div
          className={`flex flex-col items-center ${
            titleNowIndex < 5 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-gray-0 py-[8px] px-[40px] rounded-full bg-highlight inline-block mb-[47px]">
            互動式網頁設計
          </h1>
          <div
            className={`flex w-[60vw] ${
              titleNowIndex < 4 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {titleContentData.map(({ title, number }, i) => (
              <TitleContent title={title} number={number} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* 紅綠燈 */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 flex ${
          titleNowIndex < 4 ? 'opacity-100' : 'opacity-0'
        } flex-col justify-center items-center`}
      >
        <p className="highlight text-highlight tracking-m min-h-[32px]">
          {lightText()}
        </p>
        <div className="bg-trafficLights bg-cover w-[275px] h-[108px] relative">
          <Image
            src={red}
            alt={'紅燈'}
            width={49}
            height={49}
            className="absolute left-[12.5%] top-[52%] -translate-y-1/2"
            style={lightShow().red}
          />
          <Image
            src={yellow}
            alt={'黃燈'}
            width={49}
            height={49}
            className="absolute left-[36%] top-1/2 -translate-y-1/2"
            style={lightShow().yellow}
          />
          <Image
            src={green}
            alt={'綠燈'}
            width={49}
            height={49}
            className="absolute left-[60%] top-1/2 -translate-y-1/2"
            style={lightShow().green}
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
