import { useMemo, useState } from "react";
import { Popover } from "@mui/material";
// import { KeyboardArrowDownFilled, KeyboardArrowUp } from "@mui/icons-material";
import cls from "./style.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
  limit: number;
  limitList: any;
  handleRouteActions: (val: any) => void;
}

export default function PaginationLimits({
  limit = 10,
  limitList = [],
  handleRouteActions = () => {},
}: Props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickPopup = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLimitActions(i: any) {
    handleRouteActions({ limit: i });
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = useMemo(() => {
    return open ? "simple-popover" : undefined;
  }, [open]);

  return (
    <>
      <div className={cls.limitBtn} onClick={handleClickPopup}>
        <span className={cls.text}>{limit} ta dan</span>
        {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <ul className={cls.limitsList}>
          {limitList?.map((i: number) => (
            <li
              key={i}
              onClick={(e) => {
                e.preventDefault();
                handleLimitActions(i);
              }}
            >
              {i}
            </li>
          ))}
        </ul>
      </Popover>
    </>
  );
}
