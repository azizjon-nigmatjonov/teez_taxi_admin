import { useTranslation } from "react-i18next";
import { ReactNode, useMemo } from "react";

interface Props {
  name: string;
  label?: string;
  register?: any;
  type?: string;
  placeholder?: string;
  classesInput?: string;
  errors?: any;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: any;
  defaultValue?: any;
  icon?: ReactNode;
}

export default function HFInput({
  name,
  label,
  register,
  type = "text",
  placeholder = "",
  classesInput = "",
  errors = {},
  disabled = false,
  required = false,
  errorMessage,
  defaultValue = "",
  icon,
  ...props
}: Props) {
  const { t } = useTranslation();
  const registerProps = useMemo(
    () => (register ? { ...register(name, { required }) } : {}),
    [name]
  );
  return (
    <div
      className={`w-full bg-[var(--softGray)] font-[500] relative`}
    >
      {label && (
        <p className="font-[500] mb-[6px]">
          {required ? <span className="text-[var(--error)] pr-1">*</span> : ""}
          {t(label)}
        </p>
      )}
      <div className="absolute left-4 top-4">{icon ? icon : ""}</div>
      <input
        type={type}
        placeholder={t(placeholder)}
        disabled={disabled}
        defaultValue={defaultValue}
        className={`w-full bg-transparent focus:border-[var(--main)] placeholder:text-[var(--gray)] rounded-[14px] px-[14px] pl-[40px] h-[50px] ${
          errors[name] ? "border border-[var(--error)]" : ""
        } ${classesInput}`}
        {...props}
        {...registerProps}
      />
      {errors[name]?.message && (
        <p className="text-sm text-[var(--error)] absolute -bottom-5">{t(errors[name].message || "")}</p>
      )}
    </div>
  );
}
