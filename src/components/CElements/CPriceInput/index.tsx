import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import "./style.scss";
import CLabel from "../CLabel";
const defaultMaskOptions = {
  prefix: "",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: " ",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2,
  integerLimit: 100,
  allowNegative: true,  // Allow negative numbers
  allowLeadingZeroes: false,
};

const CPriceInput = ({
  name = "",
  label = "",
  required = false,
  maskOptions,
  value,
  error,
  onChange = () => {},
  ...inputProps
}: {
  name?: string;
  label?: string;
  required?: boolean;
  error?: any;
  maskOptions?: any;
  inputProps?: any;
  value?: any;
  placeholder?: any;
  onChange?: (val: any) => void;
}) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  const handleChange = (val: any) => {
    onChange(val);
  };

  return (
    <div className="CPriceInput relative">
      {label && <CLabel title={label} required={required} />}
      <MaskedInput
        mask={currencyMask}
        {...inputProps}
        value={value ?? ""}
        onChange={handleChange}
      />
      {error?.[name]?.message ? (
        <p className="text-sm text-[var(--error)] absolute left-1 -bottom-5 whitespace-nowrap">
          {error[name].message}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

CPriceInput.defaultProps = {
  inputMode: "numeric",
  maskOptions: {},
};

export default CPriceInput;
