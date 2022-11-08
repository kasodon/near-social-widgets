import React from "react";
const Landing = React.lazy(() => import("../components/landing/landing"));
const Meme = React.lazy(() => import("../components/meme/meme"));
const Profile = React.lazy(() => import("../components/profile/profile"));

var indexRoutes = [
  { path: "/", name: "Landing Page", component: <Landing /> },
  { path: "/meme", name: "Landing Page", component: <Meme /> },
  { path: "/profile", name: "Landing Page", component: <Profile /> },
];

export default indexRoutes;
