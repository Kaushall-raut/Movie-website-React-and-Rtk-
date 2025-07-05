import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchData } from "../Api/Axios";
import Card from "../components/Card";

const Search = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const query = location?.search?.slice(3);

  const navigate = useNavigate();

  const FetchSearchData = async () => {
    const res = await searchData(location?.search?.slice(3), page);
    console.log(res);

    setData((prev) => {
      return [...prev, ...res];
    });
  };
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (query) {
      setPage(1);
      setData([]);
      FetchSearchData();
    }
  }, [location.search]);

  useEffect(() => {
    if (query) {
      FetchSearchData();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">
      <div className="lg:hidden my-2 mx-1 sticky top-18 z-50">
        <input
          className="px-4 py-1 text-lg w-full bg-white  rounded-full text-neutral-900"
          type="text"
          value={query?.split("20%")?.join(" ")}
          placeholder="Search here ..."
          onChange={(e) => navigate(`search?q=${e.target.value}`)}
        />
      </div>
      <div className="container  mx-auto ">
        <h2 className="capitalize text-lg font-semibold my-2 lg:text-2xl">
          Search Result
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((value, index) => {
            return (
              <Card data={value} key={index} media_type={value.media_type} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Search;
