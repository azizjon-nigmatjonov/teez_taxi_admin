import axios from "axios";
import { store } from "../store/index";
import { showAlert } from "../store/alert/alert.thunk";
import { authActions } from "../store/auth/auth.slice";
// import authService from "../services/auth/authService";

export const baseURL = import.meta.env.VITE_BASE_URL;

const requestForm = axios.create({
    baseURL,
    timeout: 100000,
    headers: { "Content-Type": "multipart/form-data" },
});

const errorHandler = (error: any) => {
    const status = error.response?.status;
    const refresh_token = store.getState().auth.token;

    if (status === 403) {
        showAlert({
            title: `Forbidden: ${error.response?.data?.data}`,
        });
        store.dispatch(authActions.logout());
    } else if (status === 401 && refresh_token) {
        // const data = {
        //   refresh_token,
        // };
        store.dispatch(authActions.logout());
        // const originalRequest = error.config;

        // authService
        //   .refreshTokenFn(data)
        //   .then((res) => {
        //     console.log("refres res", res);
        //     store.dispatch(authActions.setToken(res));
        //     // store.dispatch(authActions.setPermission(res));
        //     return request(originalRequest);
        //   })
        //   .catch((error) => {
        //     console.log('error refresh', error);
        //     store.dispatch(authActions.logout());
        //     return Promise.reject(error);
        //   });
    } else store.dispatch(showAlert({ title: "___ERROR___" }));

    return Promise.reject(error.response);
};

requestForm.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },

    (error) => errorHandler(error)
);

requestForm.interceptors.response.use((response) => response.data, errorHandler);

export default requestForm;



