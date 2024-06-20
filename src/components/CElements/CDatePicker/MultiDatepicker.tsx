import DatePicker from "react-multi-date-picker";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
// import { InputAdornment, TextField } from "@mui/material";
// import { Today } from "@mui/icons-material";
// import { useRef } from "react";

import { locale } from "./Plugins/locale";
import CustomNavButton from "./Plugins/CustomNavButton";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./style2.scss";
import "./styles.scss";
// import CError from "../CError";
// import { FormatTime } from "../../../utils/formatTime";
import CLabel from "../CLabel";

interface Props {
  field?: any
  error?: any
  disabled?: boolean
  placeholder?: string
  label?: string
  defaultValue?: any
  required?: boolean
}

const MultiDatePicker = ({
  // field,
  disabled,
  label,
  // defaultValue,
  required,
}: Props) => {
//   const datePickerRef: any = useRef();
//   const [value, setValue] = useState([]);

  // const handleValue = (value: any) => {
  //   // setValue(value);

  //   if (field) field.onChange(FormatTime(value));
  // };

  return (
    <div id="multiDatePicker" className="w-full relative">
      {label && <CLabel title={label} required={required} />}
      <DatePicker
        multiple={true}
        disabled={disabled}
        // ref={datePickerRef}
        renderButton={<CustomNavButton />}
        plugins={[weekends()]}
        weekStartDayIndex={1}
        portal
        locale={{...locale, name: ''}}
        className="datePicker"
        format="DD.MM.YYYY"
        // inputFormat="dd.MM.yyyy"
        // value={new Date(value) || ""}
        // onChange={(val: any) => handleValue(val ? new Date(val) : "")}
      />
    </div>
  );
};

export default MultiDatePicker;
