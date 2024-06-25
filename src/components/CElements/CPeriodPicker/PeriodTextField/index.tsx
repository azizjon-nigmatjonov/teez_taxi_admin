import { memo } from "react";
import { TextField } from "@mui/material";
import "../style.scss";
// import { IoMdArrowDropdown } from "react-icons/io";
import { ArrowDownOutline } from "../../../../components/UI/IconGenerator/Svg";

interface Props {
  open: boolean;
  name: string;
  placeholder?: string;
  defaultValue?: any;
  value: any;
  handleDropdown: () => void;
}

export const PeriodTextField = memo(
  ({
    name,
    placeholder,
    defaultValue,
    handleDropdown,
    open = false,
    value,
  }: Props) => {

    return (
      <div className="PeriodTextField z-20 relative">
        <div className="relative">
          <TextField
            size="small"
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            InputProps={{
              readOnly: true,
              // endAdornment: <IoMdArrowDropdown size={18} />,
            }}
            onClick={() => handleDropdown()}
            style={{
              background: "white",
              border: open ? "2px solid var(--main)" : "",
            }}
          />
          <div
            className={`absolute right-12px top-1/2 -translate-y-1/2 ${
              open ? "rotate-[180deg]" : ""
            }`}
          >
            <ArrowDownOutline />
          </div>
        </div>
      </div>
    );
  }
);
