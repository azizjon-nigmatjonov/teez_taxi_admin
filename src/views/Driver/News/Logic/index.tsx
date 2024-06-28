import useCQuery from "../../../../hooks/useCQuery";

export const breadCrumbItems = [
  {
    label: "Haydovchi yangiliklari",
    link: "/driver/list",
  },
  {
    label: "Ro‘yxat",
  },
];

export const TableData = () => {
  const headColumns = [
    {
      title: "",
      id: "index",
    },
    {
      title: "tavsif",
      id: "full_name",
    },
    {
      title: "tavsif",
      id: "birthday",
    },
    {
      title: "",
      id: "actions",
      actions: ["edit", "delete"]
    }
  ];

  return { headColumns };
};

export const FetchFunction = () => {
  const { data, isLoading } = useCQuery({
    key: `GET_DRIVER_NEWS_LIST`,
    endpoint: `/driver-news-list`,
    params: {
      // page: 1,
    },
  });

  return { bodyData: data ?? {}, isLoading };
};
