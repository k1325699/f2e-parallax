const troubledScroll = (innerHeight, nowScroll, setTrouble) => {
  const troubledScroll = innerHeight / 4;
  if (nowScroll < troubledScroll) {
    setTrouble(0);
    return;
  }
  if (nowScroll >= troubledScroll && nowScroll < troubledScroll * 2) {
    setTrouble(1);
    return;
  }
  if (nowScroll >= troubledScroll * 2 && nowScroll < troubledScroll * 3) {
    setTrouble(2);
    return;
  }
  if (nowScroll >= troubledScroll * 3 && nowScroll < troubledScroll * 4) {
    setTrouble(3);
    return;
  }
};
export default troubledScroll;
