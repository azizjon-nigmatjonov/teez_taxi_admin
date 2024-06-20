interface Props {
  value?: any;
  option: any;
  handleChange?: (val: any) => void;
}

const CRadio = ({ value, option, handleChange = () => {} }: Props) => {
  return (
    <>
      <div
        onClick={() => handleChange(option.value)}
        className="px-5 h-[40px] common-shadow rounded-[8px] border border-[var(--gray20)] bg-white w-full flex items-center justify-between cursor-pointer"
      >
        <span className="text-black font-normal">{option.label}</span>
        <div
          className={`h-[18px] w-[18px] rounded-full ${
            value == option.value
              ? "border-4 border-[var(--main)]"
              : "border-2 border-[var(--gray20)]"
          }`}
        />
      </div>
    </>
  );
};

export default CRadio;
