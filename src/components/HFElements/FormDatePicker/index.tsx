import DatePicker from "react-multi-date-picker";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import { InputAdornment, TextField } from "@mui/material";
import { Today } from "@mui/icons-material";
import { useRef } from "react";

import { locale } from "./Plugins/locale";
import CustomNavButton from "./Plugins/CustomNavButton";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./style2.scss";
import "./styles.scss";

interface Props {
  value: any;
  onChange: any;
  disabled?: boolean;
  isBlackBg?: any;
  name?: string;
  isFormEdit?: any;
  tabIndex?: number;
  classes?: any;
  placeholder?: string;
  error?: any;
}

const FormDatePicker = ({
  value,
  onChange,
  disabled,
  isBlackBg,
  name,
  isFormEdit,
  tabIndex,
  classes,
  placeholder,
  // error,
}: Props) => {
  const datePickerRef: any = useRef();

  return (
    <div id="cDatepicker">
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
            <TextField
              value={value}
              size="small"
              name={name}
              placeholder={placeholder}
              onClick={openCalendar}
              fullWidth
              autoComplete="off"
              autoFocus={tabIndex === 1}
              InputProps={{
                inputProps: { tabIndex },
                readOnly: disabled,
                classes: {
                  input: isBlackBg ? classes.input : "",
                },
                style: disabled
                  ? {
                      background: "#c0c0c039",
                    }
                  : {
                      background: isBlackBg ? "#2A2D34" : "",
                      color: isBlackBg ? "#fff" : "",
                    },
                endAdornment: (
                  <InputAdornment position="end">
                    <Today style={{ color: isBlackBg ? "#fff" : "" }} />
                  </InputAdornment>
                ),
              }}
              className={isFormEdit ? "custom_textfield" : ""}
            />
          );
        }}
        renderButton={<CustomNavButton />}
        plugins={[weekends()]}
        weekStartDayIndex={1}
        portal
        locale={locale}
        className="datePicker"
        format="DD.MM.YYYY"
        value={new Date(value) || ""}
        onChange={(val: any) => onChange(val ? new Date(val) : "")}
      />
    </div>
  );
};

export default FormDatePicker;
