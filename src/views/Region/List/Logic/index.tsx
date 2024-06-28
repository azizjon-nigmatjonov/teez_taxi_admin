import useCQuery from "../../../../hooks/useCQuery";

export const breadCrumbItems = [
  { label: "Viloyat ro'yxati", link: "/region/list" },
  // { label: "Yangi Buyurtma" },
];

export const TableData = () => {
  const headColumns = [
    {
      title: "",
      id: "index",
    },
    {
      title: "Ism",
      id: "name",
    },
    {
      title: "masofa birligi",
      id: "distance_unit",
    },
    {
      title: "holat",
      id: "status",
    },
    {
      title: "",
      id: "actions",
      actions: ["view", "edit", "delete"],
    },
  ];

  return { headColumns };
};

export const FetchFunction = ({ filterParams }: { filterParams: any }) => {
  const { data, isLoading } = useCQuery({
    key: `GET_REGION_LIST`,
    endpoint: `/region-list`,
    params: {
      page: filterParams.page || 1,
      perPage: filterParams.perPage || 10
    },
  });

  return { bodyData: data?.data ?? [], isLoading };
};
