import { useEffect, useState } from 'react';
import titleScroll from './titleScroll';

const useScroll = (viewRef) => {
  const [mapNowIndex, setMapNowIndex] = useState(0);
  const [titleNowIndex, setTitleNowIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const fullHeight = window.innerHeight;
      const nowScroll = Math.abs(viewRef.current.getBoundingClientRect().y);
      const aaa = Math.abs(viewRef.current.getBoundingClientRect().y);
      const TitleFinish = fullHeight;
      console.log(aaa, 'aaa');
      // console.log(nowScroll, TitleFinish);
      if (nowScroll < TitleFinish) {
        titleScroll(fullHeight, nowScroll, setTitleNowIndex);
        return;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { mapNowIndex, titleNowIndex };
};

export default useScroll;
