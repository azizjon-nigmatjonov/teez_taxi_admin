import request from "../../utils/request";
const adminService = {
  getList: (data: any) => request.get(`/admins?q=${data?.q}&page=${data.page}`),
  createAdmin: (data: any) => request.post("/admins", data),
  updateAdmin: (data: any, id: string) => request.put(`/admins/${id}`, data),
  deleteAdmin: (id: string) => request.delete(`/admins/${id}`),
  getAdmin: (id: string) => request.get(`/admins/${id}`),
};

export default adminService;
