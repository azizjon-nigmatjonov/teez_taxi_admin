import { LockIcon, ListIcon, NewsIcon } from "./Svg/Sidebar";
import AddIcon from "@mui/icons-material/Add";
import CottageIcon from "@mui/icons-material/Cottage";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LanguageIcon from "@mui/icons-material/Language";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DescriptionIcon from '@mui/icons-material/Description';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { DriverIcon } from "./Svg";
import GroupIcon from '@mui/icons-material/Group';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import HistoryIcon from '@mui/icons-material/History';

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
    name: "car",
    component: AirportShuttleIcon
  },
  {
    name: "page",
    component: AutoStoriesIcon
  },
  {
    name: "description",
    component: DescriptionIcon
  },
  {
    name: "lock",
    component: LockOpenIcon
  },
  {
    name: "location",
    component: LocationOnIcon
  },
  {
    name: "map",
    component: MapIcon
  },
  {
    name: "settings",
    component: SettingsIcon
  },
  {
    name: "price_control",
    component: LockIcon,
  },
  {
    name: "earn",
    component: AttachMoneyIcon
  },
  {
    name: "driver",
    component: DriverIcon
  },
  {
    name: "passengers",
    component: GroupIcon
  },
  {
    name: "trips",
    component: ModeOfTravelIcon
  },
  {
    name: "history_clock",
    component: HistoryIcon
  }
];
