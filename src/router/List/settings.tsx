import { lazy } from "react";
const WebsiteSettings = lazy(() => import("../../views/Settings/Website"));

export const settingList = [
  {
    parent: "settings",
    link: "website",
    sidebar: true,
    title: "Website sozlamalari",
    icon: "settings",
    parent_icon: "price_control",
    element: <WebsiteSettings />,
  },
  {
    parent: "settings",
    link: "test",
    sidebar: true,
    title: "Test",
    icon: "price_control",
    element: "test",
  },
  {
    parent: "settings",
    link: "additional_functions",
    sidebar: false,
    title: "Qo'shimcha funksiyalar",
    icon: "",
    element: "",
    permissions: ["notification_sound", "profile_info", "show_notification"],
  },
];
