import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CLabel from "../../../components/CElements/CLabel";
import "./style.scss";
import { Controller } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import { DateData } from "./Logic";
import dayjs from "dayjs";

interface Props {
  label?: string;
  name: string;
  required?: boolean;
  control: any;
  placeholder?: string;
  defaultValue?: any;
}

const DateUI = ({
  field,
  error,
  placeholder,
  defaultValue,
}: {
  field: any;
  error?: any;
  defaultValue?: any;
  placeholder: string;
}) => {
  const [open, setOpen] = useState(false);
  const { changeAction, formatedDate } = DateData();

  const handleChange = (date: any) => {
    changeAction(date);
  };

  useEffect(() => {
    field.onChange(formatedDate);
  }, [formatedDate]);

  const acceptChange = () => {
    console.log("accept");
  };

  const defValue = useMemo(() => {
    if (defaultValue) {
      const date = dayjs(defaultValue)
      changeAction(date)
      return date
    }
  }, [defaultValue]);

  return (
    <div className="relative">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker
            disablePast
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onAccept={acceptChange}
            onChange={handleChange}
            defaultValue={defValue}
            ampm={false}
            format="DD.MM.YYYY HH:mm"
            slotProps={{
              textField: { placeholder },
              actionBar: {
                actions: ["cancel", "accept"],
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      {error?.message && (
        <p className="text-sm text-[var(--error)] absolute left-1 -bottom-5 whitespace-nowrap">
          {error.message}
        </p>
      )}
    </div>
  );
};

export const HFPeriodPicker = ({
  label,
  required,
  name,
  control,
  placeholder = "",
  defaultValue,
}: Props) => {
  return (
    <div className="flex flex-col relative" id="HFDateTimePicker">
      {label && <CLabel title={label} required={required} />}

      <Controller
        control={control}
        name={name}
        rules={{
          required: required ? "required_field" : false,
        }}
        render={({ field, fieldState: { error } }) => (
          <DateUI
            field={field}
            error={error}
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        )}
      ></Controller>
    </div>
  );
};
