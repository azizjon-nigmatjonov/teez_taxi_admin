import request from "../../utils/request";

// const fileService = {
//   upload: (data: any) =>
//     request.post("https://cdn.akataxi.uz/api/media/upload", data),
//   getImage: (id: number | string) =>
//     request.get(`https://cdn.akataxi.uz/media/get-image/${id}`),
// };

// export default fileService;

import axios from "axios";
import { store } from "../../store/index";
const uploadUrl = import.meta.env.VITE_IMAGE_UPLOAD_URL;

const token = store.getState().auth.token;
const fileService = {
  upload: (data: any) =>
    axios.post(uploadUrl, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }),
  getImage: (id: number | string) =>
    axios.get(`${uploadUrl}/${id}`),
  getTrips: (data?: any) =>
    request.get(
      `/trips?${data.page ? `page=${data.page}` : ""}${
        data.perPage ? `&perPage=${data.perPage}` : ""
      }${
        data.from_location_id
          ? `&from_location_ids=${data.from_location_id}`
          : ""
      }${data.to_location_id ? `&to_location_ids=${data.to_location_id}` : ""}${
        data.status ? `&status=${data.status}` : ""
      }`
    ),
  // getTrips: (data?: any) => request.get(`/trips?${data.page ? `page=${data.page}` : ''}${data.perPage ? `&perPage=${data.perPage}` : ''}${data.from_location_id? `&from_location_id=${data.from_location_id}`:''}${data.to_location_id ? `&to_location_id=${data.to_location_id}`:''}`)
};

export default fileService;
