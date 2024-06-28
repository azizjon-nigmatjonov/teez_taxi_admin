import {
  BorderColorRounded,
  DeleteRounded,
  Visibility,
} from "@mui/icons-material";
import cls from "./style.module.scss";
// import CCheckbox from "../../../../../CElements/CCheckbox";

interface Props {
  actions: string[];
  element: any;
  checkPermission: any;
  filterParams: any;
  tableActions: (val: any, val2: any) => void;
}

export const TableDelete = ({
  element,
  filterParams = {},
  tableActions = () => {},
  actions = [],
  checkPermission = [],
}: Props) => {
  const handleActions = (status: string, element: any) => {
    if (checkPermission(status)) {
      const newStatus = status === "delete" ? "delete_by" : status;
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

      {filterParams?.settings?.multiple ? (
        <div>
          {/* <CCheckbox
            checked={filterParams?.multiple_ids?.includes(element.id)}
            handleCheck={() => tableActions(element, "multiple")}
          /> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
