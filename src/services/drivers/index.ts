import request from "../../utils/request";
import requestForm from "../../utils/requestFormdata";

const driverService = {
  getAllDriver: (q: string) => request.get(`/drivers-all?q=${q}`),
  getList: (params: any) =>
    request.get(
      `/drivers?perPage=10${params.page ? `&page=${params.page}` : ""}${
        params.birthday ? `&birthday=${params.birthday}` : ""
      }${params.q ? `&q=${params.q}` : ""} ${
        params?.version ? `&version=${params.version}` : ""
      }${params.gender ? `&gender=${params.gender}` : ""}${
        params.created_at ? `&created_at=${params.created_at}` : ""
      }${params.region ? `&region_id=${params.region}` : ""}${
        params.device_type ? `&device_type=${params.device_type}` : ""
      }${params.car_id ? `&car_id=${params.car_id}` : ""} ${
        params.status ? `&status=${params.status}` : ""
      } 
      ${
        params.is_paid || params?.is_paid === 0
          ? `&is_paid=${params.is_paid}`
          : ""
      }${
        params.ballance?.length
          ? `&balance=${params.balance[0]},${params.balance[1]}`
          : ""
      }`
    ),
  createElement: (data: any) => requestForm.post("/drivers", data),
  getActives: (params: any) =>
    request.get(
      `/drivers-popular${params.page ? `?page=${params.page || 1}` : ""}${
        params.q ? `&q=${params.q}` : ""
      }${params.region_id ? `&region_id=${params.region_id}` : ""}${
        params.gender ? `&gender=${params.gender}` : ""
      }${params.car_model_id ? `&car_model_id=${params.car_model_id}` : ""}${
        params.birthday ? `&birthday=${params.birthday}` : ""
      }${params.status ? `&status=${params.status}` : ""}`
    ),
  updateElement: (id: any, data: any) =>
    requestForm.post(`/drivers/${id}`, data),
  updateCarInfo: (id: any, data: any) => request.patch(`/drivers/${id}`, data),
  deleteElement: (id: any) => request.delete(`/drivers/${id}`),
  getElement: (id: string | undefined) => request.get(`/drivers/${id}`),
  getDriverTripHistory: (data: any | undefined) =>
    request.get(
      `drivers/${data.id}/trips?${data.page ? `page=${data.page}` : ""}`
    ),
  getWidgets: (data: any) =>
    request.get(
      `statistics/drivers/widgets${data.start ? `?start=${data.start}` : ""}${
        data.end ? `&end=${data.end}` : ""
      }`
    ),
  getDriversGraph: (data?: any) =>
    request.get(
      `statistics/drivers/graph?${data?.year ? `year=${data.year}` : ""}${
        data?.month ? `&month=${data?.month}` : ""
      }${data.week ? `&week=${data.week}` : ""}`
    ),
  getUserRegion: () => request.get("statistics/drivers/users-by-region"),
  getDriverBallance: (data?: any) =>
    request.get(
      `drivers/${data.id}/transactions?${data.page ? `page=${data.page}` : ""}`
    ),
  getDriverBallanceCard: (data?: any) =>
    request.get(`drivers/${data.id}/balance?created_at=${data.created_at}`),
  getFotoContols: (data?: any) =>
    request.get(
      `stickers?${data.page ? `page=${data.page}` : ""}${
        data.perPage ? `&perPage=${data.perPage}` : ""
      }${data.q ? `&q=${data.q}` : ""}`
    ),
  getFotoControlUser: (id?: string) => request.get(`stickers/${id}`),
  updateFotoControl: (id: any, data: any) =>
    request.put(`stickers/${id}`, data),
  topUpBallance: (data: any) =>
    request.post(`drivers/${data.id}/top-up-balance`, data.balance),
  getActiveDriverCount: () => request.get("/trips/all-status"),
};

export default driverService;
