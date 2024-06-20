import { useState } from "react";
// import { NotificationData } from "./Logic";
import { NitifList } from "./List";
import { Badge } from "@mui/material";
import { NotificationIcon } from "../../../../components/UI/IconGenerator/Svg";
import { NotificationData } from "./Logic";
import { Closer } from "../../../../components/UI/Closer";
import { usePermissions } from "../../../../hooks/usePermissions";
// import { useSelector } from "react-redux";

const Notification = () => {
  const [open, setOpen] = useState(false);
  const { notificationList, clearCount, notifCount } = NotificationData();
  const { checkAdditionals } = usePermissions();

  return (
    <div className="relative z-[4]">
      <button
        className={`p-2 rounded-full shadow-sm ${
          checkAdditionals("show_notification") ? "" : "cursor-not-allowed"
        }`}
        onClick={() => {
          if (!checkAdditionals("show_notification")) return;
          setOpen(true);
          clearCount();
        }}
      >
        <Badge badgeContent={notifCount} color="primary">
          <NotificationIcon
            fill={
              checkAdditionals("show_notification")
                ? "var(--gray)"
                : "var(--gray30)"
            }
          />
        </Badge>
      </button>

      {open && <NitifList setOpen={setOpen} list={notificationList} />}
      {open && <Closer handleClose={() => setOpen(false)} />}
    </div>
  );
};

export default Notification;
