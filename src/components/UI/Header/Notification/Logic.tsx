import { useDispatch, useSelector } from "react-redux";
import { notificationActions } from "../../../../store/notification";

export const NotificationData = () => {
  const dispatch = useDispatch();
  // const mqtt = useSelector((state: any) => state.mqtt.mqtt);
  const notificationList = useSelector((state: any) => state.notification.list);
  const notifCount = useSelector((state: any) => state.notification.new_count);
  

  const clearCount = () => {
    dispatch(notificationActions.setCount(0));
  };

  return { notificationList, notifCount, clearCount };
};
