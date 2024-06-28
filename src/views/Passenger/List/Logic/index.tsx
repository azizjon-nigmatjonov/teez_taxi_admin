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
      id: "index",
    },
    {
      title: "ISm",
      id: "full_name",
    },
    {
      title: "tug'ulgan kun",
      id: "birthday",
    },
    {
      title: "aloqa raqami",
      id: "contact_number",
    },
    {
      title: "Holat",
      id: "status",
    },
    {
      title: "Actions",
      id: "actions",
      actions: ["view"],
    },
  ];

  return { headColumns };
};

export const FetchFunction = () => {
  const { data, isLoading } = useCQuery({
    key: `GET_PASSENGERS_LIST`,
    endpoint: `/rider-list`,
    params: {},
  });

  return { bodyData: data ?? [], isLoading };
};
