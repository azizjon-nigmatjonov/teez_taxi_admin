import { useQuery } from "react-query";
import request from "../../utils/request";
import { createUrl } from "../../utils/createUrl";
import toast from "react-hot-toast";
import { getStoredFilters } from "../../components/UI/Filter/Logic";

export const customRequest = async (arg: any, endpoint: any) => {
  const params = arg.queryKey[1];
  const param = arg.queryKey[2];

  try {
    const response: any = await request.get(createUrl(endpoint, params, param));

    if (response.success) {
      return response;
    } else {
      throw Error();
    }
  } catch (error: any) {
    toast.error(error.data.error?.message ?? "Error");
    throw Error(error);
  }
};

const useCQuery = ({
  key,
  params = {},
  param = "",
  endpoint,
  options = {},
}: {
  key: string;
  params: any;
  param?: any;
  endpoint: any;
  options?: any;
}) => {
  const { filterParams } = getStoredFilters({});
  const { page, perPage } = filterParams;
  params.page = page || 1;
  params.perPage = perPage || 10;

  return useQuery(
    [key, { ...params, id: null }, param],
    (arg) => customRequest(arg, endpoint),
    { ...options, keepPreviousData: Boolean(params) }
  );
};

export default useCQuery;
