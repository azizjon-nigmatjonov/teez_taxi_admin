import axios from "axios";
import toast from "react-hot-toast";
// import { store } from "../store/index";
// import { showAlert } from "../store/alert/alert.thunk";
export const baseURL = import.meta.env.VITE_BASE_URL_AUTH;

const requestAuth = axios.create({
  baseURL,
  timeout: 100000,
});

const errorHandler = (error: any) => {
  // if (error.response?.data?.data)
  //   store.dispatch(showAlert({ title: error.response.data.data }));
  // else store.dispatch(showAlert({ title: "___ERROR___" }));
  console.log('error,', error);
  
  toast.error(error?.message ?? "Error");
  return Promise.reject(error.response);
};

// const errorHandler = (error, hooks) => {
//   const token = store.getState().auth.token
//   const logoutParams = {
//     access_token: token,
//   };

//   if(error?.response?.status === 401) {
//     const refreshToken = store.getState().auth.refreshToken

//     const params = {
//       refresh_token: refreshToken,
//     }

//     const originalRequest = error.config

//     return Auth.refreshToken(params)
//       .then((res) => {
//         store.dispatch(authActions.setTokens(res))
//         return request(originalRequest);
//       })
//       .catch((err) => {
//         console.log(err)
//         return Promise.reject(error)
//       })
//   } else {
//     if (error?.response) {
//       if(error.response?.data?.data) {
//         if (error.response.data.data !== "rpc error: code = Internal desc = member group is required to add new member") {
//           store.dispatch(showAlert(error.response.data.data))
//         }
//       }
//       if (error?.response?.status === 403) {
//         store.dispatch(logoutAction(logoutParams)).unwrap().catch()
//       }
//     }

//     else store.dispatch(showAlert('___ERROR___'))

//     return Promise.reject(error.response)
//   }
// }

requestAuth.interceptors.request.use(
  (config: any) => {
    // const token = "";
    // config.headers[`x-device-type`] = "web";
    // config.headers[`x-app-lang`] = "uz";
    // config.headers[`x-device-model`] = "Safari | web";
    // config.headers[`x-app-version`] = "0.0.1";
    // config.headers[`x-app-build`] = 1;
    // config.headers[`x-device-uid`] = 123456;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },

  (error: any) => errorHandler(error)
);

requestAuth.interceptors.response.use(
  (response: any) => response.data.data,
  errorHandler
);

export default requestAuth;
