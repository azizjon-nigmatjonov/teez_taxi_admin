import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ArrowDownFilled, PlusIcon } from "../IconGenerator/Svg";
import './style.scss'

interface Props {
  text?: string;
  open?: boolean;
  handleClick?: (val?: any) => void;
  leftIcon?: boolean;
  rightIcon?: boolean;
  classes?: string;
  onClick?: (val?: any) => void
}

const CancelButton = ({
  text = "",
  open = false,
  handleClick,
  leftIcon = false,
  rightIcon,
  classes,
  ...props
}: Props) => {
  const { t } = useTranslation();
 
  
  return (
    <div id="deleteButton" {...props}>
      <Button
        id="demo-customized-button"
        aria-haspopup="true"
        variant="contained"
        disableElevation
        onClick={handleClick}
        className={`gap-[6px] ${classes}`}
      >
        {leftIcon === true ? <PlusIcon /> : leftIcon}
        <span className="text-white">{t(text)}</span>
        {rightIcon && (
          <div className={`${open ? "rotate-[180deg]" : ""} duration-300`}>
            <ArrowDownFilled fill={open ? "white" : undefined} />
          </div>
        )}
      </Button>
    </div>
  );
};

export default CancelButton;
