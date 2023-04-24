import Image from 'next/image';

import start from '@/public/assets/main/date_start.png';
import upload from '@/public/assets/main/date_upload.png';

import { useContext, useEffect, useState } from 'react';
import ScrollContext from '@/context';
import DateContent from './DateContent';
const Date = () => {
  const { dateNowIndex, nowPageIndex } = useContext(ScrollContext);
  const contextTranslate = (index) => {
    return dateNowIndex >= index ? 'translate-y-0' : 'translate-y-[100%]';
  };
  const contentOpacity = (index) => {
    return dateNowIndex >= index ? 'opacity-100' : 'opacity-0';
  };
  return (
    <div
      className={`h-[200vh] ${
        nowPageIndex === 4 ? 'opacity-100' : 'opacity-0'
      } `}
    >
      <div className="fixed left-1/2 -translate-x-1/2 top-[300px]">
        <div className="flex justify-center mb-[10px]">
          <DateContent
            title={'SIGN UP'}
            startDate={'10/13'}
            endDate={'11/6'}
            height={'h-[72px]'}
            // image
            className={`${contentOpacity(2)} ${contextTranslate(2)}`}
          >
            <h5>截止前可修改報名組別</h5>
          </DateContent>
          <DateContent
            title={'START'}
            startDate={'10/31'}
            endDate={'11/28'}
            image={start}
            height={'h-[33px]'}
            className={`${contentOpacity(3)} ${contextTranslate(3)}`}
          >
            <h5>
              10/31(一) UI、團體組開賽
              <br />
              11/7(一) 前端組開賽
            </h5>
          </DateContent>
          <DateContent
            title={'UPLOAD'}
            startDate={'10/31'}
            endDate={'11/28'}
            image={upload}
            height={'h-[72px]'}
            className={`${contentOpacity(4)} ${contextTranslate(4)}`}
          >
            <h5>依賽程登錄作品</h5>
            <p className="text-highlight">額外競賽： 主題豐厚獎金等著你</p>
          </DateContent>
        </div>
        <div
          className={`bg-dateLine  bg-no-repeat bg-[length:contain] w-[1440px] h-[103.97px] ${contentOpacity(
            1
          )}`}
        />
      </div>
    </div>
  );
};

export default Date;
