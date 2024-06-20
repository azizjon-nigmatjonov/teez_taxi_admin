import CCard from "../../../components/CElements/CCard";
import { DriverIcon } from "../../../components/UI/IconGenerator/Svg";

export const DashboardCard = () => {
  return (
    <CCard style={{ minHeight: "auto" }}>
      <div className="flex items-center space-x-5">
        <DriverIcon width={40} />
        <div>
          <span className="text-xl font-medium">3</span>
          <p className="text-[var(--gray60)] mt-1">Jami haydovchilar</p>
        </div>
      </div>
    </CCard>
  );
};
