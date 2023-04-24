const dateScroll = (innerHeight, nowScroll, setTopic) => {
  const dateScroll = (innerHeight * 2) / 5;
  if (nowScroll < dateScroll) {
    setTopic(0);
    return;
  }
  if (nowScroll >= dateScroll && nowScroll < dateScroll * 2) {
    setTopic(1);
    return;
  }
  if (nowScroll >= dateScroll * 2 && nowScroll < dateScroll * 3) {
    setTopic(2);
    return;
  }
  if (nowScroll >= dateScroll * 3 && nowScroll < dateScroll * 4) {
    setTopic(3);
    return;
  }
  if (nowScroll >= dateScroll * 3 && nowScroll < dateScroll * 5) {
    setTopic(4);
    return;
  }
  setTopic(5);
  // setTopic(3);
};
export default dateScroll;
