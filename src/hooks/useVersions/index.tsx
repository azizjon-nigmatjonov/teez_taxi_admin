import { useQuery } from "react-query";
import versionService from "../../services/versions";
import { useMemo } from "react";

export const useVersions = () => {
  const { data: version } = useQuery(["GET_APP_VERSIONS"], () => {
    return versionService.getList();
  });

  const VersionOptions = useMemo(() => {
    const arr = [];
    if (version?.data) {
      for (const key in version.data) {
        arr.push(key);
      }
    }

    return (
      arr?.map((item: any) => {
        return {
          label: item,
          value: item,
        };
      }) ?? []
    );
  }, [version?.data]);

  return {
    versions: version?.data,
    VersionOptions,
  };
};
