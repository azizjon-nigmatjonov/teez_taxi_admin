import { Button } from "@mui/material";
import { LinearSortIcon } from "../IconGenerator/Svg";
// import { BiX } from "react-icons/bi";
import { t } from "i18next";
import { ReactNode } from "react";
import Filters from "./Filter";
import { useSearchParams } from "react-router-dom";

interface Props {
  text?: string;
  left?: ReactNode;
  open: boolean;
  onClick?: () => void;
  openFilter: () => void
  children?: any;
}

const FilterButton = ({ text = "", open, openFilter, left, children, ...props }: Props) => {
  const setSearchParams = useSearchParams()[1];
  
  const toggle = () => {
    openFilter();
    const defaults: any = {}

    if (!open) {
    } else setSearchParams(defaults);
  };

  return (
    <div className="relative">
      <div
        id={open ? "activeFilterButton" : "filterButton"}
        {...props}
      >
        <Button onClick={() => toggle()}>
          {left ? left : <span>{t(text)}</span>}
          <div className="icon">
            <div>
              {open ? (
                ""
                // <BiX color="#993701" size={16} />
              ) : (
                <LinearSortIcon />
              )}
            </div>
          </div>
        </Button>

        {children && open ? <Filters toggle={toggle}>{children}</Filters> : ""}
      </div>
    </div>
  );
};

export default FilterButton;
