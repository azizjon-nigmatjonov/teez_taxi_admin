import { useMemo } from "react";
import { Months } from "../../../../constants/month";

export const LineChartData = ({ currentData = [] }: { currentData: any }) => {
  const lineData: any = useMemo(() => {
    if (!currentData?.length) return {};
    const newData: any = {
      id: "barchart",
      data: [],
    };
    
    // newData.id = currentData[0];
    currentData.forEach(
      (element: number, ind: number) => {
        const obj: any = {
          y: element, 
          x: Months[ind].label
        };
        newData.data.push(obj);
      }
    );

    return [newData];
  }, [currentData]);

  return { lineData };
};
