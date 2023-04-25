const sponsorScroll = (innerHeight, nowScroll, setSponsor) => {
  const sponsorScroll = (innerHeight * 2) / 5;
  if (nowScroll < sponsorScroll) {
    setSponsor(0);
    return;
  }
  if (nowScroll >= sponsorScroll && nowScroll < sponsorScroll * 2) {
    setSponsor(1);
    return;
  }
  if (nowScroll >= sponsorScroll * 2 && nowScroll < sponsorScroll * 3) {
    setSponsor(2);
    return;
  }
  if (nowScroll >= sponsorScroll * 3 && nowScroll < sponsorScroll * 4) {
    setSponsor(3);
    return;
  }
  if (nowScroll >= sponsorScroll * 3 && nowScroll < sponsorScroll * 5) {
    setSponsor(4);
    return;
  }
  setSponsor(5);
  // setSponsor(3);
};
export default sponsorScroll;
