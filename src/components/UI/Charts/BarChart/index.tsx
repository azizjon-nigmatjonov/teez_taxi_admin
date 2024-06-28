import { OneSkeleton } from "../../../CElements/CSkeleton/OneSkeleton";
import LineChart from "../../LineChart";

interface Props {
  list: any;
  isLoading: boolean;
}

export const BarChartUI = ({ list = [], isLoading = false }: Props) => {
  if (isLoading) {
    return (
      <div>
        <OneSkeleton height={500} />
      </div>
    );
  }

  return (
    <>
      <LineChart data={list} />
    </>
  );
};
