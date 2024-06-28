import React, { useState } from "react";
import "./style.scss";
import { Closer } from "../Closer";
import { FilterData } from "./Logic";
import { FilterHeader } from "./Header";
// import { CloseIcon } from "../IconGenerator/Svg";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  children?: React.ReactNode;
  filter: boolean;
  classes?: any;
  minWidth?: string;
  filterParams: any;
  setFilterParams: (val: any) => void;
  setOpen: (val: any) => void;
}

const Filters = ({
  children,
  filter = false,
  minWidth = "360px",
  filterParams = {},
  setOpen = () => {},
}: Props) => {
  const [clear, setClear] = useState(true);
  const { handleSaveFilter, clearFilter } = FilterData({
    setClear,
    filterParams,
  });

  const closeFilter = () => {
    setClear(false);
    setOpen(false);
  };

  const openFilter = () => {
    setClear(true);
    setOpen(true);
  };

  const handleSubmit = () => {
    handleSaveFilter(filterParams);
    closeFilter();
  };

  return (
    <>
      <FilterHeader
        filter={filter}
        clearFilter={clearFilter}
        openFilter={openFilter}
      />

      {filter && (
        <div
          className={`filterDrawer fixed duration-200 flex h-[100vh] right-0 z-[99] overflow-scroll`}
        >
          <div
            className="relative ml-auto bg-white z-[99] h-full"
            style={{ width: minWidth }}
          >
            <div className="w-full h-[100vh] absolute bottom-[-20%] right-0 bg-white z-[1]"></div>
            <div
              className="p-7 border-l border-[var(--gray20)] relative z-[2]"
              style={{ width: minWidth }}
            >
              {clear && (
                <div>
                  <div className="flex justify-between items-center w-full mb-5">
                    <h2 className="text-[var(--black)] text-xl font-[600]">
                      Filtrlar
                    </h2>
                    <button onClick={() => setOpen(!filter)}>
                      <CloseIcon />
                    </button>
                  </div>
                  <div className="scrollchildren">{children}</div>
                  <div className="mt-6 flex space-x-3">
                    <button
                      className="custom-btn"
                      onClick={() => handleSubmit()}
                    >
                      Tasdiqlash
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => clearFilter("all")}
                    >
                      Tozalash
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {filter && (
        <Closer
          handleClose={() => {
            setOpen(!filter);
          }}
          classes="bg-[#15151555] z-[98] w-[calc(100vw - 300px)]"
          styles={{ width: `calc(100vw - ${minWidth})` }}
        />
      )}
    </>
  );
};

export default Filters;
