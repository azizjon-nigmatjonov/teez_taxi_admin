import { lazy } from "react";
const DriverListPage = lazy(() => import("../../views/Driver/List"));

export const popularPlaceslist = [
  {
    parent: "popular_places",
    link: "list",
    sidebar: true,
    title: "mashhur joylar joylashuvi",
    icon: "location",
    element: <DriverListPage />,
  },
];
