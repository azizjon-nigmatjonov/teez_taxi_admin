import useCQuery from "../../../../hooks/useCQuery";

export const breadCrumbItems = [
  {
    label: "Haydovchi daromadi",
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
      title: "haydovchi daromadi'",
      id: "birthday",
    },
    {
      title: "admin komissiyasi",
      id: "contact_number",
    },
    {
      title: "hamyon balansi",
      id: "status",
    },
    {
      title: "umumiy yechb olingan summa",
      id: "driver_service",
    },
  ];

  return { headColumns };
};

export const FetchFunction = () => {
  const { data, isLoading } = useCQuery({
    key: `GET_DRIVERI_INCOME_LIST`,
    endpoint: `/driver-earning-list`,
    params: {
      // page: 1,
    },
  });

  return { bodyData: data ?? {}, isLoading };
};
