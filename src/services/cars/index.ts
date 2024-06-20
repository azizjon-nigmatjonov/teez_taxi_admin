import request from "../../utils/request";
const carService = {
  getList: (car?: any, text?: string) => request.get(`/cars${car ? `?car_class_id=${car}` : ''}${text ? `&q=${text}` : ''}`),
  getElement: (id: any) => request.get(`/cars/${id}`),
  getCarClasses: () => request.get("/car-classes"),
  getCarModel: () => request.get("/cars"),
  createElement: (data: any) => request.post("/cars", data),
  updateElement: (id: string, data: any) => request.put(`/cars/${id}`, data),
};

export default carService;
