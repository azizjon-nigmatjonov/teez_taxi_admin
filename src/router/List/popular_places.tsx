import { lazy } from "react";
const PopularPlaces = lazy(() => import("../../views/PopularPlaces"));

export const popularPlaceslist = [
  {
    parent: "popular_places",
    link: "list",
    sidebar: true,
    title: "mashhur joylar joylashuvi",
    icon: "location",
    element: <PopularPlaces />,
  },
];
