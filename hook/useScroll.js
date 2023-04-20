import { useEffect, useState } from 'react';
import titleScroll from './titleScroll';
import troubledScroll from './troubledScroll';

const useScroll = (viewRef) => {
  const [nowPageIndex, setNowPageIndex] = useState(0);
  const [titleNowIndex, setTitleNowIndex] = useState(0);
  const [troubledNowIndex, setTroubledNowIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const fullHeight = window.innerHeight;
      const initScroll = Math.abs(viewRef.current.getBoundingClientRect().y);
      const titleFinish = fullHeight;
      const troubledFinish = fullHeight * 3;

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
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { nowPageIndex, titleNowIndex, troubledNowIndex };
};

export default useScroll;
