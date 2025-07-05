import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieslice";

export const store = configureStore({
  reducer: { movieData: movieSlice.reducer },
});
