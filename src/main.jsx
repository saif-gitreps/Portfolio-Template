import React from "react";

import ReactDOM from "react-dom/client";

import { Home, Github, GithubReposLoader } from "./components/index";

import "./index.css";

import {
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         <Route path="" element={<Home />} />
         <Route loader={GithubReposLoader} path="github" element={<Github />} />
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
