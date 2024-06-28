import CCard from "../../../components/CElements/CCard";
import { ListSkeleton } from "../../../components/CElements/CSkeleton/ListSkeleton";
import IconGenerator from "../../../components/UI/IconGenerator";
import { formatNumberWithSpaces } from "../../../utils/formatMoney";

interface Props {
  data: any;
  isLoading: boolean;
}

const CardList = [
  {
    title: "Jami haydovchilar",
    id: "total_driver",
    icon: "driver",
  },
  {
    title: "Tasdiqlanish kutilmoqda",
    id: "pending_driver",
    icon: "history_clock",
  },
  {
    title: "Jami yo'lovchilar",
    id: "total_rider",
    icon: "passengers",
  },
  {
    title: "Jami yurish",
    id: "total_ride",
    icon: "trips",
  },
  {
    title: "Bugungi daromad",
    id: "today_earning",
    icon: "earn",
  },
  {
    title: "Oylik daromad",
    id: "monthly_earning",
    icon: "earn",
  },
  {
    title: "Jami daromad",
    id: "total_earning",
    icon: "earn",
  },
  {
    title: "Bugungi yurish",
    id: "total_ride_today",
    icon: "trips",
  },
];

export const DashboardCard = ({ data = {}, isLoading = false }: Props) => {
  if (isLoading) {
    return (
      <div className="space-y-5">
        <ListSkeleton height={84} />
        <ListSkeleton height={84} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {CardList.map((item: { id: string; title: string; icon: string }) => (
        <CCard key={item.id} style={{ minHeight: "auto" }}>
          <div className="flex items-center space-x-5">
            <IconGenerator icon={item.icon} />
            <div>
              <span className="text-xl font-medium">
                {formatNumberWithSpaces(data[item.id] || 0)}
              </span>
              <p className="text-[var(--gray60)] mt-1">{item.title}</p>
            </div>
          </div>
        </CCard>
      ))}
    </div>
  );
};
