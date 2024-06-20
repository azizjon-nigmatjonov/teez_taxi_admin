import request from "../../utils/request";
const coinService = {
  getList: (id?: string) => request.get(`/passengers/${id}/coin-history`),
};

export default coinService;
