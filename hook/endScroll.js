const endScroll = (innerHeight, nowScroll, setEnd) => {
  const endScroll = (innerHeight * 2) / 4;
  if (nowScroll < endScroll) {
    setEnd(0);
    return;
  }
  if (nowScroll >= endScroll && nowScroll < endScroll * 2) {
    setEnd(1);
    return;
  }
  if (nowScroll >= endScroll * 2 && nowScroll < endScroll * 3) {
    setEnd(2);
    return;
  }
  if (nowScroll >= endScroll * 3 && nowScroll < endScroll * 4) {
    setEnd(3);
    return;
  }

  // setEnd(3);
};
export default endScroll;
