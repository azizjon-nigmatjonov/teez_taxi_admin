import { Controller } from "react-hook-form";
import { DImageUploadUI } from "./DImageUpload";

interface Props {
  control?: any;
  isDelete?: boolean;
  defaultValue?: string;
  name: string;
  text?: string;
  label?: string;
  readOnly?: boolean;
  setValue?: (val?: any, val2?: any) => void;
  style?: any;
  zoomImg?: boolean;
  required?: boolean;
  onChange?: any;
}

export const CDriverImageUpload = ({
  control,
  isDelete = false,
  defaultValue = "",
  name,
  setValue = () => {},
  text = "",
  readOnly = false,
  label = "",
  style,
  zoomImg = false,
  required = false,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <DImageUploadUI
          name={name}
          onChange={onChange}
          error={error}
          isDelete={isDelete}
          defaultValue={defaultValue}
          setValue={setValue}
          text={text}
          readOnly={readOnly}
          label={label}
          style={style}
          zoomImg={zoomImg}
          required={required}
        />
      )}
    ></Controller>
  );
};
