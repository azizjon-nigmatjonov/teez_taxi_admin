import request from "../../utils/request";
const permissionService = {
  deleteElement: (id: number) => request.delete(`/permissions/${id}`),
  getList: () => request.get("/permissions"),
  createElement: (data: any) => request.post('/permissions', data)
};

export default permissionService;
