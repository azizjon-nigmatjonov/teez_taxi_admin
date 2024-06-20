import usePageRouter from "../../../../hooks/useObjectRouter";
import cls from "./style.module.scss";
import ImageFrame from "../../ImageFrame";
// import { usePermissions } from "../../../../hooks/usePermissions";
interface Props {
  userInfo: any;
  collapsed: boolean;
}

const UserInfo = ({ userInfo = [], collapsed = false }: Props) => {
  const { navigateTo } = usePageRouter();
  // const { checkAdditionals } = usePermissions();

  // if (!checkAdditionals("profile_info")) return <></>;
  
  return (
    <div
      className={cls.wrapper}
      onClick={() => navigateTo("/settings/profile")}
    >
      <div className={`flex items-center ${collapsed ? 'justify-center w-full' : 'space-x-[10px]'}`}>
        <div className={cls.image}>
          <ImageFrame image={userInfo?.image} />
        </div>
        {!collapsed && (
          <div className={cls.content}>
            <h2 className="font-[600] text-[14px] text-[var(--gray70)] capitalize">
              {userInfo.name || "Admin"}
            </h2>
            <p className="text-[14px] text-[var(--gray60)]">{userInfo.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
