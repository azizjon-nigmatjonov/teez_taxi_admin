import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { TextareaAutosize } from "@mui/material";
import "./style.scss";
import CLabel from "../../CElements/CLabel";
interface Props {
  name: string;
  label?: string;
  required?: boolean;
  rules?: Record<string, unknown>;
  disabled?: boolean;
  defaultValue?: any;
  control?: any;
  setValue?: any;
  placeholder?: string;
  minRows?: number;
}

export default function HFTextareaAutosize({
  name,
  label,
  required = false,
  rules = {},
  disabled = false,
  defaultValue = "",
  placeholder,
  control,
  setValue = () => {},
  minRows = 10,
}: Props) {
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <div className="HFTextareaAutosize">
      {label && <CLabel title={label} required={required} />}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{
          required: required ? "This is a required field" : false,
          ...rules,
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            <TextareaAutosize
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              minRows={minRows} // Adjust as needed
            />
            {error?.message && (
              <p className="text-sm text-[var(--error)] absolute left-1 -bottom-5 mb-2 whitespace-nowrap">
                {error.message}
              </p>
            )}
          </div>
        )}
      />
      {/* {error && <p className="error">{error.message}</p>} */}
    </div>
  );
}
