import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { SearchIcon } from "../../UI/IconGenerator/Svg";

interface Props {
  handleChange: (val: any) => void;
  delay?: number;
  classes?: string;
  defaultValue?: string | number;
}

const CSearchInput = ({
  handleChange = () => {},
  delay = 500,
  classes = "",
  defaultValue = "",
}: Props) => {
  const [value, setValue]: any = useState(null);
  const debounce = useDebounce((search: any) => {
    setValue(search);
    handleChange(search);
  }, delay);

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div
      className={`relative bg-white rounded-[8px] border flex justify-center items-center h-[40px] px-5 ${
        value ? "border-[var(--primary)]" : "border-[var(--gray20)] common-shadow"
      }`}
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <SearchIcon fill={value ? 'var(--primary)' : "#9092A3"} />
      </div>
      <input
        onChange={(e) => debounce(e.target.value)}
        defaultValue={defaultValue}
        type="text"
        placeholder="Qidiruv..."
        className={`w-[150px] bg-transparent h-full outline-none pl-5 pr-5 text-[var(--black)] placeholder-gray rounded-[8px] ${classes}`}
      />
    </div>
  );
};

export default CSearchInput;
