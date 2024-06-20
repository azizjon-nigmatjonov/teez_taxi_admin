import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useGetQueries = () => {
  const [searchParams] = useSearchParams();

  const query = Object.fromEntries(searchParams.entries());

  const params: any = useMemo(() => {
    const result = {
      currentLimit: query?.limit ? parseInt(query.limit) : 10,
      currentPage: query?.page ? parseInt(query.page) : 1,
      search: query?.search,
      currentTab: query?.tab,
      restaurant_id: query?.restaurant_id,
      currentSort: query?.sort,
      ...query
    };

    return result;
  }, [query]);

  return params;
};
