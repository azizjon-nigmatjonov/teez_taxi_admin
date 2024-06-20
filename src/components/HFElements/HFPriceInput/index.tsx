import { Controller } from "react-hook-form";
import CLabel from "../../CElements/CLabel";
import "../style.scss";
import { useEffect } from "react";
import CPriceInput from "../../../components/CElements/CPriceInput";

interface Props {
  control: any;
  name: string;
  required?: boolean;
  rules?: object;
  label?: string;
  disabled?: boolean;
  defaultValue?: any;
  setValue?: (val1?: any, val2?: any) => void;
  type?: string;
  placeholder?: string;
  style?: any;
  activatePassword?: boolean;
  errors?: any;
  readOnly?: boolean;
}

export const HFPriceInput = ({
  control,
  name = "",
  required = false,
  rules = {},
  label,
  disabled = false,
  defaultValue = "",
  placeholder = "",
  setValue = () => {},
  activatePassword = false,
  type = "text",
  errors = {},
  readOnly = false,
  ...props
}: Props) => {
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className="HFPriceInput relative">
      {label && <CLabel title={label} required={required} />}
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{
          ...rules,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <CPriceInput
            name={name}
            onChange={onChange}
            value={value}
            inputProps={props}
            error={error}
            placeholder={placeholder}
          />
        )}
      ></Controller>
    </div>
  );
};
