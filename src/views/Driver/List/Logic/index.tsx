import useCQuery from "../../../../hooks/useCQuery";

export const breadCrumbItems = [
  {
    label: "Haydovchi",
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
      title: "Ism",
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
      title: "status",
      id: "status",
    },
    {
      title: "xizmat",
      id: "driver_service",
    },
    {
      title: "tasdiqlash",
      id: "is_verified_driver",
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
    key: `GET_DRIVER_LIST`,
    endpoint: `/driver-list`,
    params: {
      // page: 1,
    },
  });

  return { bodyData: data ?? {}, isLoading };
};
