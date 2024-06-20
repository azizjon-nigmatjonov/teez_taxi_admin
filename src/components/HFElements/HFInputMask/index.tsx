import { useEffect } from "react";
import ReactInputMask from "react-input-mask";
import CLabel from "../../CElements/CLabel";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Props {
  mask?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  control?: any;
  setValue?: (val1?: any, val2?: any) => void;
  defaultValue?: any;
  errors?: any;
  handleChange?: (val?: any) => void;
}

const InputUI = ({
  handleChange,
  onChange,
  placeholder = "",
  mask = "",
  value = "",
  required = false,
  defaultValue,
}: {
  value: any;
  mask?: string;
  placeholder?: any;
  defaultValue?: any;
  onChange: (val?: any) => void;
  handleChange: (val?: any) => void;
  required?: boolean;
}) => {
  useEffect(() => {
    if (defaultValue) {
      onChange(defaultValue);
    }
  }, [defaultValue]);

  return (
    <ReactInputMask
      onChange={(e) => {
        onChange(e.target.value);
        handleChange(e.target.value);
      }}
      mask={mask}
      maskChar=""
      value={value}
      placeholder={placeholder}
      required={required}
    />
  );
};

const HFInputMask = ({
  mask = "",
  required = false,
  label = "",
  placeholder = "",
  name = "",
  control,
  setValue = () => {},
  defaultValue = "",
  handleChange = () => {},
}: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [name, setValue, defaultValue]);

  return (
    <div id="hfInputMask" className="relative w-full">
      {label && <CLabel title={label} required={required} />}
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{
          required: required ? "This is required field" : false,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <InputUI
              onChange={onChange}
              mask={mask}
              value={value}
              placeholder={t(placeholder)}
              handleChange={handleChange}
              defaultValue={defaultValue}
            />
            {error?.message && (
              <p className={`text-sm text-[var(--error)] absolute ${label ? 'bottom-[-17px]' : 'bottom-0'}`}>
                {t(error.message || "")}
              </p>
            )}
          </>
        )}
      ></Controller>
    </div>
  );
};

export default HFInputMask;
