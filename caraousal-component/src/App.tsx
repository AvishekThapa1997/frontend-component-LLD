import { forwardRef, PropsWithChildren, useState } from "react";
// import Slider from "react-slick";
import { Caraousal } from "./Caraousal";

const App = () => {
  const items = Array.from({ length: 20 }).fill("");
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Caraousal gap={2}>
        {items.map((_, index) => (
          <Item key={index}>{index}</Item>
        ))}
      </Caraousal>
    </div>
  );
};

const Item = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div className="space-y-4 p-3 border rounded overflow-hidden" ref={ref}>
        <Image />
        <div className="space-y-2">
          <h1>Title - {children}</h1>
          <p className="line-clamp-4 text-sm font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium doloribus culpa esse, aut exercitationem quidem
            obcaecati unde quas repellendus voluptatem enim incidunt nihil.
            Debitis voluptates tenetur impedit quae culpa cumque.
          </p>
        </div>
      </div>
    );
  }
);

const Image = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="w-full aspect-image relative inset-0 rounded overflow-hidden">
      {!loaded && (
        <div className="animate-pulse bg-gray-200 z-20 absolute h-full w-full"></div>
      )}
      <img
        src="https://plus.unsplash.com/premium_photo-1733864821625-8c5914eb183e?w-256"
        sizes="(max-width: 768px) 256px"
        width={256}
        className={`aspect-video ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </div>
  );
};
export default App;
