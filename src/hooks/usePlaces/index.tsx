import { useQuery } from "react-query";
import { useGetQueries } from "../../hooks/useGetQueries";
import regionService from "../../services/regions";
import { useEffect, useState } from "react";

export const usePlaces = () => {
  const { region, district } = useGetQueries();
  const [regionId, setRegionId]: any = useState(null);
  const [districtId, setDistrictId]: any = useState(null);
  const {
    data: regions,
    isLoading: getRegionsLoading,
    refetch: getRegionsRefetch,
  } = useQuery(["GET_REGION_LIST_GLOBAL"], () => {
    return regionService.getList();
  });

  const {
    data: districts,
    isLoading: getDistrictsLoading,
    refetch: getDistrictsRefetch,
  } = useQuery(
    ["GET_DIRSTRICTS_LIST_GLOBAL", regionId],
    () => {
      return regionService.getDistrict(regionId);
    },
    {
      enabled: !!regionId,
    }
  );

  const {
    data: villages,
    isLoading: getVillagesLoading,
    refetch: getVillagesRefetech,
  } = useQuery(
    ["GET_DIRSTRICTS_LIST_GLOBAL", districtId],
    () => {
      return regionService.getVillage(districtId);
    },
    {
      enabled: !!districtId,
    }
  );

  const setLocalIds = (type: string, value: any) => {
    if (type === "district") setDistrictId(value);
    if (type === "region") setRegionId(value);
  };

  useEffect(() => {
    if (region) setRegionId(region);
    if (district) setDistrictId(district);
  }, [region, district]);

  return {
    regionList: regions?.data ?? [],
    getRegionsLoading,
    getRegionsRefetch,
    districtList: districts?.data ?? [],
    getDistrictsLoading,
    getDistrictsRefetch,
    villageList: villages?.data ?? [],
    getVillagesLoading,
    getVillagesRefetech,
    setLocalIds
  };
};
