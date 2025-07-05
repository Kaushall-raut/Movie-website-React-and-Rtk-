/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { discover } from "../Api/Axios";
import Card from "../components/Card";

const ExplorePage = () => {
  const pageName = useParams();

  const [exploreData, setData] = useState([]);
  const [page, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const FetchExploreData = async () => {
    const res = await discover(pageName, page);

    setData((prev) => {
      return [...prev, ...res];
    });

    setTotalPages(res.data.total_pages);
  };

  useEffect(() => {
    setPageNumber(1);
    setData([]);
    FetchExploreData();
  }, [page, pageName.ExplorePage]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="py-16 ">
      <div className="container mx-auto">
        <h2 className="capitalize text-lg font-semibold my-2 lg:text-2xl">
          Popular {pageName.ExplorePage} show
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {exploreData.map((value, index) => {
            return (
              <Card
                data={value}
                key={index}
                media_type={pageName.ExplorePage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ExplorePage;
