import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Closer } from "../../../../UI/Closer";
import CCheckbox from "../../../../CElements/CCheckbox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Collapse } from "@mui/material";
import { formatNumberWithSpaces } from "../../../../../utils/formatMoney";

const MenuItem = ({ element }: { element: any }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <li>
      <button
        onClick={() => setCollapse((prev: boolean) => !prev)}
        className="mb-2 flex space-x-5"
      >
        <span>{element.label}</span>
        <div className={collapse ? "rotate-[180deg]" : ""}>
          <KeyboardArrowUpIcon />
        </div>
      </button>
      <Collapse in={collapse} timeout="auto" unmountOnExit>
        <CCheckbox element={{ label: element.sub_label }} />
      </Collapse>
    </li>
  );
};

const SettingDropdown = ({
  menuList = [],
}: {
  menuList: any;
  setOpen: (val: boolean) => void;
}) => {
  return (
    <div className="absolute right-0 top-[25px] bg-white border border-[var(--gray20)] common-shadow rounded-[12px] z-[92] min-w-[150px] min-h-[100px] whitespace-nowrap p-5">
      <ul>
        {menuList.map((item: {}, index: number) => (
          <MenuItem key={index} element={item} />
        ))}
      </ul>
    </div>
  );
};

const menuList = [
  {
    label: "Qo'shma o'chirish funksiyasi",
    sub_label: "Multiple",
  },
];

export const HeaderSettings = ({
  totalCount,
  len,
}: {
  totalCount: number | undefined;
  len: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-[40px] flex items-center justify-between px-5">
      <p className="text-[var(--gray)]">
        {totalCount ? formatNumberWithSpaces(totalCount) + ` tadan 1-${len} tasi` : ""}
      </p>
      <button onClick={() => setOpen(true)} className="relative">
        <SettingsIcon />

        {open && <SettingDropdown setOpen={setOpen} menuList={menuList} />}
      </button>
      {open && <Closer handleClose={() => setOpen(false)} classes="z-[91]" />}
    </div>
  );
};
