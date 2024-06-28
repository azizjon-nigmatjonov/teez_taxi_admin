import useCQuery from "../../../../hooks/useCQuery";

export const breadCrumbItems = [
  {
    label: "Yo'lovchilar",
    link: "/passenger/list",
  },
  {
    label: "Ro‘yxat",
  },
];

export const TableData = () => {
  const headColumns = [
    {
      title: "",
      id: "index"
    },
    {
      title: "Sarlavha",
      id: "full_name",
    },
    {
      title: "tavsif",
      id: "birthday",
    },
    {
      title: "Actions",
      id: "actions",
      actions: ["edit", "delete"],
    },
  ];

  return { headColumns };
};

export const FetchFunction = () => {
  const { data, isLoading } = useCQuery({
    key: `GET_PASSENGER_NEWS`,
    endpoint: `/rider-news-list`,
    params: {
      // page: 1,
    },
  });

  return { bodyData: data ?? {}, isLoading };
};
