import CLabel from "../../../components/CElements/CLabel";
import CImageUpload from "../../../components/CElements/CImageUpload";
import { Controller } from "react-hook-form";
import { useEffect } from "react";

interface Props {
  name: string;
  control: any;
  label?: string;
  rules?: any;
  classes?: string;
  required?: boolean;
  defaultValue?: any;
  defaultUrl?: string
}

const FiendUI = ({
  onChange,
  name,
  classes,
  error,
  defaultUrl = "",
  defaultValue,
}: {
  name: any;
  classes: string;
  error: any;
  defaultUrl?: string;
  defaultValue: any;
  onChange: (val: any) => void;
}) => {
  const handleChange = (val: any) => {
    onChange(val);
  };

  useEffect(() => {
    if (defaultValue) onChange(defaultValue);
  }, [defaultValue]);

  return (
    <div className="relative">
      <CImageUpload onChange={handleChange} name={name} classes={classes} defaultValue={defaultUrl} />

      {error?.message && (
        <p className="text-sm text-[var(--error)] absolute left-1 -bottom-5 whitespace-nowrap">
          {error.message}
        </p>
      )}
    </div>
  );
};

export const HFImageUpload = ({
  name,
  control,
  label,
  required = false,
  classes = "",
  defaultValue,
  defaultUrl,
  rules,
}: Props) => {
  return (
    <div className="HFImageUpload">
      {label && <CLabel title={label} required={required} />}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={{ ...rules }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <FiendUI
            name={name}
            classes={classes}
            onChange={onChange}
            error={error}
            defaultUrl={defaultUrl}
            defaultValue={defaultValue}
          />
        )}
      />
    </div>
  );
};
