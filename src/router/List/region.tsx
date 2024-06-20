import { lazy } from "react";

const RegionListPage = lazy(() => import("../../views/Region/List"));
const RegionAdd = lazy(() => import("../../views/Region/Add"));

export const regionList = [
  {
    parent: "region",
    link: "list",
    sidebar: true,
    title: "Viloyat ro'yxati",
    icon: "list",
    parent_icon: "earth",
    element: <RegionListPage />,
  },
  {
    parent: "region",
    link: "add",
    sidebar: false,
    title: "Viloyat qo'shish",
    icon: "plus",
    element: <RegionAdd />,
  },
];
