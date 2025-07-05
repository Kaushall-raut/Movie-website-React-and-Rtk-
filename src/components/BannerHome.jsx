/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData.results);

  const bannerImage = useSelector((state) => state.movieData.bannerImage);
  const [currentImage, setImage] = useState(0);

  const handleNext = () => {
    if (currentImage < bannerImage.length - 1) {
      setImage((prev) => prev + 1);
    }
  };
  const handlePrevious = () => {
    if (currentImage > 0) {
      setImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerImage.length - 1) {
        handleNext();
      } else {
        setImage(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImage,currentImage]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData &&
          bannerData.map((value, index) => {
            return (
              <div
                key={index}
                className="min-w-full min-h-[550px] lg:min-h-full overflow-hidden relative group transition-all "
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <div className="w-full h-full">
                  <img
                    src={bannerImage + value.backdrop_path}
                    alt="banner"
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4  group-hover:lg:flex">
                  <button
                    onClick={handlePrevious}
                    className=" bg-white p-1 rounded-full text-xl z-40 text-black cursor-pointer"
                  >
                    <FaAngleLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className=" bg-white p-1 rounded-full text-xl z-40 text-black cursor-pointer"
                  >
                    <FaAngleRight />
                  </button>
                </div>
                <div className="absolute h-full w-full top-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>

                <div className=" container mx-auto ">
                  <div className=" w-full absolute bottom-0 max-w-md px-8">
                    <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                      {value.title || value.name}
                    </h2>
                    <p className="text-ellipsis line-clamp-3 my-2">
                      {value.overview}
                    </p>
                    <div className="flex items-center gap-4 ">
                      <p>Rating: {Number(value.vote_average.toFixed(1))}+</p>
                      <span>|</span>
                      <p>View: {Number(value.popularity.toFixed(0))}</p>
                    </div>
                    <button className="bg-white font-bold text-black rounded mt-4 px-4 py-2 cursor-pointer hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default BannerHome;
