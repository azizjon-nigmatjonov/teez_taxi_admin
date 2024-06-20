import { useTranslation } from "react-i18next";
import {} from "../../../../../UI/IconGenerator/Svg";
import { ReactNode } from "react";

interface Props {
  active: boolean;
  text: string;
  icon: ReactNode;
  border?: boolean;
  show: boolean;
  onClick?: (value: any) => void
}

const Element = ({ active, text = "", icon, border = true, show = false, ...props }: Props) => {
  const { t } = useTranslation();
  if (!show) return
  return (
    <div
      className={`flex items-center space-x-[8px] px-4 ${
        active ? "cursor-pointer" : "cursor-not-allowed"
      }`}
      {...props}
    >
      {icon}
      <p
        className={` ${
          border ? "border-b border-[var(--darkerGray)]" : ""
        } border-grayDark py-3 w-full select-none whitespace-nowrap ${
          active ? "text-white" : "text-[var(--gray30)]"
        }`}
      >
        {t(text)}
      </p>
    </div>
  );
};

export default Element;
