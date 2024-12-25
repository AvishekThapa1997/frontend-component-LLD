import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import "./caraousal.css";

interface CaraousalProps extends PropsWithChildren {
  gap?: 1 | 2 | 4 | 6 | 8; // 1 unit will be equal to 4px i.e if passed 2 then it will 2 * 4px = 8px
}

const Caraousal = ({ children, gap = 4 }: CaraousalProps) => {
  const [currentActiveItemIndex, setCurrentActiveItemIndex] = useState(0);
  const [caraousalBtnVisibility, setCaraousalBtnVisibility] = useState({
    showPrevButton: false,
    showNextButton: false,
  });
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const firstElementRef = useRef<HTMLDivElement | null>(null);
  const caraousalTrackRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const lastElement = lastElementRef.current;
    const firstElement = firstElementRef.current;
    const track = caraousalTrackRef.current;
    if (!lastElement || !track || !firstElement) {
      return;
    }
    const options: IntersectionObserverInit = {
      root: track,
      threshold: 1.0,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      const [firstElementIntersection, lastElementIntersection] = entries;
      if (
        lastElementIntersection /*Indicated first time the event is called*/
      ) {
        const isLastElementIntersecting =
          lastElementIntersection.isIntersecting;
        setCaraousalBtnVisibility((prevState) => ({
          ...prevState,
          showNextButton: !isLastElementIntersecting,
        }));
      }

      const index = firstElementIntersection.target.getAttribute("data-index");
      const isIntersecting = firstElementIntersection.isIntersecting;
      console.log({ index });
      if (index === "0") {
        setCaraousalBtnVisibility((prevState) => ({
          ...prevState,
          showPrevButton: !isIntersecting,
        }));
      } else {
        setCaraousalBtnVisibility((prevState) => ({
          ...prevState,
          showNextButton: !isIntersecting,
        }));
      }
    };
    const intersectionObserver = new IntersectionObserver(
      handleIntersection,
      options
    );
    intersectionObserver.observe(firstElement);
    intersectionObserver.observe(lastElement);
    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  const gapStyle = {
    1: "gap-1",
    2: "gap-2",
    4: "gap-4",
    6: "gap-6",
    8: "gap-8",
  };

  const nextSlide = () => {
    setCurrentActiveItemIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentActiveItemIndex((prev) => prev - 1);
  };
  return (
    <section
      className="caraousal relative"
      id="caraousal"
      aria-label="caraousal"
    >
      {caraousalBtnVisibility.showPrevButton && (
        <button
          className="caraousal-action-btn caraousal-action-btn-prev"
          aria-labelledby="previous"
          onClick={prevSlide}
        >
          <i className="fa fa-angle-left"></i>
        </button>
      )}
      {caraousalBtnVisibility.showNextButton && (
        <button
          className="caraousal-action-btn caraousal-action-btn-next"
          aria-labelledby="next"
          onClick={nextSlide}
        >
          <i className="fa fa-angle-right"></i>
        </button>
      )}

      <div
        id="caraousal-track"
        className={`${gapStyle[gap]}`}
        ref={caraousalTrackRef}
        style={
          {
            "--caraousal-gap": `calc(${gap}*4px)`,
          } as React.CSSProperties
        }
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="caraousal-item"
            style={
              {
                "--current-active-item-index": currentActiveItemIndex,
              } as React.CSSProperties
            }
            {...(index === React.Children.toArray(children).length - 1
              ? { ref: lastElementRef, "data-index": index }
              : {})}
            {...(index === 0
              ? { ref: firstElementRef, "data-index": index }
              : {})}
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
};

export { Caraousal };
