import { Skeleton } from "@mui/material";
import { memo, useMemo } from "react";
import "./style.scss";

interface Props {
  isVisible: boolean,
  rowsCount: number,
}

const TableLoader = ({
  isVisible = false,
  rowsCount = 12,
}: Props) => {
  const rows = useMemo(() => {
    return new Array(rowsCount - 1).fill(0);
  }, [rowsCount]);

  if (!isVisible) return null;

  return (
    <div className="ctableLoader">
      <div className="wrapper">
        {rows?.map((i, index) => (
          <div key={i + index} className="row">
            <Skeleton style={{ height: '100%', borderRadius: '10px', background: "var(--gray20)" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(TableLoader);
