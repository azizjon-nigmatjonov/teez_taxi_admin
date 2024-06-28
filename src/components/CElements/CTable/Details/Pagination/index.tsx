import { Pagination } from "@mui/material";
// import PaginationLimits from "./";
import { usePaginationCount } from "../../../../../hooks/usePaginationCount";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "../style.scss";

interface Props {
  limit: number;
  limitCount: number[];
  passRouter: boolean;
  filterParams: any;
  count: number;
  totalCount?: number;
  dataLength: number;
  handleFilterParams: (newPage: number) => void;
  setCurrentLimit: (newLimit: number) => void;
}

const CPagination = ({
  limit,
  limitCount,
  passRouter,
  totalCount,
  filterParams,
  handleFilterParams,
  setCurrentLimit,
  dataLength,
  ...props
}: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const count: any = usePaginationCount(props?.count);
  const navigate = useNavigate();

  function handleRouteActions(queryObj: {
    limit?: any;
    page: number;
    something?: any;
  }) {
    if (queryObj?.limit) queryObj.limit = parseInt(queryObj.limit, 10);
    if (!passRouter) {
      if (queryObj?.page)
        handleFilterParams({ ...filterParams, page: queryObj.page });
      if (queryObj?.limit) setCurrentLimit(limit ?? 10);
      return;
    }

    const newPage = queryObj.page.toString();
    const newQuery = {
      ...query,
      ...queryObj,
      page: newPage,
    };
    const queryParams = createSearchParams(newQuery);
    navigate({
      pathname: pathname,
      search: queryParams.toString(),
    });
  }

  return (
    <div className="table__pagination  flex items-center justify-between border-t border-lightGray px-3">
      <div>
        {/* <PaginationLimits /> */}
      </div>
      <Pagination
        onChange={(e, val) => {
          console.log("e pagination", e);
          handleRouteActions({ page: val });
        }}
        {...props}
        count={count.tableCount}
        page={filterParams?.page || 1}
        defaultPage={filterParams?.page || 1}
      />
    </div>
  );
};

export default CPagination;
