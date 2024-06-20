import { lazy } from "react";
const NewOrder = lazy(() => import("../../views/Orders/NewOrder"));

export const orderList = [
  {
    parent: "orders",
    link: "new_order",
    sidebar: true,
    title: "Yangi Buyurtma",
    icon: "plus",
    element: <NewOrder />
  },
];
