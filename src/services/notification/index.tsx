import request from "../../utils/request";
export const notificationService = {
  getList: (data: any) => request.get(`/notifications?page=${data?.page}`),
  createNotification: (data: any) => request.post("/notifications", data),
  getNotification: (id: string) => request.get(`/notification/${id}`),
};
