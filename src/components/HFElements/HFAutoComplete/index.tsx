import { Controller } from "react-hook-form";
import CLabel from "../../CElements/CLabel";
import { CAutocomplete } from "../../CElements/CAutocomplete";

interface Props {
  label?: string;
  control: any;
  name: string;
  rules?: any;
  options: any;
  required?: boolean;
  handleChange: (val: string) => void;
}

export const HFAutoComplete = ({
  label,
  control,
  name,
  rules,
  options = [],
  required = false,
  handleChange,
}: Props) => {
  return (
    <div className="HFInput relative">
      {label && <CLabel title={label} required={required} />}
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{
          ...rules,
        }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <CAutocomplete options={options} error={error} handleChange={handleChange} handleSelect={onChange} />
        )}
      ></Controller>
    </div>
  );
};
