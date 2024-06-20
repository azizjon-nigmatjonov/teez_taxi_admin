import request from "../../utils/request";
const roleService = {
  deleteElement: (id: number) => request.delete(`/roles/${id}`),
  getElement: (id: number) => request.get(`/roles/${id}`),
  getList: () => request.get("/roles"),
  createElement: (data: any) => request.post("/roles", data),
  updateElement: (data: any, id: string) => request.put(`/roles/${id}`, data),
};

export default roleService;
