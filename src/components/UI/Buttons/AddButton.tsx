import { Button } from "@mui/material";
import "./style.scss";
import { PlusIcon } from "../IconGenerator/Svg";
import { useTranslation } from "react-i18next";
import { usePermissions } from "../../../hooks/usePermissions";

interface Props {
  text?: string;
  iconLeft?: any;
  style?: any;
  id?: string;
  children?: any;
  classes?: string;
  type?: any;
  btnType?: string;
  permission?: string;
  onClick?: (val?: any) => void;
}

const AddButton = ({
  text = "",
  iconLeft = true,
  id,
  children,
  classes,
  type = "button",
  btnType = "",
  permission = "add",
  onClick = () => {},
  ...props
}: Props) => {
  const { t } = useTranslation();
  const { checkPermission } = usePermissions();
  
  // if (!checkPermission(permission)) return "";

  if (btnType === "ordinary") {
    return (
      <button
        onClick={() => {
          if (!checkPermission(permission)) return;
          onClick();
        }}
        {...props}
        className={`font-[600] flex items-center ${
          checkPermission(permission)
            ? "text-[var(--main)]"
            : "text-[var(--gray30)] cursor-not-allowed"
        }`}
      >
        {iconLeft === true ? (
          <PlusIcon
            fill={checkPermission(permission) ? "var(--main)" : "var(--gray30)"}
          />
        ) : (
          iconLeft
        )}
        {children ? children : <p>{text}</p>}
      </button>
    );
  }

  return (
    <div id={id ? id : "addBtn"} {...props}>
      <Button
        type={type}
        onClick={() => {
          if (!checkPermission(permission)) return;
          onClick();
        }}
        className={`${classes} ${
          checkPermission(permission) ? "" : "disabled"
        }`}
      >
        {iconLeft === true ? (
          <PlusIcon
            fill={checkPermission(permission) ? "white" : "var(--gray90)"}
          />
        ) : (
          iconLeft
        )}
        {children ? (
          children
        ) : (
          <span className="font-[600] ml-1">{t(text)}</span>
        )}
      </Button>
    </div>
  );
};

export default AddButton;
