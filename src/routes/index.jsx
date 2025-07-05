///! it is good practises to define routes in a seperate file which makes your code more clean and scalable  you can also define ypur routes in app file if you are creating a small level project

import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import DetailsPage from "../pages/DetailsPage.jsx";
import ExplorePage from "../pages/ExplorePage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Search from "../pages/Search.jsx";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":ExplorePage/:id",
        element: <DetailsPage />,
      },
      {
        path: ":ExplorePage",
        element: <ExplorePage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
