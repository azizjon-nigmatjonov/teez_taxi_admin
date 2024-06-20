import request from "../../utils/request";
export const routeService = {
  deleteElement: (id: number) => request.delete(`/permission-route/${id}`),
  getList: () => request.get("/permission-route"),
  createElement: (data: any) => request.post("/permission-route", data),
};
