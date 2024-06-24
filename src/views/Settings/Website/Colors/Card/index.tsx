import { useState } from "react";
import CCard from "../../../../../components/CElements/CCard";
import AddButton from "../../../../../components/UI/Buttons/AddButton";

const Card = ({ title, value }: { title: string; value: string }) => {
  const [newValue, setNewValue] = useState(value);
  return (
    <div className="w-full rounded-[12px] overflow-hidden">
      <div className="h-[220px]" style={{ backgroundColor: value }}></div>
      <div
        className="h-[100px] p-5 capitalize flex jusify-between flex-col"
        style={{ backgroundColor: value + "bb" }}
      >
        <h3>{title}</h3>
        <div className="space-y-4">
          <span>HEX:</span>
          <input
            type="text"
            value={newValue}
            onChange={(e: any) => setNewValue(e.target.value)}
            className="bg-white ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export const CardWrapper = ({
  title = "",
  list = [],
}: {
  title: string;
  list: any;
}) => {
  return (
    <CCard
      title={title}
      extra={<AddButton text="Saqlash" permission="edit" iconLeft={false} />}
    >
      <div className="grid grid-cols-5 gap-5">
        {Object.entries(list).map(([key, value]: any) => (
          <div key={key}>
            <Card title={key} value={value} />
          </div>
        ))}
      </div>
    </CCard>
  );
};
