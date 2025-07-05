/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import { useEffect } from "react";
import { fetchImage, getData } from "./Api/Axios";
import { useDispatch } from "react-redux";
import {
  setBannerData,
  setBannerImage,
  setIsLoading,
} from "./store/movieslice";

const App = () => {
  const dispatch = useDispatch();

  const latestMovies = async () => {
    const res = await getData();
    dispatch(setBannerData(res));

    // return res;
  };

  const fetchImages = async () => {
    const res = await fetchImage();

    dispatch(setBannerImage(res.images.secure_base_url + "original"));
    return res;
  };

  useEffect(() => {
    latestMovies();
    fetchImages();
    dispatch(setIsLoading(false));
  }, []);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
      <MobileNav />
    </main>
  );
};
export default App;
