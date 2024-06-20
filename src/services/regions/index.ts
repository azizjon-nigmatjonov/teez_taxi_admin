import request from "../../utils/request";
const regionService = {
  getList: () => request.get("/regions"),
  addRegion: (data: any) => request.post("/regions", data),
  editRegion: (data: any) => request.put(`/regions/${data.id}`, data),
  getRegion: (id: string) => request.get(`/regions/${id}`),
  getDistrict: (id: string) => request.get(`/districts?region_id=${id}`),
  getDistrictInfo: (id: string) => request.get(`/districts/${id}`),
  addDistrict: (data: any) => request.post(`/districts`, data),
  editDistrict: (data: any) => request.put(`/districts/${data.id}`, data),
  getVillage: (id: string) => request.get(`/villages?district_id=${id}`),
  getVillageInfo: (id: string) => request.get(`/villages/${id}`),
  addVillage: (data: any) =>
    request.post(`/villages`, data),
  editVillage: (data: any) => request.put(`/villages/${data.id}`, data),
};

export default regionService;
