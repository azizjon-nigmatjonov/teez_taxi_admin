import request from "../../utils/request";
const noteService = {
  postNote: (data: any) => request.post("/user-note", data),
  getList: (id: string) => request.get(`/user-note?user_id=${id}`),
  deleteNote: (id: number) => request.delete(`/user-note/${id}`),
  updateNote: (data: any) => request.put(`/user-note/${data.id}`, data?.data),
};

export default noteService;
