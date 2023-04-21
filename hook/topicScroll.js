const topicScroll = (innerHeight, nowScroll, setTopic) => {
  const topicScroll = (innerHeight * 2) / 6;
  if (nowScroll < topicScroll) {
    setTopic(0);
    return;
  }
  if (nowScroll >= topicScroll && nowScroll < topicScroll * 2) {
    setTopic(1);
    return;
  }
  if (nowScroll >= topicScroll * 2 && nowScroll < topicScroll * 3) {
    setTopic(2);
    return;
  }
  if (nowScroll >= topicScroll * 3 && nowScroll < topicScroll * 4) {
    setTopic(3);
    return;
  }
  if (nowScroll >= topicScroll * 3 && nowScroll < topicScroll * 5) {
    setTopic(4);
    return;
  }
  setTopic(5);
  // setTopic(3);
};
export default topicScroll;
