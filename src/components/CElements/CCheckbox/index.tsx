import { useTranslation } from "react-i18next";
import { CheckLine } from "../../../components/UI/IconGenerator/Svg";

interface Props {
  element: any;
  checked?: boolean;
  handleCheck?: (val: any) => void;
}

const CCheckbox = ({
  element,
  handleCheck = () => {},
  checked = false,
}: Props) => {
  const { t } = useTranslation()
  return (
    <div
      onClick={() => handleCheck(element)}
      className="flex items-center gap-2 cursor-pointer px-16px rounded-lg border border-[var(--gray20)] common-shadow h-[40px] w-full whitespace-nowrap"
    >
      <div className="w-[18px] h-[18px]">
        <div
          className={`w-[18px] h-[18px] rounded-[4px] border-2 ${
            checked
              ? "border-[var(--main)]"
              : "border-[var(--gray20)]"
          }`}
        >
          {checked ? <CheckLine fill="var(--main)" /> : ""}
        </div>
      </div>
      <p>{t(element.label)}</p>
    </div>
  );
};

export default CCheckbox;
