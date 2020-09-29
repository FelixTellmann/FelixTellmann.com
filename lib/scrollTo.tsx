type EaseInOutQuadOptions = {
  currentTime: number;
  start: number;
  change: number;
  duration: number;
};

const easeInOutQuad = ({ currentTime, start, change, duration }: EaseInOutQuadOptions) => {
  let newCurrentTime = currentTime;
  newCurrentTime /= duration / 2;
  
  if (newCurrentTime < 1) {
    return (change / 2) * newCurrentTime * newCurrentTime + start;
  }
  
  newCurrentTime -= 1;
  return (-change / 2) * (newCurrentTime * (newCurrentTime - 2) - 1) + start;
};

export default function scrollTo(duration: number, to: number)
{
  const start = window.scrollY;
  const change = to - start;
  const startDate = new Date().getTime();
  
  const animateScroll = () => {
    const currentDate = new Date().getTime();
    const currentTime = currentDate - startDate;
    scroll(0, easeInOutQuad({
      currentTime,
      start,
      change,
      duration
    }));
    
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  animateScroll();
}