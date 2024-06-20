const getCurrentMonth = () => {
  const currentDate = new Date();
  return currentDate.getMonth();
};

const getDaysInCurrentMonth = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
};

const currentMonth = getCurrentMonth() + 1;
const days = getDaysInCurrentMonth();

const getFirstDayOfMonth = () => {
  const currentDate = new Date();
  currentDate.setDate(1); // Set the date to the first day of the month
  const dayOfWeek = currentDate.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  return dayOfWeek;
};

const firstDayOfWeek = getFirstDayOfMonth();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const firstDay = daysOfWeek[firstDayOfWeek];

export const GetMonth = () => {
  return { firstDay, days, currentMonth };
};

export const getWeekDays = ({ year = 2024, month = 1 }) => {
  const currentDate = new Date(year, month);
  currentDate.setDate(1);
  const dayOfWeek = currentDate.getDay();

  const first = 7 - dayOfWeek + 1;
  const second = first + 1 + 6;
  const third = second + 1 + 6;
  const fourth = third + 1 + 6;
  const end = days - fourth;
  const arr = [
    {
      label: `1 - ${first}`,
      value: `1`,
    },
    {
      label: `${first + 1} - ${first + 1 + 6}`,
      value: `2`,
    },
    {
      label: `${second + 1} - ${second + 1 + 6}`,
      value: `3`,
    },
    {
      label: `${third + 1} - ${third + 1 + 6}`,
      value: `4`,
    },
    {
      label: `${fourth + 1} - ${fourth + end}`,
      value: `5`,
    },
  ];
  return arr;
};

export const getYears = () => {
  const years = [{ label: 2023, value: 2023 }];

  const thisYear = new Date().getFullYear();

  for (let i = 0; thisYear - years[years.length - 1].value; i++) {
    years.push({
      label: years[years.length - 1].label + 1,
      value: years[years.length - 1].value + 1,
    });
  }

  return years;
};