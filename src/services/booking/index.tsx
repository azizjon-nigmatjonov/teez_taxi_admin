import request from "../../utils/request";
const bookingService = {
  getList: (id: string) => request.get(`/booking/${id}`),
};

export default bookingService;
