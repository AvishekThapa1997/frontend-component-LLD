"use client";
import React, { useEffect, useState } from "react";

interface Screen {
  height: number;
  width: number;
  fortyPercentOfViewPortWidth: number;
  thirtyPercentOfViewPortWidth: number;
  twentyFivePercentOfViewPortWidth: number;
}

const ClientDimension = () => {
  const [screen, setScreen] = useState<Screen>({
    height: 0,
    width: 0,
    fortyPercentOfViewPortWidth: 0,
    thirtyPercentOfViewPortWidth: 0,
    twentyFivePercentOfViewPortWidth: 0,
  });
  useEffect(() => {
    const resizeEventListener = () => {
      setScreen({
        height: window.innerHeight,
        width: window.innerWidth,
        fortyPercentOfViewPortWidth: 0.4 * window.innerWidth,
        thirtyPercentOfViewPortWidth: 0.3 * window.innerWidth,
        twentyFivePercentOfViewPortWidth: 0.25 * window.innerWidth,
      });
    };
    window.addEventListener("resize", resizeEventListener);
    resizeEventListener();
    return () => {
      window.removeEventListener("resize", resizeEventListener);
    };
  }, []);

  return (
    <div>
      <p>Width&nbsp;:&nbsp;{screen.width}</p>
      <p>Height&nbsp;:&nbsp;{screen.height}</p>
      <p>40% of vw&nbsp;:&nbsp;{screen.fortyPercentOfViewPortWidth}</p>
      <p>30% of vw&nbsp;:&nbsp;{screen.thirtyPercentOfViewPortWidth}</p>
      <p>25% of vw&nbsp;:&nbsp;{screen.twentyFivePercentOfViewPortWidth}</p>
    </div>
  );
};

export default ClientDimension;
