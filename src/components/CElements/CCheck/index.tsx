interface Props {
  label?: string;
  value: any;
  checked: any;
  onClick?: (val?: any) => void
}

const CCheck = ({ label = "", value, checked, ...props }: Props) => {
  return (
    <div className="cursor-pointer bg-white border border-[var(--lineGray)] flex justify-between items-center rounded-[12px] h-[45px] px-[18px]" {...props}>
      <p>{label}</p>

      <div
        className={`w-[18px] h-[18px] rounded-full ${
          checked === value
            ? "border-[3px] border-[var(--main)]"
            : "border-[1.5px] border-[var(--gray)]"
        }`}
      ></div>
    </div>
  );
};

export default CCheck;
