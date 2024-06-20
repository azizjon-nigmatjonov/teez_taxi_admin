import { useMutation } from "react-query";
import authService from "./authService";

const useAuth = ({ loginProps }: { loginProps: any }) => {
  const login = useMutation(authService.loginFn, loginProps);

  return {
    login,
  };
};

export default useAuth;
