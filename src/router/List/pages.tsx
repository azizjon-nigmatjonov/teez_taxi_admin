import { lazy } from "react";
const DriverListPage = lazy(() => import("../../views/Driver/List"));

export const pageList = [
  {
    parent: "pages",
    link: "requirement",
    sidebar: true,
    title: "Shartlar va holatlar",
    icon: "car",
    parent_icon: "description",
    element: <DriverListPage />,
  },
  {
    parent: "pages",
    link: "private",
    sidebar: true,
    title: "maxfiylik siyosati",
    icon: "lock",
    element: <DriverListPage />,
  },
];
