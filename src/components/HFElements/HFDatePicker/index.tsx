import { Controller } from "react-hook-form";
// import BasicDatepicker from "../../CElements/CDatePicker/BasicDatepicker";
import CustomDatepicker from "../../../components/CElements/CDatePicker/CustomDatepicker";

interface Props {
  name: string;
  control: any;
  label?: string | undefined;
  rules?: any;
  defaultValue?: any;
  required?: boolean;
  placeholder?: string;
}

export const HFDatePicker = ({
  name,
  control,
  label,
  rules = {},
  defaultValue,
  required,
  placeholder,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required ? "required_field" : false,
        ...rules,
      }}
      render={({ field }) => (
        <CustomDatepicker
          field={field}
          label={label}
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
        />
      )}
    ></Controller>
  );
};
