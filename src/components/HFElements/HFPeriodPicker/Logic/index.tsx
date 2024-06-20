import { useState } from "react";
import dayjs from "../../../../utils/deyjsSetUp";

export const DateData = () => {
  const [formatedDate, setFormatedDate] = useState("");

  const changeAction = (evt: any) => {
    const dayjsDate = dayjs(evt.$d).format("YYYY-MM-DD HH:mm");
    setFormatedDate(dayjsDate);
    return dayjsDate;
  };

  return { formatedDate, changeAction };
};
