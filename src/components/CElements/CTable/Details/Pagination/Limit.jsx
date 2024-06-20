import { useMemo, useState } from "react";
import { Popover } from "@mui/material";
// import { KeyboardArrowDownFilled, KeyboardArrowUp } from "@mui/icons-material";
import cls from "./style.module.scss";

export default function PaginationLimits({
  limit,
  limitCount,
  handleRouteActions = () => {},
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickPopup = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLimitActions(i) {
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
        <span className={cls.text}>Показать от {limit}</span>
        {open ? "up" : "down"}
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
          {limitCount?.map((i) => (
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
