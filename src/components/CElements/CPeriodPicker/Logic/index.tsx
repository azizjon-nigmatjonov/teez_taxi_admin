import { useGetQueries } from "../../../../hooks/useGetQueries";
import { useEffect, useMemo, useState } from "react";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { PickersShortcutsItem } from "@mui/x-date-pickers/PickersShortcuts";
import { Dayjs } from "dayjs";
import dayjs from "../../../../utils/deyjsSetUp";
import { DateRange } from "@mui/x-date-pickers-pro/models";

export const DateData = ({
  handleDropdown,
}: {
  handleDropdown: (val?: any) => void;
}) => {
  const { navigateQuery } = usePageRouter();
  const { start, end } = useGetQueries();
  const today = dayjs();
  const [value, setValue]: any = useState([today, today]);
  const [formatedValue, setFormatedValue] = useState([]);

  useEffect(() => {
    if (start && end) {
      const defaultStartDate = dayjs(start);
      const defaultEndDate = dayjs(end);
      setValue([defaultStartDate, defaultEndDate]);
    }
  }, [start, end]);

  const actionHandler = (e: any) => {
    const arr = e?.map((dateObj: any) => {
      const dayjsDate = dayjs(dateObj.$d);
      return dayjsDate.format("YYYY-MM-DD");
    });

    setValue(e)
    setFormatedValue(arr);
  };

  const handleSubmit = () => {
    if (start && end) {
      navigateQuery({
        start: formatedValue[0] ?? "",
        end: formatedValue[1] ?? "",
      });
    } else {
      // const arr = value?.map((dateObj: any) => {
      //   const dayjsDate = dayjs(dateObj.$d);
      //   return dayjsDate.format("YYYY-MM-DD");
      // });
      // navigateQuery({ start: arr[0], end: arr[1] });
    }

    handleDropdown(formatedValue);
  };

  const getFormatedDate = useMemo(() => {
    const arr = value?.map((dateObj: any) => {
      const dayjsDate = dayjs(dateObj.$d); // Create a dayjs object from the date
      return dayjsDate.format("MMM D, YYYY"); // Format the date
    });

    return arr;
  }, [value]);

  return { value, actionHandler, handleSubmit, getFormatedDate };
};

export const DateLabel = () => {
  const today = dayjs();
  const shortcutsItems: PickersShortcutsItem<DateRange<Dayjs>>[] = [
    { label: "Tozalash", getValue: () => [null, null] },
    {
      label: "Bugun",
      getValue: () => {
        return [today, today];
      },
    },
    {
      label: "Kecha",
      getValue: () => {
        return [
          today.startOf("day").subtract(1, "day"),
          today.startOf("day").subtract(1, "day"),
        ];
      },
    },
    {
      label: "Bu xafta",
      getValue: () => {
        return [today.startOf("week"), today.endOf("week")];
      },
    },
    {
      label: "Avvalgi xafta",
      getValue: () => {
        const prevWeek = today.subtract(7, "day");
        return [prevWeek.startOf("week"), prevWeek.endOf("week")];
      },
    },
    {
      label: "Oxirgi 7 kun",
      getValue: () => {
        return [today.subtract(7, "day"), today];
      },
    },
    {
      label: "Bu oy",
      getValue: () => {
        return [today.startOf("month"), today.endOf("month")];
      },
    },
    {
      label: "Avvalgi oy",
      getValue: () => {
        const prevMonth = today.startOf("month").subtract(1, "month");
        return [prevMonth, prevMonth.endOf("month")];
      },
    },
    {
      label: "Bu yil",
      getValue: () => {
        return [today.startOf("year"), today.endOf("year")];
      },
    },
    {
      label: "Avvalgi yil",
      getValue: () => {
        const startOfNextYear = today.startOf("year").subtract(1, "year");
        return [startOfNextYear, startOfNextYear.endOf("year")];
      },
    },
  ];

  return { shortcutsItems };
};
