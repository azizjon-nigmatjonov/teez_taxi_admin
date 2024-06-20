import { lazy } from "react";
const DriverListPage = lazy(() => import("../../views/Driver/List"));
const WaitingDriver = lazy(() => import("../../views/Driver/Waiting"));
const IncomeDriver = lazy(() => import("../../views/Driver/Income"));
const DriverNews = lazy(() => import("../../views/Driver/News"));
export const driverList = [
  {
    parent: "driver",
    link: "list",
    sidebar: true,
    title: "Haydovchi ro'yxati",
    icon: "list",
    parent_icon: "taxi",
    element: <DriverListPage />,
  },
  {
    parent: "driver",
    link: "waiting",
    sidebar: true,
    title: "Kitilayotgan Haydovchi",
    icon: "waiting",
    element: <WaitingDriver />,
  },
  {
    parent: "driver",
    link: "income",
    sidebar: true,
    title: "Haydovchi daromadi",
    icon: "income",
    element: <IncomeDriver />,
  },
  {
    parent: "driver",
    link: "news",
    sidebar: true,
    title: "Haydovchi yangiliklari",
    icon: "news",
    element: <DriverNews />,
  },
];
