import Slider from "@mui/material/Slider";
import { useState } from "react";
import "./style.scss";
import CLabel from "../CLabel";
import { formatNumberWithSpaces } from "../../../utils/formatMoney";

interface Props {
  min: number;
  max: number;
  format?: string;
  label?: string;
  defaultValue?: any;
  handleValue?: (evt: any) => void;
}

const CSlider = ({
  label = "",
  format = "money",
  handleValue = () => {},
  min = 0,
  max = 10,
  defaultValue = [],
}: Props) => {
  const minDistance = 5;
  const [value1, setValue1] = useState<any[]>(defaultValue?.length ? defaultValue : [min, max]);

  const formatter = (number: number) => {
    switch (format) {
      case "money":
        return formatNumberWithSpaces(number) + ` so'm`;
      default:
        return number;
    }
  };

  const handleChange1 = (
    _: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }

    handleValue!(value1);
  };

  return (
    <div>
      {label && <CLabel title={label} />}
      <div>
        <div className="px-1">
          <Slider
            getAriaLabel={() => "Minimum distance shift"}
            value={value1}
            onChange={handleChange1}
            // valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            disableSwap
            max={max}
            min={min}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="border border-[var(--border)] rounded-[8px] px-2 h-[40px] w-full flex items-center common-shadow">
            {formatter(value1[0])}
          </div>
          <div className="mx-1">-</div>
          <div className="border border-[var(--border)] rounded-[8px] px-2 h-[40px] w-full flex items-center common-shadow">
            {formatter(value1[1])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSlider;
