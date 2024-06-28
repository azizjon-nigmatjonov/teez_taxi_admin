import useCQuery from "../../../../hooks/useCQuery";

export const breadCrumbItems = [
  { label: "Xizmat ro'yxati", link: "/service/list" },
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
      title: "viloyat",
      id: "region_id",
    },
    {
      title: "asosiy tarif",
      id: "base_fare",
    },
    {
      title: "minimal tarif",
      id: "minimum_fare",
    },

    {
      title: "Actions",
      id: "actions",
      actions: ["view", "edit", "delete"],
    },
  ];

  return { headColumns };
};

export const FetchFunction = () => {
  const { data, isLoading } = useCQuery({
    key: `GET_SERVICE_LIST`,
    endpoint: `/service-list`,
    params: {
      page: 1,
    },
  });

  return { bodyData: data ?? {}, isLoading };
};
