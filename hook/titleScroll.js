const titleScroll = (innerHeight, nowScroll, setTitle) => {
  console.log(innerHeight, nowScroll, nowScroll / innerHeight);
  const titleScroll = innerHeight / 6;
  console.log(nowScroll, titleScroll);
  if (nowScroll < titleScroll) {
    setTitle(0);
    // console.log(0, titleScroll);
    return;
  }
  if (nowScroll >= titleScroll && nowScroll < titleScroll * 2) {
    setTitle(1);
    // console.log(1, titleScroll * 2);
    return;
  }
  if (nowScroll >= titleScroll * 2 && nowScroll < titleScroll * 3) {
    setTitle(2);
    // console.log(2, titleScroll * 3);
    return;
  }
  if (nowScroll >= titleScroll * 3 && nowScroll < titleScroll * 4) {
    setTitle(3);
    // console.log(3, titleScroll * 4);
    return;
  }
  if (nowScroll >= titleScroll * 4 && nowScroll < titleScroll * 5) {
    setTitle(4);
    // console.log(4, titleScroll * 5);
    return;
  }
  setTitle(5);
};
export default titleScroll;
