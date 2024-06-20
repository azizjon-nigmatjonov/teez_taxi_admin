import request from "../../utils/request";
import requestForm from '../../utils/requestFormdata'
const passengerService = {
  getList: (data: any) =>
    request.get(
      `/passengers?page=${data.page}&perPage=${data.perPage}${data.q ? `&q=${data.q}` : ""}${data.region_id ? `&region_id=${data.region_id}` : ""}${data.device_type ? `&device_type=${data.device_type}` : ''}${data.version ? `&version=${data.version}` : ''}${data.created_at ? `&created_at=${data.created_at}` : ''}${data.gender? `&gender=${data.gender}`:''}`
    ),
  createElement: (data: any) => request.post("/passengers", { ...data }),
  deleteElement: (id: any) => requestForm.delete(`passengers/${id}`),
  updateElement: (id: any, data: any) =>
    request.put(`passengers/${id}`, { ...data }),
  getElement: (id: any) => request.get(`passengers/${id}`),
  getActivePassenger: (id: string) => request.get(`/passengers-popular/${id}`),
  getActivePassengers: (params: any) =>
    request.get(
      `/passengers-popular${params.page ? `?page=${params.page || 1}` : ""
      }${params.q ? `&q=${params.q}` : ""}${params?.status ? `&status=${params.status}` : ''}${params.birthday ? `&birthday=${params.birthday}` : ''}${params.reason || params?.reason == 0 ?  `&reason_id=${params.reason}`: ''}`
    ),
  getTicket: (params: any) => request.get(`/passengers-tickets/${params.id}${params.page ? `?page=${params.page}` : '1'}${params.perPage ? `&perPage=${params.perPage}` : ''}${params?.status ? `&status=${params.status}` : ''}`),
  activePassengerWidget: () => request.get('/passenger-statistics/booking-widgets'),
  bookingTrip: (data: any) => request.post('/booking', data)
};

export default passengerService;
