export const GetString = (str: string, num: number) => {
  if (!str?.length) return "";
  return str.length > num ? str.substring(0, num) + "..." : str;
};
