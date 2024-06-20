import { useDispatch, useSelector } from "react-redux";
import CDriver from "../../../../components/CElements/CDivider";
import {
  CloseIcon,
  DeleteIcon,
} from "../../../../components/UI/IconGenerator/Svg";
import { notificationActions } from "../../../../store/notification";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { usePermissions } from "../../../../hooks/usePermissions";
import { ListItem } from "./Item";

interface Props {
  setOpen: (val: boolean) => void;
  list: any;
}

export const NitifList = ({ setOpen, list }: Props) => {
  const sound = useSelector((state: any) => state.notification.sound);
  const dispatch = useDispatch();
  const { checkAdditionals } = usePermissions();
  return (
    <>
      <div className="bg-white rounded-[12px] absolute right-0 top-full w-[460px] z-[99] border border-[var(--gray20)] common-shadow">
        <div className="flex items-center justify-between p-5 pb-0">
          <h3 className="text-[var(--gray90)] text-lg">Bildirishnomalar</h3>
          <div className="flex space-x-5">
            <button
              className={
                checkAdditionals("notification_sound")
                  ? ""
                  : "cursor-not-allowed"
              }
              onClick={() => {
                if (checkAdditionals("notification_sound")) {
                  dispatch(notificationActions.setSound(!sound));
                }
              }}
            >
              {!sound ? (
                <VolumeOffIcon style={{ color: "var(--gray60)" }} />
              ) : (
                <VolumeUpIcon
                  style={{
                    color: checkAdditionals("notification_sound")
                      ? "var(--gray60)"
                      : "var(--gray30)",
                  }}
                />
              )}
            </button>

            <button onClick={() => dispatch(notificationActions.setList([]))}>
              <DeleteIcon />
            </button>
            <button onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
          </div>
        </div>
        <CDriver classes="my-5" />
        <div className="p-5 pt-0">
          {list?.length ? (
            <ul className="max-h-[400px] overflow-auto">
              {list.map((item: any, index: number) => (
                <ListItem key={index} element={item} />
              ))}
            </ul>
          ) : (
            <img
              className="h-[130px] mx-auto"
              src="/images/no-data.png"
              alt="image"
            />
          )}
        </div>
      </div>
    </>
  );
};
