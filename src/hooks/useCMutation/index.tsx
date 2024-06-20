import request from "../../utils/request";
import { useMutation, useQueryClient } from "react-query";
import { createUrl } from "../../utils/createUrl";
import toast from "react-hot-toast";

interface FetcherParams {
  method: "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: string;
  param?: string;
  params?: Record<string, any>;
  payload?: any;
}

interface UseCMutateParams {
  key: string;
  method: "POST" | "PUT" | "PATCH" | "DELETE";
  endpoint: string;
}

const fetcher = ({
  method,
  endpoint,
  param,
  params = {},
  payload,
}: FetcherParams) => {
  const url = createUrl(endpoint, params, param);

  switch (method) {
    case "POST":
      return request.post(url, payload);
    case "PUT":
      return request.put(url, payload);
    case "PATCH":
      return request.patch(url, payload);
    case "DELETE":
      return request.delete(url, { data: payload });
    default:
      return null;
  }
};

export const useCMutation = ({ key, method, endpoint }: UseCMutateParams) => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({
      payload,
      param,
      params = {},
    }: Omit<FetcherParams, "method" | "endpoint">) =>
      fetcher({ method, endpoint, param, params, payload }),
    {
      onSuccess: (data: any) => {
        if (data.success) {
          queryClient.invalidateQueries(key);
          toast.success(
            data.data?.message ?? "Muvaffaqiyatli amalga oshirildi!"
          );
        } else {
          throw new Error(data.error?.message ?? "Error");
        }
      },

      onError: (error: any) => {
        toast.error(
          error.data.error?.message ?? "An unexpected error occurred."
        );
      },
    }
  );
};
