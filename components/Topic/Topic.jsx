import Image from 'next/image';

import { logoWidth } from '@/styles/lengthStyle';
import talking from '@/public/assets/bg/talking_topic.png';
import week1 from '@/public/assets/main/week_1.png';
import week2 from '@/public/assets/main/week_2.png';
import week3 from '@/public/assets/main/week_3.png';
import { useContext, useEffect, useState } from 'react';
import ScrollContext from '@/context';
import TopicContent from './TopicContent';
const Topic = () => {
  const { topicNowIndex, nowPageIndex } = useContext(ScrollContext);
  const contextTranslate = () => {
    if (topicNowIndex < 2) {
      return 'translate-y-[100%]';
    }
    if (topicNowIndex < 3) {
      return '-translate-y-[calc(50%-265px)]';
    }
    if (topicNowIndex < 4) {
      return '-translate-y-1/2';
    }
    if (topicNowIndex < 5) {
      return '-translate-y-[calc(50%+265px)]';
    }
    return '-translate-y-[calc(50%+265px*2)]';
  };
  const contentOpacity = (index) => {
    return topicNowIndex === index ? 'opacity-100' : 'opacity-0';
  };
  return (
    <div
      className={`h-[200vh] ${
        nowPageIndex === 3 ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-[40px]  flex items-center flex-col ${
          topicNowIndex > 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image src={talking} alt={'title'} width={875} />
        <h5 className="text-secondary-dark text-center">
          各路廠商強強聯手
          <br />
          共同設計出接地氣的網頁互動挑戰關卡
        </h5>
      </div>
      <div
        className={`fixed top-1/2 w-full flex flex-col items-center ${contextTranslate()}`}
      >
        <TopicContent
          title={'The F2E 活動網站設計'}
          topic={'Parallax Scrolling'}
          company={'版塊設計'}
          link={'https://2022.thef2e.com/news/week1'}
          index={1}
          image={week1}
          className={`${contentOpacity(2)}`}
        />
        <TopicContent
          title={'The F2E 活動網站設計'}
          topic={'Canvas'}
          company={'凱鈿行動科技'}
          link={'https://2022.thef2e.com/news/week2'}
          position="right"
          index={2}
          image={week2}
          className={`${contentOpacity(3)}`}
        />
        <TopicContent
          title={'Scrum 新手村'}
          topic={'JS draggable'}
          company={'鈦坦科技'}
          link={'https://2022.thef2e.com/news/week3'}
          index={3}
          image={week3}
          className={`${contentOpacity(4)}`}
        />
      </div>
    </div>
  );
};

export default Topic;
