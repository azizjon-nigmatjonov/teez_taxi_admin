import request from "../../utils/request";
const smsService = {
  getList: (data: any) => request.get(`/mailing/detailing?page=${data?.page}`),
  createElement: (data: any) => request.post("/mailing/send", { ...data }),
  getReports: (data: any) => request.get(`/mailing/detailing?page=${data.page}&perPage=${data.perPage}`)
};

export default smsService;
