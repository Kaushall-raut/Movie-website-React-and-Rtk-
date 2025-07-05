/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`, //! bearer meaning - This request is being made by someone who holds (bears) a token that proves their identity
  },
});

export const getData = async () => {
  try {
    const res = await api.get("/trending/all/week");
    // console.log(res.data.results);

    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchImage = async () => {
  try {
    const res = await api.get("/configuration");
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const playingNow = async () => {
  try {
    const res = await api.get("/movie/now_playing");
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const TopRated = async () => {
  try {
    const res = await api.get("/movie/top_rated");

    return res.data.results;
  } catch (error) {
    console.log("error", error);
  }
};
export const Popular = async () => {
  try {
    const res = await api.get("/movie/popular");

    return res.data.results;
  } catch (error) {
    console.log("error", error);
  }
};

export const discover = async (data, pageNumber) => {
  try {
    const res = await api.get(`/discover/${data.ExplorePage}`, {
      params: {
        page: pageNumber,
      },
    });

    console.log("discover", res.data);

    return res.data.results;
  } catch (error) {
    console.log("error", error);
  }
};

export const searchData = async (query = "", pageNumber) => {
  try {
    const res = await api.get(`/search/multi`, {
      params: {
        query: query,
        page: pageNumber,
      },
    });

    return res.data.results;
  } catch (error) {
    console.log("error", error);
  }
};

export const details = async (type, id) => {
  try {
    const res = await api.get(`/${type}/${id}`);

    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};
export const castDetails = async (type, id) => {
  try {
    const res = await api.get(`/${type}/${id}/credits`);

    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};
export const similarData = async (type, id) => {
  try {
    const res = await api.get(`/${type}/${id}/similar`);

    return res.data.results;
  } catch (error) {
    console.log("error", error);
  }
};
export const recommend = async (type, id) => {
  try {
    const res = await api.get(`/${type}/${id}/recommendations`);

    return res.data.results;
  } catch (error) {
    console.log("error", error);
  }
};
export const video = async (type, id) => {
  try {
    const res = await api.get(`/${type}/${id}/videos`);
  

    return res.data.results;
  } catch (error) {
    console.log("error", error);
  }
};
