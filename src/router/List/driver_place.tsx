import { lazy } from "react";
const DriverListPage = lazy(() => import("../../views/Driver/List"));

export const driverPlacelist = [
  {
    parent: "driver_place",
    link: "main",
    sidebar: true,
    title: "haydovchi joylashuvi",
    icon: "map",
    element: <DriverListPage />,
  },
];
