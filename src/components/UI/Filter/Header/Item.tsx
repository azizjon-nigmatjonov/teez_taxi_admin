import { useTranslation } from "react-i18next";
import { CloseIcon } from "../../IconGenerator/Svg";
import { formatNumberWithSpaces } from "../../../../utils/formatMoney";
export const Items = ({
  obj,
  title,
  clearFilter = () => {},
}: {
  obj?: any;
  title: string;
  clearFilter: (val: string, val2?: any) => void;
}) => {
  if (title === "q") {
    return <></>;
  }
  const { t } = useTranslation();

  if (obj?.length === 2 && title === "money") {
    return (
      <div
        className="border whitespace-nowrap border-[var(--gray20)] common-shadow rounded-[8px] bg-white pl-3 pr-2 h-[40px] font-medium flex items-center space-x-3"
        title={title}
      >
        <span>
          {formatNumberWithSpaces(obj[0]) + ` so'm`} - {formatNumberWithSpaces(obj[1]) + ` so'm`}
        </span>
        <button onClick={() => clearFilter(title)}>
          <CloseIcon fill="var(--black)" />
        </button>
      </div>
    );
  }

  if (obj?.length > 0 && title !== "date") {
    return obj.map((item: any) => (
      <div
        className="border whitespace-nowrap border-[var(--gray20)] common-shadow rounded-[8px] bg-white pl-3 pr-2 h-[40px] font-medium flex items-center space-x-3"
        title={item?.value}
      >
        <span>{t(item?.label)}</span>
        <button onClick={() => clearFilter(title, item.value)}>
          <CloseIcon fill="var(--black)" />
        </button>
      </div>
    ));
  }

  if (title === "date" && obj?.length) {
    return (
      <div
        className="border whitespace-nowrap border-[var(--gray20)] common-shadow rounded-[8px] bg-white pl-3 pr-2 h-[40px] font-medium flex items-center space-x-3"
        title={title}
      >
        <span>
          {obj[0]} / {obj[1]}
        </span>
        <button onClick={() => clearFilter(title)}>
          <CloseIcon fill="var(--black)" />
        </button>
      </div>
    );
  }

  if (obj?.label) {
    return (
      <div
        className="border whitespace-nowrap border-[var(--gray20)] common-shadow rounded-[8px] bg-white pl-3 pr-2 h-[40px] font-medium flex items-center space-x-3"
        title={title}
      >
        <span>{t(obj?.label)}</span>
        <button onClick={() => clearFilter(title)}>
          <CloseIcon fill="var(--black)" />
        </button>
      </div>
    );
  }
};
