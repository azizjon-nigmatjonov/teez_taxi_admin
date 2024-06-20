import request from "../../utils/request";

const dashboardService = {
  getWidgets: () => request(`/dashboard/widgets`),
  getSocialWidgets: (data: any) =>
    request(
      `/dashboard/social-widget${
        data?.created_at ? `?created_at=${data.created_at}` : ""
      }`
    ),
  getPessengersFromCity: (
    year: string,
    selectMonth: number | null,
    countWeek: number | null
  ) =>
    request(
      `/dashboard/passenger-from-tashkent?year=${year}${
        selectMonth ? `&month=${selectMonth}` : ""
      }${countWeek ? `&week=${countWeek}` : ""}&from_tashkent=${1}`
    ),

  getPessengersFromVilage: (
    yearPessengerVilage: string,
    month: number | null,
    countWeekPessengerVilage: number | null
  ) =>
    request(
      `/dashboard/passenger-from-tashkent?year=${yearPessengerVilage}${
        month ? `&month=${month}` : ""
      }${
        countWeekPessengerVilage ? `&week=${countWeekPessengerVilage}` : ""
      }&from_tashkent=${0}`
    ),

  getDriverTripsFromCity: (
    yearDrivers: string,
    month: number | null,
    countWeekDrivers: number | null
  ) =>
    request(
      `/dashboard/driver-trips?year=${yearDrivers}${
        month ? `&month=${month}` : ""
      }${
        countWeekDrivers ? `&week=${countWeekDrivers}` : ""
      }&from_tashkent=${1}`
    ),
  getDriverTripsFromVilage: (
    yearDriversVilage: string,
    selectMonthDriversVilage: number | null,
    countWeekDriversVilage: any
  ) =>
    request(
      `/dashboard/driver-trips?year=${yearDriversVilage}${
        selectMonthDriversVilage ? `&month=${selectMonthDriversVilage}` : ""
      }${
        countWeekDriversVilage ? `&week=${countWeekDriversVilage}` : ""
      } &from_tashkent=${0}`
    ),
};

export default dashboardService;
