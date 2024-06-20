import request from "../../utils/request";
const phoneCodeService = {
  getList: (data: any) => request.get(`/sms-confirmation${data?.q ? `?q=${data?.q}` : ''}`)
};

export default phoneCodeService;
