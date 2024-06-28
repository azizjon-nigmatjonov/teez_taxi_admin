import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CLabel from "../CLabel";
import DatePickerDetail from "./DatePickerDetail";
import { useEffect } from "react";
interface Props {
  field?: any;
  error?: any;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  defaultValue?: any;
  required?: boolean;
}

const CDatepicker = ({
  field,
  disabled,
  label,
  defaultValue,
  required,
}: Props) => {
  useEffect(() => {
    if (defaultValue) {
      if (field) field.onChange(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div id="customDatePicker">
      {label && <CLabel title={label} required={required} />}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerDetail
          field={field}
          defaultValue={defaultValue}
          disabled={disabled}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CDatepicker;
