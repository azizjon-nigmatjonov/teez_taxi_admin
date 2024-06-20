import { LockIcon, ListIcon, NewsIcon } from "./Svg/Sidebar";
import AddIcon from "@mui/icons-material/Add";
import CottageIcon from "@mui/icons-material/Cottage";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LanguageIcon from "@mui/icons-material/Language";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export const iconsList = [
  {
    name: "dashboard",
    component: CottageIcon,
  },
  {
    name: "plus",
    component: AddIcon,
  },
  {
    name: "passenger",
    component: AccessibilityNewIcon,
  },
  {
    name: "list",
    component: ListIcon,
  },
  {
    name: "news",
    component: NewsIcon,
  },
  {
    name: "earth",
    component: LanguageIcon,
  },
  {
    name: "service",
    component: HomeRepairServiceIcon,
  },
  {
    name: "taxi",
    component: LocalTaxiIcon,
  },
  {
    name: "waiting",
    component: HistoryToggleOffIcon,
  },
  {
    name: "income",
    component: MonetizationOnIcon,
  },
  {
    name: "price_control",
    component: LockIcon,
  },
];
