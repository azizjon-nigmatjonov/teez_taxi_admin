import request from "../../utils/request";




const mapService = {
    getList: () => request.get(`/map`),
    getElement: (id: string) => request.get(`/map/${id}`),
    getRadius: (lat: number, lng: number, radius: number, page: number) => request.get(`/map?lng=${lng}&lat=${lat}&radius=${radius}&page=${page}`),
    getActive: (lat: number, lng: number, radius: number) => request.get(`/map?status=pending&lng=${lng}&lat=${lat}&radius=${radius}`),
    getTravellers: (lat: number, lng: number, radius: number) => request.get(`/map?status=on-way&lng=${lng}&lat=${lat}&radius=${radius}`),
    getCarClass: (lat: number, lng: number, radius: number, id: number) => request.get(`/map?car_class_id=${id}&lng=${lng}&lat=${lat}&radius=${radius}`),

    getCars: (params: any) => request.get(`/map`, { params })

}

export default mapService;