const contestScroll = (innerHeight, nowScroll, setContest) => {
  const contestScroll = (innerHeight * 2) / 5;
  if (nowScroll < contestScroll) {
    setContest(0);
    return;
  }
  if (nowScroll >= contestScroll && nowScroll < contestScroll * 2) {
    setContest(1);
    return;
  }
  if (nowScroll >= contestScroll * 2 && nowScroll < contestScroll * 3) {
    setContest(2);
    return;
  }
  if (nowScroll >= contestScroll * 3 && nowScroll < contestScroll * 4) {
    setContest(3);
    return;
  }
  if (nowScroll >= contestScroll * 3 && nowScroll < contestScroll * 5) {
    setContest(4);
    return;
  }
  setContest(5);
  // setContest(3);
};
export default contestScroll;
