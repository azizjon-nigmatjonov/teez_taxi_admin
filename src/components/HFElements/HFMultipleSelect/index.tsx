import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import CLabel from "../../CElements/CLabel";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import IconGenerator from "../IconPicker/IconGenerator";

interface Props {
  control?: any;
  name?: any;
  label?: string;
  width?: string;
  options?: object[];
  disabledHelperText?: any;
  placeholder?: any;
  required?: boolean;
  onChange?: (val?: any) => void;
  optionType?: any;
  defaultValue?: any;
  rules?: any;
  id?: string;
  setValue?: (val1?: any, val2?: any) => void;
}

const SelectUI = ({
  value,
  placeholder,
  handleChange,
  onFormChange,
  options,
  defaultValue,
  props,
}: {
  value: any;
  placeholder?: string;
  props?: any;
  options: any;
  defaultValue?: any;
  handleChange: (val: any) => void;
  onFormChange: (val: any) => void;
}) => {
  const { t } = useTranslation()
  useEffect(() => {
    if (defaultValue?.length) {
      onFormChange(defaultValue);
    }
  }, [defaultValue]);

  return (
    <Select
      multiple
      value={value}
      defaultValue={defaultValue}
      size="small"
      labelId="demo-multiple-name-label"
      id="demo-multiple-name"
      inputProps={{ placeholder }}
      fullWidth
      displayEmpty
      onChange={(e: any) => {
        handleChange(e.target.value);
        onFormChange(e.target.value);
      }}
      {...props}
    >
      {options?.map((option?: any) => (
        <MenuItem key={option.value} value={option.value}>
          {t(option.label)}
        </MenuItem>
      ))}
    </Select>
  );
};

export const HFMultipleSelect = ({
  control,
  name,
  label,
  width = "100%",
  options = [],
  disabledHelperText,
  placeholder,
  required = false,
  onChange = () => {},
  optionType,
  defaultValue = "",
  rules = {},
  setValue = () => {},
  ...props
}: Props) => {
  const [arr, setArr] = useState([]);

  const handleChange = (value: any) => {
    onChange(value);
    setArr(value);
  };

  useEffect(() => {
    if (defaultValue?.length) {
      const arr: any = [];
      defaultValue.forEach((element: any) => {
        if (typeof element === "object") {
          arr.push(element.id);
        } else {
          arr.push(element);
        }
      });

      setValue(name, arr);
    }
  }, [defaultValue, name]);

  useEffect(() => {
    if (defaultValue?.length) {
      setArr(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div id="HFMultipleSelect">
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={{
          required: required ? "This is required field" : false,
          ...rules,
        }}
        render={({
          field: { onChange: onFormChange, value },
          fieldState: { error },
        }) => (
          <FormControl style={{ width }}>
            {label && <CLabel title={label} required={required} />}

            <SelectUI
              options={options}
              onFormChange={onFormChange}
              value={value || arr}
              placeholder={placeholder}
              handleChange={handleChange}
              props={props}
              defaultValue={defaultValue}
            />
            {!disabledHelperText && error?.message && (
              <FormHelperText
                style={{ color: "var(--error)", margin: "0 5px" }}
                error
              >
                {error?.message}
              </FormHelperText>
            )}
          </FormControl>
        )}
      ></Controller>
    </div>
  );
};
