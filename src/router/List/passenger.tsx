import { lazy } from "react";
const PassengerListPage = lazy(() => import("../../views/Passenger/List"));
const PassengerNews = lazy(() => import("../../views/Passenger/News"));

export const passengerList = [
  {
    parent: "passenger",
    link: "list",
    sidebar: true,
    title: "Yo'lovchi ro'yxati",
    icon: "list",
    parent_icon: "passenger",
    element: <PassengerListPage />,
  },
  {
    parent: "passenger",
    link: "news",
    sidebar: true,
    title: "Yo'lovchi Yangiliklari",
    icon: "news",
    parent_icon: "passenger",
    element: <PassengerNews />,
  },
];
