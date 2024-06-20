import request from "../../utils/request";
const partnerService = {
  getList: () => request.get("/partners"),
  getElement: (id: string) => request.get(`partners/${id}`),
  createElement: (data: any) => request.post(`partners`, data),
  updateElement: (id: string, data: any) => request.put(`partners/${id}`, data),
  deleteElement: (id: any) => request.delete(`partners/${id}`)
};

export default partnerService;
