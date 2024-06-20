import cls from "./style.module.scss";
import SidebarSection from "./Section";
import UserInfo from "../Header/UserInfo";
import { getWebsiteData } from "./Logic";
import { useEffect } from "react";
import { FoldButton } from "./FoldButton";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../../store/sidebar";
import { projectName } from "../../../constants/website";

export const Sidebar = () => {
  const { userInfo, routes } = getWebsiteData();
  const collapsed = useSelector((state: any) => state.sidebar.collapsed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sessionStorage.getItem("has_route")) {
      sessionStorage.setItem("has_route", "true");
      window.location.reload();
    }
  }, []);

  return (
    <div
      className={cls.sidebar}
      style={{
        width: collapsed ? "70px" : "280px",
        overflow: collapsed ? "" : "hidden",
      }}
    >
      <div className="overflow-y-scroll remove-scroll">
        <div>
          <div
            className={`w-full h-[70px] border-b border-[var(--gray30)] flex items-center ${
              collapsed ? "" : "px-16px"
            }`}
          >
            {!collapsed ? (
              <p className="font-medium text-xl">{projectName}</p>
            ) : (
              <p className="font-medium text-xl whitespace-nowrap">{projectName}</p>
              // <img className="mx-auto" src="/logo.svg" alt="logo" />
            )}
          </div>

          <div
            className={`overflow-y-scroll remove-scroll overflow-x-hidden ${
              collapsed ? "" : "px-[14px]"
            }`}
            style={{ height: "calc(100vh - 140px)" }}
          >
            <SidebarSection list={routes} collapsed={collapsed} />
          </div>
        </div>
        <div
          className={`absolute bottom-0 h-[70px] flex items-center w-full z-[2] bg-white ${
            collapsed ? "" : "px-16px"
          }`}
        >
          <UserInfo userInfo={userInfo} collapsed={collapsed} />
        </div>

        {/* <img
          className="absolute w-full left-0 top-1/2 -translate-y-1/2 z-[1]"
          src="/svg/shadow.svg"
          alt="shdow"
        /> */}
      </div>

      <FoldButton
        collapsed={collapsed}
        setCollapsed={() => dispatch(sidebarActions.setCollapsed(!collapsed))}
      />
    </div>
  );
};
