import { lazy } from "react";
const PassengerListPage = lazy(() => import("../../views/Passenger/List"));
const PassengerNews = lazy(() => import("../../views/Passenger/News"));
const PassengerInner = lazy(
  () => import("../../views/Passenger/List/SinglePage")
);

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
    element: <PassengerNews />,
  },
  {
    parent: "passenger",
    link: "list/create",
    sidebar: false,
    title: "Yo'lovchi qo'shish",
    icon: "",
    element: <PassengerInner />,
  },
  {
    parent: "passenger",
    link: "list/:id",
    sidebar: false,
    title: "Yo'lovchi tahrirlash",
    icon: "",
    element: <PassengerInner />,
  },
];
