// import { NotificationIcon } from "../IconGenerator/Svg";
import cls from "./style.module.scss";
import Notification from "./Notification";
import { useSelector } from "react-redux";
// import { OrderDriver } from "./OrderDriver";

interface Props {
  title?: string;
  titleIn?: string;
  children?: any;
  sticky?: boolean;
  user?: boolean;
}

export const Header = ({
  title = "",
  titleIn = "",
  sticky = false,
  children,
  user = true,
  ...props
}: Props) => {
  const collapsed = useSelector((state: any) => state.sidebar.collapsed);
  return (
    <div className="h-[70px] relative mb-5 z-[98] bg-white w-full">
      <div
        className={cls.header}
        {...props}
        style={{ width: `calc(100vw - ${collapsed ? "70px" : "280px"})` }}
      >
        {children ? (
          children
        ) : (
          <h3 className="text-2xl font-[600] text-[var(--black)]">
            <span className={`${titleIn && "text-[var(--gray)]"}`}>
              {title}
            </span>
            {"/" + titleIn}
          </h3>
        )}
        <div className="h-[20px] w-[2px] bg-[var(--gray20)] ml-5"></div>
        <div className="ml-5 flex items-center space-x-5">
          {/* <OrderDriver /> */}
          <Notification />
        </div>

        <img
          className="absolute right-0 top-0 z-[1]"
          src="/svg/headerLine.svg"
          alt="line"
        />
      </div>
    </div>
  );
};
