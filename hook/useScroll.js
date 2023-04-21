import { useEffect, useState } from 'react';
import titleScroll from './titleScroll';
import troubledScroll from './troubledScroll';
import themeScroll from './themeScroll';

const useScroll = (viewRef) => {
  const [nowPageIndex, setNowPageIndex] = useState(0);
  const [titleNowIndex, setTitleNowIndex] = useState(0);
  const [troubledNowIndex, setTroubledNowIndex] = useState(0);
  const [themeNowIndex, setThemeNowIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const fullHeight = window.innerHeight;
      const initScroll = Math.abs(viewRef.current.getBoundingClientRect().y);
      const titleFinish = fullHeight;
      const troubledFinish = fullHeight * 2;
      const themeFinish = fullHeight * 3;
      console.log(initScroll);
      if (initScroll < titleFinish) {
        setNowPageIndex(0);
        const nowScroll = initScroll;
        titleScroll(fullHeight, nowScroll, setTitleNowIndex);
        return;
      }
      if (initScroll < troubledFinish) {
        setNowPageIndex(1);
        const nowScroll = initScroll - titleFinish;
        troubledScroll(fullHeight, nowScroll, setTroubledNowIndex);
        return;
      }
      if (initScroll < themeFinish) {
        const nowScroll = initScroll - troubledFinish;
        setNowPageIndex(2);
        themeScroll(fullHeight, nowScroll, setThemeNowIndex);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { nowPageIndex, titleNowIndex, troubledNowIndex, themeNowIndex };
};

export default useScroll;
