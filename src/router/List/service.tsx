import { lazy } from "react";

const ServiceListPage = lazy(() => import("../../views/Service/List"));

export const serviceList = [
  {
    parent: "service",
    link: "list",
    sidebar: true,
    title: "Xizmat ro'yxati",
    icon: "service",
    parent_icon: "car",
    element: <ServiceListPage />,
  },
  {
    parent: "service",
    link: "add",
    sidebar: false,
    title: "Xizmat qo'shish",
    icon: "plus",
    element: <ServiceListPage />,
  },
];
