import Image from 'next/image';
import userIcon from '@/public/assets/btn/btn_user.png';
import joinHandIcon from '@/public/assets/btn/btn_joinHand.png';
import mapNowIcon from '@/public/assets/main/map_now.gif';
import road from '@/public/assets/main/road.png';
import dog from '@/public/assets/character/dog.gif';
import pig from '@/public/assets/character/pig.gif';
import cat from '@/public/assets/character/cat.gif';
import { useEffect, useRef, useState } from 'react';
import { mapNow } from '@/styles/parallaxStyle';
import Title from '@/components/Title';
import { imageLength, lengthStyle, logoWidth } from '@/styles/lengthStyle';
import useScroll from '@/hook/useScroll';
import ScrollContext from '@/context';
import Troubled from '@/components/Troubled';
import Theme from '@/components/Theme';
import Topic from '@/components/Topic';
import Date from '@/components/Date';
import Contest from '@/components/Contest';
import Sponsor from '@/components/Sponsor';
import End from '@/components/End';
import Finish from '@/components/Finish';

const Home = () => {
  const viewRef = useRef(null);
  const scrollValue = useScroll(viewRef);
  const { contestNowIndex, endNowIndex, nowPageIndex } = scrollValue;
  const characterScale = () => {
    if (nowPageIndex === 7 && endNowIndex > 2) {
      return 'scale-[125%]';
    }
    if (
      nowPageIndex === 0 ||
      (nowPageIndex === 7 && endNowIndex === 2) ||
      nowPageIndex === 8
    ) {
      return 'scale-100';
    }
    if (nowPageIndex === 2 || (nowPageIndex === 7 && endNowIndex === 1)) {
      return 'scale-75 translate-y-[25%]';
    }
    if (nowPageIndex === 4) {
      return 'scale-[60%] translate-y-[25%]';
    }
    if (nowPageIndex === 5) {
      return contestNowIndex >= 2
        ? 'scale-75 translate-y-[25%]'
        : 'scale-25 translate-y-[25%]';
    }
    return 'scale-50 translate-y-[25%]';
  };
  return (
    <ScrollContext.Provider value={scrollValue}>
      <div className="bg-secondary min-h-screen" ref={viewRef}>
        {/* logo */}
        <div
          className={`bg-logo ${
            nowPageIndex === 8
              ? '  left-1/2 -translate-x-1/2 bottom-[420px]'
              : '  top-[30px] left-[40px]'
          } bg-cover fixed  z-50 ${
            nowPageIndex > 0 ? 'opacity-100' : 'opacity-0'
          } `}
          style={{
            width:
              nowPageIndex === 8 ? 'calc((100vh - 450px)*1.3419)' : '200px',
            height: nowPageIndex === 8 ? 'calc(100vh - 450px)' : '149px',
            maxHeight: '387.15px',
            maxWidth: '520px',
          }}
        ></div>
        {/* user */}
        <a
          className="fixed right-[15px] top-[30px] z-50"
          href={'https://2022.thef2e.com/users'}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={userIcon} alt={'userIcon'} width={80} height={80} />
        </a>
        <Title />
        <Troubled />
        <Theme />
        <Topic />
        <Date />
        <Contest />
        <Sponsor />
        <End />
        <Finish />
        {/* 腳色 */}
        <div
          className={`fixed bottom-0 left-1/2 -translate-x-1/2  ${characterScale()}`}
        >
          <Image src={road} alt={'跑道'} width={1175} h={135.5} />
          <div
            className={`${nowPageIndex === 8 ? 'opacity-0' : 'opacity-100'}`}
          >
            <div
              className="absolute bottom-0 left-1/2  -translate-x-[150%]"
              style={{
                height: `calc(${imageLength.dogHeight})`,
                width: `calc((${imageLength.dogHeight})*0.584)`,
              }}
            >
              <Image
                src={dog}
                alt={'狗狗'}
                // height="5vh"
                // width={351}
                // h={601}
                fill
                // sizes="15vw"
                className=""
              />
            </div>

            <div
              className="absolute  bottom-0 left-1/2  translate-x-1/2"
              style={{
                height: `calc(${imageLength.pigHeight})`,
                width: `calc((${imageLength.pigHeight})*0.666)`,
              }}
            >
              <Image
                src={pig}
                alt={'豬豬'}
                // width={351}
                // h={527}
                fill
                // className="absolute bottom-0 left-[100%] -translate-x-[100%]"
              />
            </div>
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                height: `calc(${imageLength.dogHeight})`,
                width: `calc((${imageLength.dogHeight})*0.61564)`,
              }}
            >
              <Image
                src={cat}
                alt={'貓貓'}
                // width={370}
                // h={601}
                fill
                // className="absolute bottom-0 left-1/2 -translate-x-1/2 "
              />
            </div>
          </div>
        </div>
        {/* map */}
        <div
          className={`${nowPageIndex === 7 ? 'bg-mapFinish' : 'bg-map'} ${
            nowPageIndex === 8 ? 'hidden' : 'flex'
          } bg-map fixed w-[260px] h-[170px] left-[30px] bottom-[20px]`}
        >
          {nowPageIndex < 7 ? (
            <Image
              className="absolute "
              src={mapNowIcon}
              alt={'現在位置'}
              width={30}
              height={30}
              style={mapNow[nowPageIndex]}
            />
          ) : null}
        </div>
        {/* join Button */}
        <div
          className={`fixed right-[15px] bottom-[20px] highlight  flex-col items-center justify-center ${
            nowPageIndex === 8 ? 'hidden' : 'flex'
          }`}
        >
          <p className="tracking-m text-primary mb-[4px]">JOIN</p>
          <Image
            src={joinHandIcon}
            alt={'報名按鈕'}
            width={57}
            height={71}
            className="animate-hand"
          />
          <a
            className="bg-joinButton hover:bg-joinButtonHover w-[103px] block h-[60px] bg-cover"
            href="https://2022.thef2e.com/signup"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
    </ScrollContext.Provider>
  );
};
export default Home;
