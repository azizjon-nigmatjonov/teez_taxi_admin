import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../../../store/filterParams";
import { useLocation } from "react-router-dom";

interface Props {
  idForFilter?: string;
  filterParams?: [];
  setClear: (val: boolean) => void;
}

export const FilterData = ({ idForFilter, filterParams, setClear }: Props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const filterDefaults = useSelector((state: any) => state.filter.filter);

  const pageName: any = useMemo(() => {
    const strLen =
      location.pathname.split("/")[2].length +
      location.pathname.split("/")[1].length;

    let result = location.pathname.substring(1, strLen + 2);

    if (idForFilter) result = result + "/" + idForFilter;
    return result;
  }, [location, idForFilter]);

  const defaultValue = useMemo(() => {
    if (filterDefaults[pageName]) {
      return filterDefaults[pageName];
    }
    return {};
  }, [filterDefaults[pageName], pageName]);

  const handleSaveFilter = (val: any) => {
    dispatch(filterActions.setFilterData({ pageName, filterParams: val }));
  };

  const clearFilter = (key: string, val?: any) => {
    const params: any = key === "all" ? {} : { ...filterParams };

    for (const i in params) {
      if (i === key) {
        if (val) {
          params[i] = params[i].filter((item: any) => item.value !== val);
        } else {
          delete params[i];
        }
      }
    }

    setTimeout(() => {
      handleSaveFilter(params);
    }, 0);

    setClear(false);
    setTimeout(() => {
      setClear(true);
    }, 100);
  };

  return {
    pageName,
    handleSaveFilter,
    filters: defaultValue,
    clearFilter,
  };
};

export const getStoredFilters = ({ idForFilter }: { idForFilter?: string }) => {
  const location = useLocation();
  const filterDefaults = useSelector((state: any) => state.filter.filter);
  const pageName: any = useMemo(() => {
    const strLen =
      location.pathname.split("/")[2].length +
      location.pathname.split("/")[1].length;

    let result = location.pathname.substring(1, strLen + 2);

    if (idForFilter) result = result + "/" + idForFilter;
    return result;
  }, [location, idForFilter]);

  const filters = useMemo(() => {
    if (filterDefaults[pageName]) {
      return filterDefaults[pageName];
    }
    return {};
  }, [filterDefaults[pageName], pageName]);

  return { filterParams: filters };
};

export const FilterFunctions = ({
  store = false,
  idForFilter = "",
  filterParams = [],
}: {
  store?: boolean;
  idForFilter?: string;
  filterParams: any;
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const filterDefaults = useSelector((state: any) => state.filter.filter);

  const pageName: any = useMemo(() => {
    const strLen =
      location.pathname.split("/")[2].length +
      location.pathname.split("/")[1].length;

    let result = location.pathname.substring(1, strLen + 2);

    if (idForFilter) result = result + "/" + idForFilter;
    return result;
  }, [location, idForFilter]);

  const storeFilters = (val: any) => {
    dispatch(filterActions.setFilterData({ pageName, filterParams: val }));
  };

  const filters = useMemo(() => {
    if (filterDefaults[pageName]) {
      return filterDefaults[pageName];
    }
    return {};
  }, [filterDefaults[pageName], pageName]);

  const collectFilter = ({
    type,
    val,
    status,
  }: {
    type: string;
    val: any;
    status?: string;
  }) => {
    const obj: any = {};
    if (!val) return;
    if (status === "arr") {
      const arr = filterParams[type] ?? [];

      const found = arr.find(
        (item: { value: any }) => item.value === val.value
      );
      if (found) {
        obj[type] = arr.filter((item: any) => item.value !== val.value);
      } else {
        obj[type] = [...arr, val];
      }
    } else {
      obj[type] = val;
    }

    if (store) {
      storeFilters({ ...filterParams, ...obj });
    }
  };

  return { collectFilter, storeFilters, filterParams: filters };
};
