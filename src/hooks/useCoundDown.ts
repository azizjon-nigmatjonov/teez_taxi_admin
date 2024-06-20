import { useEffect, useState } from "react";

const useCountDown = (status: any, count = 10) => {
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    setCountDown(count);
  }, [count]);

  useEffect(() => {
    let time = 0;
    if (status === "secunds") {
      time = 1000;
    }
    if (!countDown) return;
    if (time === 0) return;
    
    const timer = setInterval(() => {
      setCountDown(countDown - 1);
    }, time);

    // clear the interval when we're done;
    return () => clearInterval(timer);
  }, [countDown, status]);

  return countDown;
};

export default useCountDown;
