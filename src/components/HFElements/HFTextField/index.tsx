import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import CLabel from "../../CElements/CLabel";
import "../style.scss";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const InputUI = ({
  value,
  name,
  error,
  props,
  defaultValue,
  activatePassword,
  password,
  type,
  onChange,
  readOnly,
  disabled,
  errors = {},
  placeholder,
  setPassword = () => {},
}: {
  value: any;
  name: string;
  error?: any;
  props?: any;
  activatePassword: any;
  password: any;
  type: any;
  disabled: any;
  errors: any;
  readOnly?: boolean;
  defaultValue?: any;
  onChange: any;
  placeholder: string;
  setPassword: (val: any) => void;
}) => {
  useEffect(() => {
    if (defaultValue) {
      onChange(defaultValue);
    }
  }, [defaultValue]);

  return (
    <>
      <TextField
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        error={Boolean(error)}
        helperText={error?.message}
        {...props}
        type={
          activatePassword && password
            ? "password"
            : activatePassword && !password
            ? "text"
            : type
        }
        InputProps={{
          readOnly: readOnly,
        }}
        placeholder={placeholder}
        className={error ? "error" : ""}
        disabled={disabled}
      />
      {activatePassword && (
        <span
          className="visibility"
          onClick={() => setPassword((prev: boolean) => !prev)}
        >
          {!password ? <VisibilityOff /> : <Visibility />}
        </span>
      )}

      {errors[name]?.message && (
        <p className="text-sm text-[var(--error)] absolute left-1 -bottom-5 whitespace-nowrap">
          {errors[name].message}
        </p>
      )}
    </>
  );
};
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

const HFTextField = ({
  control,
  name = "",
  required = false,
  rules = {},
  label,
  disabled = false,
  defaultValue = "",
  setValue = () => {},
  activatePassword = false,
  type = "text",
  errors = {},
  readOnly = false,
  placeholder,
  ...props
}: Props) => {
  const [password, setPassword] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className="HFInput relative">
      {label && <CLabel title={label} required={required} />}
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{
          ...rules,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <InputUI
            value={value}
            name={name}
            error={error}
            props={props}
            activatePassword={activatePassword}
            password={password}
            type={type}
            onChange={onChange}
            readOnly={readOnly}
            disabled={disabled}
            errors={errors}
            defaultValue={defaultValue}
            setPassword={setPassword}
            placeholder={placeholder ? t(placeholder) : ""}
          />
        )}
      ></Controller>
    </div>
  );
};

export default HFTextField;
