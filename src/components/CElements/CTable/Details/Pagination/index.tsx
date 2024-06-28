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
import PaginationLimits from "./Limit";

interface Props {
  limit: number;
  limitList: number[];
  passRouter: boolean;
  filterParams: any;
  count: number;
  totalCount?: number;
  dataLength: number;
  handleFilterParams: (newPage: number) => void;
}

const CPagination = ({
  limit,
  limitList,
  passRouter,
  totalCount,
  filterParams,
  handleFilterParams,
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
      const obj: any = { ...filterParams };

      if (queryObj?.page) {
        obj.page = queryObj.page;
      }

      if (queryObj?.limit) {
        obj.perPage = queryObj.limit;
      }

      handleFilterParams({ ...obj });
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
        <PaginationLimits
          limit={limit}
          handleRouteActions={handleRouteActions}
          limitList={limitList}
        />
      </div>
      <Pagination
        onChange={(_, val) => {
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
