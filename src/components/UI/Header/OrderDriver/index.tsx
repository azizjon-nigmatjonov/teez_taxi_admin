import usePageRouter from "../../../../hooks/useObjectRouter";
import { CarIcon } from "../../../../components/UI/IconGenerator/Svg";

export const OrderDriver = () => {
  const { navigateTo } = usePageRouter();
  return (
    <button
      onClick={() => navigateTo("/passengers/active-passengers/booking")}
      className="default-btn whitespace-nowrap space-x-3"
    >
      <CarIcon fill="var(--main)" />
      {/* <span>Haydovchi buyurtma</span> */}
    </button>
  );
};
