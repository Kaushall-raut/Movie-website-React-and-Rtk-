import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Card from "./Card";

const HorizontalCard = ({ bannerData, heading, trending,media_type }) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };

  const handlePrevious = () => {
    containerRef.current.scrollLeft -= 300;
  };
  return (
    <div className="container mx-auto px-8 my-10">
      <h2 className="font-bold text-xl lg:text-2xl mb-3 text-white capitalize">
        {heading}
      </h2>

      <div className=" relative">
        <div
          ref={containerRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] gap-12 grid-flow-col overflow-x-scroll overflow-hidden z-10 relative scroll-smooth transition-all scrollBar-none "
        >
          {bannerData?.map((current, index) => {
            return (
              <Card
                key={current.id}
                data={current}
                index={index}
                trending={trending}
                media_type={media_type}
              />
            );
          })}
        </div>
        <div className="absolute top-0 hidden lg:flex justify-between  w-full items-center h-full">
          <button
            onClick={handlePrevious}
            className="bg-white  p-1 cursor-pointer  text-black rounded-full -ml-3 z-10"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNext}
            className="bg-white  p-1 cursor-pointer  text-black rounded-full mr-7 z-10"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
