const titleScroll = (innerHeight, nowScroll, setTitle) => {
  const titleScroll = innerHeight / 6;
  if (nowScroll < titleScroll) {
    setTitle(0);
    return;
  }
  if (nowScroll >= titleScroll && nowScroll < titleScroll * 2) {
    setTitle(1);
    return;
  }
  if (nowScroll >= titleScroll * 2 && nowScroll < titleScroll * 3) {
    setTitle(2);
    return;
  }
  if (nowScroll >= titleScroll * 3 && nowScroll < titleScroll * 4) {
    setTitle(3);
    return;
  }
  if (nowScroll >= titleScroll * 4 && nowScroll < titleScroll * 5) {
    setTitle(4);
    return;
  }
  setTitle(5);
};
export default titleScroll;
