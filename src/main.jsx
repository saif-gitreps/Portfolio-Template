import React from "react";

import ReactDOM from "react-dom/client";

import {
   Home,
   About,
   Contact,
   User,
   Github,
   GithubStatsLoader,
} from "./components/index";

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
         <Route path="about" element={<About />} />
         <Route path="contact" element={<Contact />} />
         <Route path="user/:id" element={<User />} />
         <Route loader={GithubStatsLoader} path="github" element={<Github />} />
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
