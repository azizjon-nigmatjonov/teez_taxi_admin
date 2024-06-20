export const FormatMoney = (value: any) => {
  return value.toLocaleString("en-US");
};

export const ReFormatMoney = (value: any) => {
  return value.replace(/[ ,]/g, " ");
};

export const formatNumberWithSpaces = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}