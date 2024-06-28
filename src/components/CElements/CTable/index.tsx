import { TableRow } from "@mui/material";

import {
  CTableHeadCell,
  CTableCell,
  CTableWrapper,
  CTableHead,
  CTableRow,
  CTableBody,
} from "./Details";
import { HeaderSettings } from "./Details/TableSettings";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import TabbleActions from "./Details/Actions";
import { DotsIcon } from "../../UI/IconGenerator/Svg";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { tableSizeAction } from "../../../store/tableSize/tableSizeSlice";
import { TableDelete } from "./Details/Actions/EditDelete";
import { PopoverDelete } from "./Details/Actions/EditDelete/PopOver";
import { usePermissions } from "../../../hooks/usePermissions";
import CPagination from "./Details/Pagination";
import { TableSettingsData } from "./Logic";
// import { TableData } from "./Logic";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import CustomScrollbar from "./ScrollComponent";

interface Props {
  meta?: {
    totalCount: number;
    pageCount: number;
  };
  headColumns: any[];
  bodyColumns?: object[] | any;
  clickable?: boolean;
  isLoading?: boolean;
  passRouter?: boolean;
  isResizeble?: boolean;
  tableSetting?: boolean;
  disablePagination?: boolean;
  autoHeight?: boolean;
  limitList?: number[];
  handleFilterParams: (val: any) => void;
  filterParams: any;
  handleActions?: (val: any, val2?: any) => void;
  idForTable?: string;
}

const CTable = ({
  meta = {
    totalCount: 1,
    pageCount: 1,
  },
  headColumns = [],
  bodyColumns = [],
  clickable = false,
  isLoading = false,
  passRouter = false,
  isResizeble = true,
  idForTable,
  disablePagination = false,
  autoHeight = false,
  limitList = [10, 30, 50],
  filterParams = { page: 1, perPage: 10 },
  handleFilterParams = () => {},
  handleActions = () => {},
  tableSetting = true,
}: Props) => {
  const tableSize = useSelector((state: any) => state.tableSize.tableSize);
  const location = useLocation();
  const tableSettings: Record<string, any> = {};
  const [headColHeight, setHeadColHeight] = useState(45);
  const [tableHeight, setTableHeight] = useState(500);
  //   const { currentSort } = useGetQueries();
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currDelete, setCurrDelete] = useState<any>({});
  const dispatch = useDispatch();
  const { checkPermission } = usePermissions();
  const tableRef: any = useRef(null);
  const { handleCheckbox } = TableSettingsData({
    filterParams,
    handleFilterParams,
  });
  const storedColumns = useSelector((state: any) => state.table.columns);

  const pageName: any = useMemo(() => {
    const strLen =
      location.pathname.split("/")[2].length +
      location.pathname.split("/")[1].length;

    let result = location.pathname.substring(0, strLen + 2);

    if (idForTable) result = result + "/" + idForTable;
    return result;
  }, [location, idForTable]);

  const pageColumns = storedColumns[pageName];

  // const [buttonPosition, setButtonPosition] = useState(10);
  // const draggingRef = useRef(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const collapsed = useSelector((state: any) => state.sidebar.collapsed);
  // const [showScroll, setShowScroll] = useState(true);
  // const [tablePosition, setTablePosition] = useState({ top: 140, left: 0 });
  // const { handleMouseDown } = TableData({
  //   tableRef,
  //   collapsed,
  //   scrollPosition,
  //   draggingRef,
  //   setScrollPosition,
  //   setButtonPosition,
  //   setShowScroll,
  // });

  const newHeadColumns: any = useMemo(() => {
    if (!tableSetting) return headColumns;
    const data: any = [];
    const arr = pageColumns ?? [];

    headColumns?.forEach((el: { id: string }) => {
      let id: any = el.id;
      if (id?.[0] && typeof id === "object") {
        id = id.join("");
      }
      if (arr.includes(id)) data.push(el);
    });

    return data;
  }, [pageColumns, headColumns, pageName, tableSetting]);

  useEffect(() => {
    const tableEl = document.getElementById("table");
    const moveXel = tableEl?.querySelector(".wrapper");
    if (moveXel) {
      moveXel.scrollTo(1200, 0); // Scrolls to 12000 pixels to the right
    }
  }, []);

  const bodySource = useMemo(() => {
    if (!bodyColumns?.length) return [];

    let list = [];

    if (bodyColumns.length < filterParams.perPage) {
      for (let i = 0; i <  filterParams.perPage; i++) {
        const obj: Record<string, any> = {};
        headColumns.forEach((col) => {
          obj[col.title] = "";
          obj.empty = true;
        });
        list.push(bodyColumns[i] ?? obj);
      }
    } else list = bodyColumns;

    const checks = (status: any) => {
      if (status === undefined) return true;
      return status;
    };

    return (
      list.map((item: any, index?: any) => ({
        ...item,
        is_freez: checks(item?.freez),
        is_delete: checks(item?.delete),
        is_edit: checks(item?.edit),
        is_view: checks(item?.view),
        index:
          filterParams?.page > 1
            ? filterParams?.page * filterParams.perPage -
              filterParams.perPage +
              (index + 1)
            : index + 1,
      })) ?? []
    );
  }, [bodyColumns, filterParams.perPage, filterParams.page, headColumns]);

  useEffect(() => {
    if (!isResizeble) return;

    const createResizableTable = function (table: any) {
      if (!table) return;
      const cols = table.querySelectorAll("th");

      [].forEach.call(cols, function (col: any, idx: number) {
        // Add a resizer element to the column
        const resizer = document.createElement("span");
        resizer.classList.add("resizer");
        // Set the height
        resizer.style.height = `${table.offsetHeight}px`;

        col.appendChild(resizer);
        setHeadColHeight(col.offsetHeight);
        createResizableColumn(col, resizer, idx);
      });
    };

    const createResizableColumn = function (
      col: any,
      resizer: any,
      idx: number
    ) {
      let x = 0;
      let w = 0;

      const mouseDownHandler = function (e: any) {
        x = e.clientX;

        const styles = window.getComputedStyle(col);
        w = parseInt(styles.width, 10);

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);

        resizer.classList.add("resizing");
      };

      const mouseMoveHandler = function (e: any) {
        const dx = e.clientX - x;
        const colID = col.getAttribute("id");
        const colWidth = w + dx;
        dispatch(tableSizeAction.setTableSize({ pageName, colID, colWidth }));
        dispatch(
          tableSizeAction.setTableSettings({
            pageName,
            colID,
            colWidth,
            isStiky: "ineffective",
            colIdx: idx - 1,
          })
        );
        col.style.width = `${colWidth}px`;
      };

      const mouseUpHandler = function () {
        resizer.classList.remove("resizing");
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      };

      resizer.addEventListener("mousedown", mouseDownHandler);
    };

    createResizableTable(document.getElementById("resizeMe"));
  }, [bodySource]);

  const calculateWidth = (colId: any, index: number) => {
    const colIdx = tableSettings?.[pageName]
      ?.filter((item: any) => item?.isStiky === true)
      ?.findIndex((item: any) => item?.id === colId);

    if (index === 0) {
      return 0;
    } else if (colIdx === 0) {
      return 0;
    } else if (
      tableSettings?.[pageName]?.filter((item: any) => item?.isStiky === true)
        .length === 1
    ) {
      return 0;
    } else {
      return tableSettings?.[pageName]
        ?.filter((item: any) => item?.isStiky === true)
        ?.slice(0, colIdx)
        ?.reduce((acc: any, item: any) => acc + item?.colWidth, 0);
    }
  };

  // const handleAutoSize = (colID, colIdx) => {
  //   dispatch(
  //     tableSizeAction.setTableSize({ pageName, colID, colWidth: "auto" })
  //   );
  //   const element = document.getElementById(colID);
  //   element.style.width = "auto";
  //   element.style.minWidth = "auto";
  //   dispatch(
  //     tableSizeAction.setTableSettings({
  //       pageName,
  //       colID,
  //       colWidth: element.offsetWidth,
  //       isStiky: "ineffective",
  //       colIdx,
  //     })
  //   );
  // };

  const handleGetHeightFn = () => {
    if (autoHeight) {
      setTableHeight(0);
      return;
    }
    let res = 0;
    bodySource?.forEach((item: any) => {
      if (item?.ref) res = res + item.ref.offsetHeight;
    });

    const currentHeight = res + headColHeight + 2;
    if (currentHeight && currentHeight > 400) setTableHeight(currentHeight);
    else setTableHeight(500);
  };

  const handleBodycolRef = (item: any, e: any) => {
    if (!e) return;
    item.ref = e;

    if (item?.index === bodySource?.length) {
      handleGetHeightFn();
    }
  };

  const tableActions = (el: any, status: string) => {
    if (status === "delete_by") {
      setCurrDelete(el);
      return;
    }

    if (status === "multiple") {
      handleCheckbox(el.id);
    }

    if (!checkPermission(status) || el.empty) return;

    handleActions(el, status);
  };

  // useEffect(() => {
  //   if (tableRef.current) {
  //     const rect = tableRef.current.getBoundingClientRect();
  //     setTablePosition({
  //       top: rect.top - 40,
  //       left: rect.left,
  //     });
  //   }
  // }, [collapsed, tableRef]);

  return (
    <div className="relative">
      {/* <div
        className="sticky z-[90] bg-red-500 left-0"
        style={{ top: `${tablePosition?.top || 0}px` }}
      >
        <div className="relative w-full">
          {showScroll && (
            <button
              onMouseDown={handleMouseDown}
              style={{
                position: "absolute",
                left: buttonPosition,
                cursor: "pointer",
                zIndex: "1",
              }}
              className={`w-[30%] top-[10px] h-[12px] px-4 bg-[var(--gray30)] rounded-[8px] justify-between flex items-center space-x-1 border border-[var(--gray20)]`}
            ></button>
          )}
        </div>
      </div> */}
      <div className="border border-[var(--gray20)] common-shadow rounded-[18px] overflow-hidden bg-white">
        {tableSetting ? (
          <HeaderSettings
            totalCount={meta.totalCount}
            len={bodyColumns?.length}
            filterParams={filterParams}
            tableActions={tableActions}
            pageName={pageName}
            headColumns={headColumns}
            pageColumns={pageColumns}
          />
        ) : (
          ""
        )}
        <div
          id="table"
          className={`overflow-x-scroll designed-scroll ${
            tableSetting ? "border-t border-[var(--gray20)]" : ""
          }`}
          ref={tableRef}
        >
          <div className="wrapper">
            <CTableWrapper
              count={meta.pageCount}
              totalCount={meta.totalCount}
              currentLimit={filterParams.perPage}
              loader={isLoading}
              height={tableHeight}
              passRouter={passRouter}
              filterParams={filterParams}
              handleFilterParams={handleFilterParams}
              disablePagination={disablePagination}
              dataLength={bodyColumns?.length}
            >
              <CTableHead>
                <CTableRow className="">
                  {newHeadColumns?.map((column: any, index: number) => (
                    <CTableHeadCell
                      id={column.id}
                      key={
                        column?.innerId ? column.innerId : index || column.id
                      }
                      style={{
                        padding: "10px 4px",
                        minWidth: tableSize?.[pageName]?.[column.id]
                          ? tableSize?.[pageName]?.[column.id]
                          : column?.width
                          ? column.width
                          : "auto",
                        width: tableSize?.[pageName]?.[column.id]
                          ? tableSize?.[pageName]?.[column.id]
                          : column?.width
                          ? column.width
                          : "auto",
                        position: tableSettings?.[pageName]?.find(
                          (item: any) => item?.id === column?.id
                        )?.isStiky
                          ? "sticky"
                          : "relative",
                        left: tableSettings?.[pageName]?.find(
                          (item: any) => item?.id === column?.id
                        )?.isStiky
                          ? calculateWidth(column?.id, index)
                          : "0",
                        backgroundColor: "#fff",
                        zIndex: tableSettings?.[pageName]?.find(
                          (item: any) => item?.id === column?.id
                        )?.isStiky
                          ? "1"
                          : "",
                      }}
                    >
                      <div
                        className="cell"
                        style={{ textAlign: column?.textAlign || "left" }}
                      >
                        {column.renderHead
                          ? Array.isArray(column.renderHead)
                            ? column.renderHead(
                                column.renderHead.map(
                                  (data: any) => column[data]
                                )
                              )
                            : column.renderHead()
                          : column?.id === "index"
                          ? "№"
                          : t(column.title)}
                        {/* {column?.filter && (
                  <div
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <CFilter
                      currentSort={currentSort}
                      up={`up_${column.id}`}
                      down={`down_${column.id}`}
                    />
                  </div>
                )} */}
                      </div>
                    </CTableHeadCell>
                  ))}
                </CTableRow>
              </CTableHead>

              <CTableBody
                loader={isLoading}
                columnscount={newHeadColumns?.length}
                rowsCount={filterParams.perPage}
                dataLength={bodySource?.length}
              >
                {bodySource?.length
                  ? bodySource?.map((item: any, rowIndex: any) => (
                      <TableRow
                        key={rowIndex}
                        ref={(e) => handleBodycolRef(item, e)}
                        className={
                          clickable && !item.empty && checkPermission("view")
                            ? "clickable"
                            : ""
                        }
                      >
                        {newHeadColumns.map((column: any, colIndex: number) => (
                          <CTableCell
                            key={colIndex}
                            className={`overflow-ellipsis ${tableHeight}`}
                            style={{
                              minWidth: "max-content",
                              padding: "0 4px",
                              position: tableSettings?.[pageName]?.find(
                                (item: any) => item?.id === column?.id
                              )?.isStiky
                                ? "sticky"
                                : "relative",
                              left: tableSettings?.[pageName]?.find(
                                (item: any) => item?.id === column?.id
                              )?.isStiky
                                ? calculateWidth(column?.id, colIndex)
                                : "0",
                              backgroundColor: "#fff",
                              zIndex: tableSettings?.[pageName]?.find(
                                (item: any) => item?.id === column?.id
                              )?.isStiky
                                ? "1"
                                : "",
                            }}
                          >
                            <div
                              style={{
                                textAlign: column?.textAlign || "left",
                              }}
                            >
                              {column.id !== "actions" && !item.empty ? (
                                <div
                                  onClick={() => {
                                    if (
                                      clickable &&
                                      column?.click !== "custom" &&
                                      column?.id !== "actions"
                                    )
                                      tableActions(item, "view");
                                  }}
                                >
                                  {column?.permission ? (
                                    <>
                                      {checkPermission(column.permission) && (
                                        <>
                                          {column.render
                                            ? Array.isArray(column.id)
                                              ? column.render(
                                                  column.id.map(
                                                    (data: any) => item[data]
                                                  )
                                                )
                                              : column.render(
                                                  item[column.id],
                                                  item
                                                )
                                            : item[column.id]}
                                        </>
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      {column.render
                                        ? Array.isArray(column.id)
                                          ? column.render(
                                              column.id.map(
                                                (data: any) => item[data]
                                              )
                                            )
                                          : column.render(item[column.id], item)
                                        : item[column.id]}
                                    </>
                                  )}
                                </div>
                              ) : (
                                ""
                              )}

                              {column.id === "actions" && !item.empty ? (
                                <div className="relative">
                                  {column?.actions?.length <= 2 ? (
                                    <div>
                                      <TableDelete
                                        element={item}
                                        tableActions={tableActions}
                                        actions={column.actions}
                                        filterParams={filterParams}
                                        checkPermission={checkPermission}
                                      />
                                      {currDelete.index === item.index ? (
                                        <PopoverDelete
                                          closePopover={(status) => {
                                            setCurrDelete({});
                                            if (status)
                                              tableActions(item, status);
                                          }}
                                        />
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  ) : (
                                    <>
                                      <button
                                        className="p-2"
                                        onClick={() =>
                                          setCurrentIndex(rowIndex)
                                        }
                                      >
                                        <DotsIcon />
                                      </button>
                                      <TabbleActions
                                        element={item}
                                        rowIndex={rowIndex}
                                        currentIndex={currentIndex}
                                        setCurrentIndex={setCurrentIndex}
                                        handleActions={tableActions}
                                        actions={column.actions}
                                        checkPermission={checkPermission}
                                      />
                                    </>
                                  )}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </CTableCell>
                        ))}
                      </TableRow>
                    ))
                  : ""}
              </CTableBody>
            </CTableWrapper>
          </div>
        </div>

        {bodyColumns?.length && !isLoading && !disablePagination ? (
          <CPagination
            filterParams={filterParams}
            count={meta.pageCount}
            totalCount={meta.totalCount}
            limit={filterParams.perPage}
            limitList={limitList}
            passRouter={passRouter}
            handleFilterParams={handleFilterParams}
            dataLength={bodyColumns?.length}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CTable;
