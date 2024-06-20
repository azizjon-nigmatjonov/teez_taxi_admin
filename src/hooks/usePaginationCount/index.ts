export const usePaginationCount = (count: number) => {
 
  if (!count) return 1;
  return {count, tableCount: count};
};
