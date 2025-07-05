import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  bannerImage: "",
  isLoading: true,
};

export const movieSlice = createSlice({
  name: "Movie",
  initialState: initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setBannerImage: (state, action) => {
      state.bannerImage = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setBannerData, setBannerImage,setIsLoading } = movieSlice.actions;

export default movieSlice.reducer;
