const getCurrentMonth = () => {
  const currentDate = new Date();
  return currentDate.getMonth();
};

const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
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
const year = getCurrentYear();

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

const firstDay: any = daysOfWeek[firstDayOfWeek];

export const GetMonth = () => {
  return { firstDay, days, currentMonth, year };
};

export const getWeekDays = () => {
  const weeks = [];
  let startDay = new Date(year, 7 - 1, 1).getDay();
  // const firstDayOfWeek =

  const daysInMonth = new Date(2024, 6, 0).getDate();

  while (startDay <= daysInMonth) {
    // Calculate the end day of the current week
    const endDay = Math.min(
      startDay + 6 - 1 - (startDay % 7) + (firstDay % 7),
      daysInMonth
    );

    // Add the week to the weeks array
    weeks.push({
      label: `${startDay} - ${endDay}`,
      value: `${weeks.length + 1}`,
    });

    // Update the start day for the next week
    startDay = endDay + 1;
  }

  return weeks;
};

export const getMonthWeeks = (year?: number, month?: number) => {
  const { currentMonth, year: currentYeear } = GetMonth();
  const daysInMonth = new Date(
    year ? year : currentYeear,
    month ? month : currentMonth,
    0
  ).getDate();
  const firstDayOfWeek = new Date(
    year ? year : currentYeear,
    month ? month - 1 : currentMonth - 1,
    1
  ).getDay();

  const weeks = [];
  let currentDay = 1;

  while (currentDay < daysInMonth) {
    const weekStart = currentDay;
    const daysLeftInMonth = daysInMonth - currentDay + 1;
    const daysInThisWeek = Math.min(
      7 - (weeks.length === 0 ? firstDayOfWeek : 0),
      daysLeftInMonth
    );

    const weekEnd =
      weekStart + daysInThisWeek > 31 ? 31 : weekStart + daysInThisWeek;
    weeks.push({
      label: `${currentDay === 1 ? weekStart : weekStart + 1} - ${weekEnd}`,
      value: `${weeks.length + 1}`,
    });

    currentDay += daysInThisWeek;
  }

  return weeks;
};
