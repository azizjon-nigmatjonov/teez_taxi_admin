import {
  BorderColorRounded,
  DeleteRounded,
  Visibility,
} from "@mui/icons-material";
import cls from "./style.module.scss";

interface Props {
  actions: string[];
  element: any;
  checkPermission: any;
  tableActions: (val: any, val2: any) => void;
}

export const TableDelete = ({
  element,
  tableActions = () => {},
  actions = [],
  checkPermission = [],
}: Props) => {
  const handleActions = (status: string, element: any) => {
  
    if (checkPermission(status)) {
      const newStatus = status === "delete" ? "delete_by" : status
      tableActions(element, newStatus);
    }
  };

  return (
    <div className={cls.tableDelete}>
      {actions.includes("delete") ? (
        <div
          className={`${cls.delete} ${
            checkPermission("delete") ? "" : cls.inactive
          }`}
          onClick={() => handleActions("delete", element)}
        >
          <DeleteRounded style={{ color: "var(--error)" }} />
        </div>
      ) : (
        ""
      )}

      {actions.includes("edit") ? (
        <div
          className={`${cls.edit} ${
            checkPermission("edit") ? "" : cls.inactive
          }`}
          onClick={() => handleActions("edit", element)}
        >
          <BorderColorRounded style={{ color: "var(--primary)" }} />
        </div>
      ) : (
        ""
      )}

      {actions.includes("view") ? (
        <div
          className={`${cls.view} ${
            checkPermission("view") ? "" : cls.inactive
          }`}
          onClick={() => handleActions("view", element)}
        >
          <Visibility style={{ color: "var(--gray90)" }} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
