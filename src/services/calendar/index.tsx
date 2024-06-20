import request from "../../utils/request";
const calendarService = {
  getList: (params?: string) => request.get(`/calendar/?${params ? `date=${params}` : ''}`),
};

export default calendarService;
