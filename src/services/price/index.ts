import request from "../../utils/request";
const priceService = {
  getList: (params: any) =>
    request.get(`/distance-prices/region-price`, { params }),
  getDistanceList: (from_tashkent: number) => request.get(`/distance-prices?from_tashkent=${from_tashkent}`),
  updateDistance: (data: any) => request.put(`/distance-prices/update`, data),
  updatePrice: (data: any) =>
    request.put(`/distance-prices/region-price`, data),
  getBookingPrice: (data?: any) =>
    request.post(
      `prices/get-by-class`, data
    ),
};

export default priceService;
