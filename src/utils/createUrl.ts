import qs from "query-string";
import { filterParams } from "./filterParams";

// Define the type for the parameters to ensure proper type checking
type Params = Record<string, any>;

export const createUrl = (
  endpoint = "",
  params: Params = {},
  param = ""
): string => {
  const filteredParams = filterParams(params);
  const queryString =
    Object.keys(filteredParams).length > 0
      ? `?${qs.stringify(filteredParams, { arrayFormat: "index" })}`
      : "";

  return `${endpoint}${param ? `/${param}` : ""}${queryString}`;
};
