import { lazy } from "react";
const DriverListPage = lazy(() => import("../../views/Driver/List"));

export const driverRequest = [
  {
    parent: "driver_request",
    link: "list",
    sidebar: true,
    title: "Haydovchi so'rovi",
    icon: "car",
    element: <DriverListPage />,
  },
];
