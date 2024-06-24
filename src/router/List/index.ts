import { dashboardList } from "./dashboard";
import { driverList } from "./driver";
import { driverPlacelist } from "./driver_place";
import { driverRequest } from "./driver_request";
import { orderList } from "./order";
import { pageList } from "./pages";
import { passengerList } from "./passenger";
import { popularPlaceslist } from "./popular_places";
import { regionList } from "./region";
import { serviceList } from "./service";
import { settingList } from "./settings";

export const routeList = [
  ...orderList,
  ...settingList,
  ...dashboardList,
  ...passengerList,
  ...regionList,
  ...serviceList,
  ...driverList,
  ...driverRequest,
  ...pageList,
  ...popularPlaceslist,
  ...driverPlacelist
];
