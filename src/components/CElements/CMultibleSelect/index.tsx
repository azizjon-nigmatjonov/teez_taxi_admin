import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import CLabel from "../CLabel";
import { useEffect, useState } from "react";
import { MenuItem } from "@mui/material";

interface Props {
  all?: boolean;
  label?: string;
  placeholder?: string;
  options: any;
  defaultValue?: any;
  handlerValue?: (e: any) => void | undefined;
}

const CMultibleSelect = ({
  defaultValue = [],
  label = "label",
  options,
  placeholder,
  handlerValue = () => {},
}: Props) => {
  const [currentValue, setCurrentValue]: any = useState([]);
  const [newOptions, setNewOptions] = useState([]);

  useEffect(() => {
    const newArr: any = [...options];
    setNewOptions(newArr);
  }, [options]);

  const handleChange = (obj: any) => {
    let newVal: any = [...currentValue];

    if (newVal?.find((item: any) => item === obj.value)) {
      newVal = newVal.filter((el: any) => el !== obj.value);
    } else {
      newVal = [...newVal, obj.value];
    }

    setCurrentValue(newVal);
    handlerValue(obj)
  };

  const regionHandler = (e: any) => {
    const option: any = [];
    newOptions?.map((items: any) => {
      e.map((value: any) => {
        if (items.value == value) {
          option.push(items.label);
        }
      });
    });
    return option.length > 1 ? option.length + " ta" : option[0];
  };

  useEffect(() => {
    if (defaultValue?.length && !currentValue?.length) {
      const arr: any = [...currentValue];
      const sum = defaultValue.length
        ? decodeURIComponent(defaultValue).split(",")
        : [];

      sum.forEach((element: any) => {
        const number = Number(element);
        if (!currentValue.includes(number)) {
          arr.push(number);
        }
      });

      setCurrentValue(arr);
    }
  }, [defaultValue, currentValue]);

  return (
    <div id="HFMultipleSelect" className="w-full">
      {label && <CLabel title={label} />}
      <div className="bg-white relative">
        <div className="relative z-[2]">
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={currentValue}
            // onChange={handleChange}
            placeholder={placeholder}
            renderValue={() => {
              if (currentValue.length === 0) {
                return <p className="text-red-500">Tanglang</p>;
              }
              return regionHandler(currentValue);
            }}
          >
            {newOptions?.map((item: any) => (
              <MenuItem
                key={item.value}
                value={item.value}
                onClick={() => handleChange(item)}
              >
                <Checkbox checked={currentValue.includes(item.value)} />

                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
          </Select>
        </div>
        {placeholder && !currentValue?.length ? (
          <p className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gray60)]">
            {placeholder}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CMultibleSelect;
