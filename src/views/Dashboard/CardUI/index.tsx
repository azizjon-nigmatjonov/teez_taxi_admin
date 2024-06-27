import CCard from "../../../components/CElements/CCard";
import IconGenerator from "../../../components/UI/IconGenerator";

interface Props {
  data: any;
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
    icon: "pending",
  },
  {
    title: "Jami yo'lovchilar",
    id: "total_rider",
    icon: "passengers",
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
    id: "total_ride",
    icon: "trips",
  },
];

export const DashboardCard = ({ data = {} }: Props) => {
  console.log("data", data);

  return (
    <div className="grid grid-cols-4 gap-5">
      {CardList.map((item: { id: string; title: string; icon: string }) => (
        <CCard key={item.id} style={{ minHeight: "auto" }}>
          <div className="flex items-center space-x-5">
            <IconGenerator icon={item.icon} />
            <div>
              <span className="text-xl font-medium">{data[item.id]}</span>
              <p className="text-[var(--gray60)] mt-1">{item.title}</p>
            </div>
          </div>
        </CCard>
      ))}
    </div>
  );
};
