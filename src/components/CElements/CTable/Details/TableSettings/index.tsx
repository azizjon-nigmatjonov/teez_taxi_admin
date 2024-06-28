import { useEffect, useMemo, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Closer } from "../../../../UI/Closer";
import { formatNumberWithSpaces } from "../../../../../utils/formatMoney";
import { MenuItem } from "./MenuItems";
import { DeleteElements } from "./Delete";
import { tableStoreActions } from "../../../../../store/table";
import { useDispatch } from "react-redux";

const SettingDropdown = ({
  menuList = [],
  handleFilterSave,
}: {
  menuList: any;
  setOpen: (val: boolean) => void;
  handleFilterSave: (val: any) => void;
}) => {
  return (
    <div className="absolute right-0 top-[25px] bg-white border border-[var(--gray20)] common-shadow rounded-[12px] z-[92] min-w-[150px] min-h-[100px] whitespace-nowrap p-5">
      <ul className="grid gap-y-5 max-h-[400px] overflow-y-scroll designed-scroll">
        {menuList.map((item: {}, index: number) => (
          <MenuItem
            key={index}
            element={item}
            handleFilterSave={handleFilterSave}
          />
        ))}
      </ul>
    </div>
  );
};

export const HeaderSettings = ({
  totalCount,
  len = 0,
  filterParams,
  tableActions,
  pageName,
  pageColumns = [],
  headColumns = [],
}: {
  filterParams: any;
  totalCount: number | undefined;
  len: number;
  pageName: string;
  headColumns: any;
  pageColumns: any;
  tableActions: (el: any, status: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleFilterSave = (id: any) => {
    let arr: any = pageColumns;

    if (id?.[0] && typeof id === "object") {
      id = id.join("");
    }

    if (arr.includes(id)) {
      arr = arr.filter((item: string) => item !== id);
    } else {
      arr = [...arr, id];
    }

    dispatch(tableStoreActions.setColumns({ pageName, payload: arr }));
  };

  useEffect(() => {
    if (!pageColumns?.length && headColumns?.length) {
      setTimeout(() => {
        dispatch(
          tableStoreActions.setColumns({
            pageName,
            payload: headColumns.map((item: { id: any }) => {
              if (typeof item.id === "object") {
                return item.id.join("");
              } else {
                return item.id;
              }
            }),
          })
        );
      }, 500);
    }
  }, [pageColumns, headColumns]);

  const menuList = useMemo(() => {
    return [
      // {
      //   label: "Bo'lim sliderligi",
      //   id: "",
      //   type: ""
      // },
      {
        label: "Aktiv bo'limlar",
        id: "columns",
        type: "checkbox",
        data: headColumns?.map((item: { id: string; checked: boolean }) => {
          let id: any = item.id;
          if (id?.[0] && typeof id === "object") {
            id = id.join("");
          }
          if (pageColumns.includes(id)) {
            item.checked = true;
          } else {
            item.checked = false;
          }
          return item;
        }),
      },
    ];
  }, [headColumns, pageColumns]);

  return (
    <div className="h-[40px] flex items-center justify-between px-5">
      <p className="text-[var(--gray)]">
        {totalCount
          ? formatNumberWithSpaces(totalCount) + ` tadan 1-${len} tasi`
          : ""}
      </p>
      <div className="flex items-center space-x-5">
        <DeleteElements
          filterParams={filterParams}
          tableActions={tableActions}
        />

        <button onClick={() => setOpen(true)} className="relative">
          <SettingsIcon />

          {open && (
            <SettingDropdown
              setOpen={setOpen}
              menuList={menuList}
              handleFilterSave={handleFilterSave}
            />
          )}
        </button>
      </div>
      {open && <Closer handleClose={() => setOpen(false)} classes="z-[91]" />}
    </div>
  );
};
