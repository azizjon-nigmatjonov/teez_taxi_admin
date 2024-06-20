import request from "../../utils/request";
const reasonService = {
  postReason: (data: any) => request.put("/call-reason", data),
};

export default reasonService;
