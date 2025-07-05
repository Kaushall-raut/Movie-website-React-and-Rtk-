import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { playingNow, Popular, TopRated } from "../Api/Axios";
import HorizontalCard from "../components/HorizontalCard";

const Home = () => {
  const loading = useSelector((state) => state.movieData.isLoading);
  const bannerData = useSelector((state) => state.movieData.bannerData.results);

  const [nowPlayingData, setNowPlayingData] = useState([]);

  const [topRated, setTopRated] = useState([]);
  const [popular, setpopular] = useState([]);

  const fetchNowPlayingData = async () => {
    const res = await playingNow();
    setNowPlayingData(res);
  };

  const HighRated = async () => {
    const res = await TopRated();
    setTopRated(res);
  };
  const fetchpopular = async () => {
    const res = await Popular();
    setpopular(res);
  };

  useEffect(() => {
    fetchNowPlayingData();
    HighRated();
    fetchpopular();
  }, []);

  if (loading) {
    return (
      <section className="w-full h-screen flex items-center justify-center relative">
        <h1 className="text-4xl">Loading ...</h1>
      </section>
    );
  }

  return (
    <div>
      <BannerHome />
      <HorizontalCard
        bannerData={bannerData}
        heading={"Trending Show"}
        trending={true}
      />
      <HorizontalCard bannerData={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalCard bannerData={topRated} heading={"Top Rated"} media_type={"movie"}/>
      <HorizontalCard bannerData={popular} heading={"Popular"} media_type={"tv"}/>
    </div>
  );
};
export default Home;
