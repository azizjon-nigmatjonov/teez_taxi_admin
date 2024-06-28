import { Paper } from "@mui/material";
import EmptyDataComponent from "../../../UI/EmptyDataComponent";
import "./style.scss";
import { ReactNode } from "react";
import TableLoader from "./TableLoader";

interface Props {
  loader: boolean;
  height: any;
  count: number;
  totalCount?: number;
  currentLimit: number;
  passRouter: boolean;
  filterParams: any;
  tableStyle?: object;
  wrapperStyle?: object;
  handleFilterParams: (newPage: any) => void;
  children: ReactNode;
  disablePagination?: any;
  dataLength: number;
}

export const CTableWrapper = ({
  loader,
  height,
  tableStyle = {},
  wrapperStyle = {},
  children,
}: Props) => {
  return (
    <Paper className="CTableContainer" style={wrapperStyle}>
      <div
        className="table"
        style={{
          height: height ? height : "auto",
          overflow: loader ? "hidden" : "auto",
          ...tableStyle,
        }}
      >
        <table id="resizeMe">{children}</table>
      </div>
    </Paper>
  );
};

export const CTableHead = ({ children }: { children: ReactNode }) => {
  return <thead className="CTableHead">{children}</thead>;
};

export const CTableHeadRow = ({ children }: { children: ReactNode }) => {
  return <tr className="CTableHeadRow">{children}</tr>;
};

export const CTableHeadCell = ({
  children,
  className = "",
  buttonsCell = false,
  ...props
}: {
  children: ReactNode;
  className?: string;
  buttonsCell?: any;
  id: any;
  style: any;
}) => {
  return (
    <th {...props} className="sticky">
      {children}
    </th>
  );
};

export const CTableBody = ({
  children,
  rowsCount,
  loader,
  ref,
  dataLength,
  ...props
}: {
  children: ReactNode;
  rowsCount: number;
  loader: boolean;
  ref?: any;
  dataLength: any;
  columnscount?: any;
}) => {
  return (
    <>
      <TableLoader isVisible={loader} rowsCount={rowsCount} />
      <tbody className="CTableBody" {...props} ref={ref}>
        {!loader && children}
        <EmptyDataComponent isVisible={dataLength < 1 && !loader} />
      </tbody>
    </>
  );
};

export const CTableRow = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <tr className={`CTableRow ${className}`} {...props}>
      {children}
    </tr>
  );
};

export const CTableCell = ({
  children,
  className = "",
  buttonsCell = false,
  ...props
}: {
  children: ReactNode;
  className: string;
  buttonsCell?: boolean;
  onClick?: (val: any) => void;
  style?: any;
}) => {
  return (
    <td
      className={`CTableCell ${className} ${buttonsCell ? "buttonsCell" : ""}`}
      {...props}
    >
      {children}
    </td>
  );
};

