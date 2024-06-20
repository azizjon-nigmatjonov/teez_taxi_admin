import request from "../../utils/request";
const versionService = {
  getList: () => request.get("/app-versions"),
};

export default versionService;
