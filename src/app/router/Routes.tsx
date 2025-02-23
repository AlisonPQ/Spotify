import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import TopArtists from "../../features/artists/TopArtists";

export const routes: RouteObject[] =[
  {
    path: '/',
    element: <App />
  },
  {
    path: '/topartists',
    element: <TopArtists />
  },
  {
    path: '/callback',
    element: <App />
  },
]

export const router = createBrowserRouter(routes);
