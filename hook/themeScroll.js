const themeScroll = (innerHeight, nowScroll, setTrouble) => {
  const themeScroll = innerHeight / 4;
  if (nowScroll < themeScroll) {
    setTrouble(0);
    return;
  }
  if (nowScroll >= themeScroll && nowScroll < themeScroll * 2) {
    setTrouble(1);
    return;
  }
  if (nowScroll >= themeScroll * 2 && nowScroll < themeScroll * 3) {
    setTrouble(2);
    return;
  }
};
export default themeScroll;
