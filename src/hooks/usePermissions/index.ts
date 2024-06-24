import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const usePermissions = () => {
  const userInfo = useSelector((state: any) => state.auth.user);
  const permissions = userInfo?.permissions ?? [];
  const location = useLocation();

  const found = useMemo(() => {
    let locationName = location.pathname.substring(1);
    const arr = locationName.split("/");
    if (arr.length > 2) {
      if (arr[2] !== "add") {
        locationName = arr[0] + "/" + arr[1] + "/:id";
      }
    }

    return permissions?.find((item: any) => item.value === locationName);
  }, [location, permissions]);

  const checkAdditionals = (permission: string) => {
    return true
    const found = permissions.find(
      (item: any) => item.value === "settings/additional_functions"
    );
    return found?.permissions?.includes(permission);
  };

  const checkPermission = (permission: string) => {
    return true
    return found?.permissions?.includes(permission)
  };
  return { routePermissions: found?.permissions ?? [], checkPermission, checkAdditionals };
};
