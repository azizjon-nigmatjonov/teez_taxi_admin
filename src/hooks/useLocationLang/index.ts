import { useLocation } from "react-router-dom";
import { header } from "./state";

export default function useLocationLang() {
  const location = useLocation();

  const state: any = { header };

  const GetTitle = (status: string) => {
    return state[status][location.pathname.substring(1)] ?? "";
  };

  return { GetTitle };
}
