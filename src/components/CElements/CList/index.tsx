import { useMemo } from "react";
import { WrapperCard } from "../../../components/UI/WrapperCard";
import CLabel from "../CLabel";
import { Reasons } from "../../../constants/reason";
interface Props {
  title?: string;
  list: [];
}

const CList = ({ title, list = [] }: Props) => {
  const newList = useMemo(() => {
    return list?.map((item: any) => {
      const found = Reasons.find((el: any) => el.value === item.reason_id);
      return {
        ...found,
        ...item,
      };
    });
  }, [list]);
  return (
    <WrapperCard classes="p-[0px] w-full mx-[0px]">
      {title && (
        <CLabel
          title={title}
          styles={{
            fontSize: "18px",
            fontWeight: 600,
            paddingBlock: "16px",
            paddingInline: "24px",
          }}
        />
      )}
      {newList?.length ? (
        <ul className="divide-y-[1px] divide-[#EAECF0]">
          {newList.map((item: any) => (
            <div className="flex items-center justify-between py-4 px-6 border-t-[1px] border-[#EAECF0]">
              <div className="flex items-center gap-3">
                <div
                  className={`w-[10px] h-[10px] rounded-full`}
                  style={{ backgroundColor: item.color }}
                />
                <li>{item.label}</li>
              </div>
              <div
                className={`py-[2px] px-2 rounded-2xl`}
                style={{ backgroundColor: item.color + "15" }}
              >
                <p
                  className="text-xs font-medium"
                  style={{ color: item.color }}
                >
                  {item.count}
                </p>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className="flex justify-center my-5">
          <img src="/images/no-data.png" width={200} alt="empty" />
        </div>
      )}
    </WrapperCard>
  );
};

export default CList;
