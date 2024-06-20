import { ArrowDownOutline } from "../../../components/UI/IconGenerator/Svg";
import { useEffect, useState } from "react";
import "./style.scss";
import { Closer } from "../../../components/UI/Closer";

interface Props {
  options: any;
  defaultValue?: any;
  handleClick?: (val: any) => void;
}

const CSelectColor = ({
  options,
  defaultValue,
  handleClick = () => {},
}: Props) => {
  const defaultObj = {
    label: "Bo'sh",
    value: 0,
    color: "#475467",
  };

  const [current, setCurrent] = useState(defaultObj);
  const [open, setOpen] = useState(false);

  const handleOptionClick = (item: any) => {
    setCurrent(item);
    handleClick(item);
    setOpen(false);
  };

  useEffect(() => {
    if (defaultValue) {
      const found =
        options?.find((item: any) => item.value === defaultValue) ?? {};
      if (found) {
        setCurrent(found);
      } else {
        setCurrent(defaultObj);
      }
    } else {
      setCurrent(defaultObj);
    }
  }, [defaultValue, options]);

  return (
    <div className="w-full relative h-full">
      <div className="flex items-center space-x-2">
        <div
          onClick={() => setOpen(!open)}
          className={`${open && "rotate-180"}`}
        >
          <ArrowDownOutline height={16} width={16} />
        </div>
        <div className="flex space-x-3 whitespace-nowrap items-center">
          <div
            onClick={() => setOpen(!open)}
            className={`rounded-2xl border-2 px-6px py-2px flex items-center gap-1 cursor-pointer`}
            style={{ borderColor: current?.color }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: current?.color }}
            >
              <div className={`h-2 w-2 rounded-full`}></div>
            </div>
            <p className={`font-medium`} style={{ color: current?.color }}>
              {current.label}
            </p>
          </div>
          {/* {current?.value ? <p className="text-[var(--gray60)]">Operator 1</p> : ""} */}
          {open && (
            <div className="absolute p-3 z-[91] top-full mt-2 left-0 max-h-[210px] overflow-y-scroll designed-scroll bg-white card-shadow border border-[var(--gray20)] w-full rounded-[16px] space-y-2">
              {options.map((item: any, index: number) => (
                <button
                  key={index}
                  className="block w-full"
                  onClick={() => handleOptionClick(item)}
                >
                  <div
                    className={`rounded-2xl border px-6px py-2px flex items-center space-x-2 w-full`}
                    style={{ borderColor: item.color }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: current?.color }}
                    >
                      <div className={`h-2 w-2 rounded-full`}></div>
                    </div>
                    <p className="font-medium" style={{ color: item.color }}>
                      {item.label}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {open && <Closer handleClose={() => setOpen(false)} />}
    </div>
  );
};

export default CSelectColor;
