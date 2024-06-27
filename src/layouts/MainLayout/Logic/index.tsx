import { useGetQueries } from "../../../hooks/useGetQueries";
import usePageRouter from "../../../hooks/useObjectRouter";
import { ArrowLeftIcon } from "@mui/x-date-pickers-pro";
import { useQuery } from "react-query";
import authService from "../../../services/auth/authService";
import { useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useMemo } from "react";
import { authActions } from "../../../store/auth/auth.slice";
import { ColorConstants } from "../../../constants/website";
// import client from "../../../utils/mqtt";
// import { mqttActions } from "../../../store/mqtt";
// import { notificationActions } from "../../../store/notification";
// import { GetCurrentDate } from "../../../utils/getDate";
// import { usePermissions } from "../../../hooks/usePermissions";

export const BackButtonRoute = () => {
  const { fromRoutes } = useGetQueries();
  const { progmatic } = usePageRouter();

  if (!fromRoutes) return "";

  return (
    <div
      className="fixed z-[100] left-[250px] top-[340px]"
      id="breathing-button"
    >
      <button
        onClick={() => progmatic()}
        className="custom-btn form text-2xl hover:bg-[var(--primary)] duration-200"
      >
        <ArrowLeftIcon style={{ fontSize: "40px" }} />
        Ortga qaytish
      </button>
    </div>
  );
};

export const GetUserInfo = () => {
  const dispatch = useDispatch();
  const { data: userInfo, refetch } = useQuery(["GET_USER"], () => {
    return authService.getUserInfo();
  });
  const userInfoStored = useSelector((state: any) => state.auth.user);

  const permissions = useMemo(() => {
    const roles = userInfo?.data?.roles;
    if (!roles?.length) return [];
    const list: any = [];

    roles.forEach((role: any) => {
      role.permissions.forEach((permission: any) => {
        list.push({
          ...permission,
          value: permission.name.substring(0, permission.name.indexOf("#")),
          permission: permission.name.substring(
            permission.name.indexOf("#") + 1
          ),
          permissions: [],
        });
      });
    });

    const combinedObjects: any = {};

    list.forEach((obj: any) => {
      if (combinedObjects[obj.value]) {
        combinedObjects[obj.value].permissions.push(obj.permission);
      } else {
        combinedObjects[obj.value] = { ...obj, permissions: [obj.permission] };
        delete combinedObjects[obj.value].permission;
      }
    });

    const result = Object.values(combinedObjects);

    return result;
  }, [userInfo]);

  useEffect(() => {
    if (!userInfo?.data) return;
    dispatch(authActions.setUser({ ...userInfo?.data, permissions }));
  }, [userInfo]);

  return {
    userInfo: userInfo?.data || userInfoStored,
    refetchUserInfo: refetch,
  };
};

export const ColorData = memo(() => {
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

  return "";
});

export const GlobalMQTT = () => {
  // const count = useSelector((state: any) => state.notification.new_count);
  // const sound = useSelector((state: any) => state.notification.sound);
  // const notificationList = useSelector((state: any) => state.notification.list);
  // const routingKey = "akataxi/admin";
  // const dispatch = useDispatch();
  // const audioRef: any = useRef(null);

  // const playAudio = () => {
  //   if (sound) {
  //     audioRef.current.play();
  //   }
  // };

  // const connectMqtt = (mute: boolean) => {
  //   client.on("connect", function () {
  //     console.log("connected to mqtt");
  //   });

  //   client.subscribe(routingKey, function () {
  //     console.log("subscribed to mqtt");
  //   });

  //   client.on("message", function (topic: any, message: any) {
  //     if (message) {
  //       const payload = { topic, message: message.toString() };
  //       if (mute) playAudio();

  //       const mqttData = JSON.parse(payload.message);
  //       if (mqttData.name === "notification") {
  //         const Hour = GetCurrentDate({});
  //         dispatch(
  //           notificationActions.setList([
  //             { ...mqttData, time: Hour },
  //             ...notificationList,
  //           ])
  //         );
  //         dispatch(notificationActions.setCount(count + 1));
  //       }
  //       console.log("got mqtt message", mqttData);
  //       dispatch(mqttActions.setData({ topic, message: mqttData }));
  //     }
  //   });
  // };

  // useEffect(() => {
  //   client.removeAllListeners();
  //   connectMqtt(sound);
  // }, [sound]);

  return (
    <>
      {/* <audio ref={audioRef} src="/notif.wav" /> */}
    </>
  );
};
