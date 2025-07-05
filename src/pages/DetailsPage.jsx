import { useParams } from "react-router-dom";
import { castDetails, details, recommend, similarData } from "../Api/Axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HorizontalCard from "../components/HorizontalCard";
import moment from "moment";
import Video from "../components/Video";

function DetailsPage() {
  const param = useParams();
  const [data, setDetails] = useState([]);
  const [castData, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [recommendData, setRecommend] = useState([]);
  const [loading, isLoading] = useState(true);
  const [play, setPlay] = useState(false);
  const [videoId, setId] = useState("");

  const bannerImage = useSelector((state) => state.movieData.bannerImage);

  const fetchDetails = async () => {
    const res = await details(param?.ExplorePage, param?.id);
    const cast = await castDetails(param?.ExplorePage, param?.id);

    setDetails(res);
    setCast(cast);
    isLoading(false);
  };

  const fetchSimilar = async () => {
    const res = await similarData(param?.ExplorePage, param?.id);
    const rec = await recommend(param?.ExplorePage, param?.id);
    setSimilar(res);
    setRecommend(rec);
  };

  useEffect(() => {
    fetchDetails();
    fetchSimilar();
  }, [param?.id]);

  const duration = (Number(data.runtime) / 60).toFixed(1).split(".");

  const writer = castData?.crew
    ?.filter((write) => write?.known_for_department === "Writing")
    ?.map((write) => write.name)
    ?.join(" , ");

  const handlePlay = ( data ) => {
    console.log("he");
    
    setId(data.id);
    setPlay(true);
  };

  if (loading) {
    return (
      <div className="pt-16 flex justify-center items-center h-full w-full">
        <h1 className="text-5xl ">Loading ...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full h-[310px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={bannerImage + data.backdrop_path}
            alt="image"
            className="h-full object-cover w-full"
          />
        </div>
        <div className="absolute bg-gradient-to-t from-neutral-900/100 to-transparent w-full h-full top-0"></div>
      </div>
      <div className="container mx-auto px-8 py-16 lg:py-0 flex gap-5 lg:gap-10 flex-col lg:flex-row ">
        <div className="lg:-mt-28 lg:ml-0 relative mx-auto lg:mx-0 w-fit min-w-60">
          <img
            src={bannerImage + data.poster_path}
            alt="image"
            className="h-80 object-cover w-60 rounded"
          />
          <button
            onClick={() => handlePlay(data)}
            className="bg-white text-black w-full py-2 font-bold rounded mt-3 text-center text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all"
          >
            Play Now
          </button>
        </div>
        <div>
          <h2 className="text-2xl  lg:text-4xl font-bold ">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-300 ">{data?.tagline}</p>
          <hr className="my-1 text-neutral-700" />
          <div className="flex items-center  gap-3 mb-2">
            <p>Rating :{Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>Views :{Number(data?.vote_count)}</p>
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}min
            </p>
          </div>
          <hr className="my-1 text-neutral-700" />
          <div>
            <h3 className="text-2xl font-bold my-2">OverView</h3>
            <p>{data?.overview}</p>
            <hr className="my-1 text-neutral-700" />
            <div className="flex items-center gap-3 my-3 text-center">
              <p>Status : {data.status}</p>
              <span>|</span>
              <p>
                Released Data:{" "}
                {moment(data?.released_data).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>Revenue :{data.revenue} Rs</p>
            </div>
            <hr className="my-1 text-neutral-700" />
          </div>
          <div>
            <p>
              <span className="text-white">Director </span> :{" "}
              {castData && castData?.crew[0]?.name}
            </p>
            <hr className="my-1 text-neutral-700" />
            <p>
              <span className="text-white">Writer </span> : {writer}
            </p>
          </div>
          <hr className="my-1 text-neutral-700" />
          <div className=" container mx-auto ">
            <h2 className="text-lg lg:text-3xl font-bold  my-3 mb-4">
              cast :{" "}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
              {castData.cast
                .filter((value) => value?.profile_path)
                .map((value, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <img
                          src={bannerImage + value?.profile_path}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      </div>
                      <p className="font-bold text-center text-sm">
                        {value?.name}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <HorizontalCard
          bannerData={similar}
          heading={"Similar " + param?.ExplorePage}
          media_type={param?.ExplorePage}
        />
        <HorizontalCard
          bannerData={recommendData}
          heading={"Recommended " + param?.ExplorePage}
          media_type={param?.ExplorePage}
        />
      </div>

      {play && <Video data={videoId} close={()=>setPlay(false)} media_type={param?.ExplorePage}/>}
    </div>
  );
}

export default DetailsPage;
