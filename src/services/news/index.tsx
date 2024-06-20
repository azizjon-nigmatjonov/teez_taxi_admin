import request from "../../utils/request";
export const newsService = {
  getList: (data: any) => request.get(`/blogs?page=${data?.page}`),
  createNews: (data: any) => request.post("/blogs", data),
  updateNew: (data: any, id: any) => request.put(`/blogs/${id}`, data),
  getNew: (id: any) => request.get(`/blogs/${id}`),
  deleteNew: (id: any) => request.delete(`/blogs/${id}`),
  createNotification: (data: any) => request.post("/notifications", data),
  getNotification: (id: string) => request.get(`/notification/${id}`),
};
