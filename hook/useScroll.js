import { useEffect, useState } from 'react';
import titleScroll from './titleScroll';
import troubledScroll from './troubledScroll';
import themeScroll from './themeScroll';
import topicScroll from './topicScroll';
import dateScroll from './dateScroll';
import contestScroll from './contestScroll';
import sponsorScroll from './sponsorScoll';
import endScroll from './endScroll';

const useScroll = (viewRef) => {
  const [nowPageIndex, setNowPageIndex] = useState(0);
  const [titleNowIndex, setTitleNowIndex] = useState(0);
  const [troubledNowIndex, setTroubledNowIndex] = useState(0);
  const [themeNowIndex, setThemeNowIndex] = useState(0);
  const [topicNowIndex, setTopicNowIndex] = useState(0);
  const [dateNowIndex, setDateNowIndex] = useState(0);
  const [contestNowIndex, setContestNowIndex] = useState(0);
  const [sponsorNowIndex, setSponsorNowIndex] = useState(0);
  const [endNowIndex, setEndNowIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const fullHeight = window.innerHeight;
      const initScroll = Math.abs(viewRef.current.getBoundingClientRect().y);
      const titleFinish = fullHeight;
      const troubledFinish = fullHeight * 2;
      const themeFinish = fullHeight * 3;
      const topicFinish = fullHeight * 5;
      const dateFinish = fullHeight * 7;
      const contestFinish = fullHeight * 9;
      const sponsorFinish = fullHeight * 11;
      const endFinish = fullHeight * 13;
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
        return;
      }
      if (initScroll < topicFinish) {
        const nowScroll = initScroll - themeFinish;
        setNowPageIndex(3);
        topicScroll(fullHeight, nowScroll, setTopicNowIndex);
        return;
      }
      if (initScroll < dateFinish) {
        const nowScroll = initScroll - topicFinish;
        setNowPageIndex(4);
        dateScroll(fullHeight, nowScroll, setDateNowIndex);
        return;
      }
      if (initScroll < contestFinish) {
        const nowScroll = initScroll - dateFinish;
        setNowPageIndex(5);
        contestScroll(fullHeight, nowScroll, setContestNowIndex);
        return;
      }
      if (initScroll < sponsorFinish) {
        const nowScroll = initScroll - contestFinish;
        setNowPageIndex(6);
        sponsorScroll(fullHeight, nowScroll, setSponsorNowIndex);
        return;
      }
      if (initScroll < endFinish) {
        const nowScroll = initScroll - sponsorFinish;
        setNowPageIndex(7);
        endScroll(fullHeight, nowScroll, setEndNowIndex);
        return;
      }
      setNowPageIndex(8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    nowPageIndex,
    titleNowIndex,
    troubledNowIndex,
    themeNowIndex,
    topicNowIndex,
    dateNowIndex,
    contestNowIndex,
    sponsorNowIndex,
    endNowIndex,
  };
};

export default useScroll;
