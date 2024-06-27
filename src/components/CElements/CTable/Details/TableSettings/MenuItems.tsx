import { useState } from "react";
import CCheckbox from "../../../../CElements/CCheckbox";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Collapse } from "@mui/material";

const CheckBox = ({
  element,
  defaultValue,
  handleFilterSave,
}: {
  defaultValue: any;
  element: any;
  handleFilterSave: (val: any) => void;
}) => {
  const [checked, setChecked] = useState(defaultValue);
  return (
    <CCheckbox
      element={{ label: element.title || element.id }}
      checked={checked}
      handleCheck={() => {
        handleFilterSave(element.id);
        setChecked((prev: boolean) => !prev);
      }}
    />
  );
};

const CheckBoxList = ({
  list,
  handleFilterSave,
}: {
  list: any;
  handleFilterSave: (val: any) => void;
}) => {
  return (
    <div className="grid gap-y-2">
      {list.map((item: any, index: number) => (
        <CheckBox
          key={index}
          element={item}
          defaultValue={item.checked}
          handleFilterSave={handleFilterSave}
        />
      ))}
    </div>
  );
};

export const MenuItem = ({
  element,
  handleFilterSave,
}: {
  element: any;
  handleFilterSave: (val: any) => void;
}) => {
  const [collapse, setCollapse] = useState(true);

  const GetUi = (el: any) => {
    switch (el.type) {
      case "checkbox":
        return (
          <CheckBoxList list={el.data} handleFilterSave={handleFilterSave} />
        );
      default:
        return <></>;
    }
  };

  return (
    <li className="w-[240px]">
      <button
        onClick={() => setCollapse((prev: boolean) => !prev)}
        className="mb-2 flex justify-between w-full"
      >
        <span>{element.label}</span>
        <div className={collapse ? "rotate-[180deg]" : ""}>
          <KeyboardArrowUpIcon />
        </div>
      </button>
      <Collapse in={collapse} timeout="auto" unmountOnExit>
        {GetUi(element)}
      </Collapse>
    </li>
  );
};
