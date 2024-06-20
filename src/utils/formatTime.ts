import { format } from "date-fns";

const convertSeconds = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours} soat${hours > 1 ? "s" : ""} ${minutes} minut`;
  } else {
    return `${minutes} minut`;
  }
};

export const FormatTime = (time: any, type?: string) => {
  switch (type) {
    case "time":
      return time;
    case "secunds":
      return convertSeconds(time);
    default:
      return time;
  }
};

export const FormatCalendar = (time: any) => {
  const dateFormat = "yyyy-MM-dd";

  return format(time, dateFormat);
};
