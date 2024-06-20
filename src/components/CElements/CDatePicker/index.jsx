import { forwardRef } from "react";
import { IconButton } from "@mui/material";
import { CloseIcon } from "../../IconGenerator/Svg";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import uz from "date-fns/locale/uz";
registerLocale("uz", uz);
import "./style.scss";

const ExampleCustomInput = forwardRef(
  ({ selected, setSelected, value, placeHolder, onClick }, ref) => {
    const removeSelected = (e) => {
      e.stopPropagation();
      setSelected("");
    };

    return (
      <div className="flex">
        <button
          className="flex items-center justify-center custom-datepicker w-[160px]"
          onClick={onClick}
          ref={ref}
        >
          {selected ? selected : placeHolder}
          {selected && (
            <IconButton style={{ padding: 0 }} onClick={removeSelected}>
              <CloseIcon className="p-0" />
            </IconButton>
          )}
        </button>
      </div>
    );
  }
);

const CDatePicker = ({
  value,
  onChange,
  selected,
  placeHolder = "tanlanmangan",
  setSelected,
}) => {
  return (
    <DatePicker
      selected={value}
      dateFormat={"dd/MM/yyyy HH:mm"}
      timeFormat={"HH:mm"}
      onChange={onChange}
      customInput={
        <ExampleCustomInput
          selected={selected}
          setSelected={setSelected}
          placeHolder={placeHolder}
        />
      }
      locale="uz"
      maxDate={new Date()}
      showTimeSelect
      timeCaption="Vaqt"
      timeIntervals={1}
    />
  );
};

export default CDatePicker;
