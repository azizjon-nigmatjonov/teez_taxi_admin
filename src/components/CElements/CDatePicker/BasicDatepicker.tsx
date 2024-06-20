import DatePicker from "react-multi-date-picker";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import { InputAdornment, TextField } from "@mui/material";
import { Today } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

import { locale } from "./Plugins/locale";
import CustomNavButton from "./Plugins/CustomNavButton";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./style2.scss";
import "./styles.scss";
// import CError from "../CError";
// import { FormatTime } from "../../../utils/formatTime";
import { FormatCalendar } from "../../../utils/formatTime";
import CLabel from "../CLabel";

interface Props {
  field?: any;
  error?: any;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  defaultValue?: any;
  required?: boolean;
  handleClick: (val: any) => void
}

const BasicDatepicker = ({
  field,
  error,
  disabled,
  placeholder,
  label,
  defaultValue,
  required,
  handleClick = () => {}
}: Props) => {
  const datePickerRef: any = useRef();
  const [value, setValue] = useState("");
  
  const handleValue = (value: any) => {        
    setValue(value);
    handleClick(FormatCalendar(value))
    if (field) field.onChange(FormatCalendar(value));
  };
  

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
      if (field) field.onChange(FormatCalendar(defaultValue));
    }
  }, [defaultValue]);
  
  
  return (
    <div id="basicDatePicker" className="w-full relative">
      {label && <CLabel title={label} required={required} />}
      
      <DatePicker
        disabled={disabled}
        ref={datePickerRef}
        render={(value, openCalendar) => {
          document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              datePickerRef.current.closeCalendar();
            }
          });

          return (
            <>
              <TextField
                value={value}
                size="small"
                placeholder={placeholder}
                onClick={openCalendar}
                fullWidth
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Today />
                    </InputAdornment>
                  ),
                }}
                className={`${error?.message ? "error" : ""}`}
              />
            </>
          );
        }}
        renderButton={<CustomNavButton />}
        plugins={[weekends()]}
        weekStartDayIndex={1}
        portal
        locale={{ ...locale, name: ""}}
        className="datePicker"
        format="DD.MM.YYYY"
        value={new Date(value) || ""}
        onChange={(val: any) => handleValue(val ? new Date(val) : "")}
      />
    </div>
  );
};

export default BasicDatepicker;
