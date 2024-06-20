import { dashboardList } from "./dashboard";
import { driverList } from "./driver";
import { orderList } from "./order";
import { passengerList } from "./passenger";
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
];
