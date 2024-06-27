import request from "../../utils/request";
import requestAuth from "../../utils/requestAuth";
const authService = {
  loginFn: (data: any) => requestAuth.post("/login", data, {
    headers: {
      "Content-Type": "application/json"
    }
  }),
  getUserInfo: () => request.get("/users/about-me"),
  updateUserInfo: (data: any) => request.put("/admins-update/me", data),
};

export default authService;
