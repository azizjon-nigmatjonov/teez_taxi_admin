import { Outlet } from "react-router-dom";
import styles from "./style.module.scss";
import { ColorConstants } from "../../constants/website";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  useEffect(() => {
    (Object.keys(ColorConstants) as (keyof typeof ColorConstants)[]).forEach(
      (key) => {
        document.documentElement.style.setProperty(
          "--" + key,
          ColorConstants[key]
        );
      }
    );
  }, []);
  return (
    <div className={styles.layout}>
      <Outlet />
      <Toaster position="top-right" />
    </div>
  );
};

export default AuthLayout;
