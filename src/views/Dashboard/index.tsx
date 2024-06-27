import CBreadcrumbs from "../../components/CElements/CBreadcrumbs";
import CCard from "../../components/CElements/CCard";
import CTable from "../../components/CElements/CTable";
import { Header } from "../../components/UI/Header";
import { DashboardCard } from "./CardUI";
import { breadCrumbs } from "./Logic";

const Dashboard = () => {
  return (
    <>
      <Header
        sticky={true}
        extra={<CBreadcrumbs items={breadCrumbs} progmatic={true} />}
      >
        {/* <div className="ml-5"></div> */}
      </Header>
      <div className="container grid grid-cols-4 gap-5">
        <DashboardCard />
      </div>
      <div className="container grid grid-cols-2 gap-x-5 mt-5">
        <CCard title="Oxirgi so'rov">
          <CTable
            headColumns={[]}
            bodyColumns={[]}
            handleFilterParams={() => {}}
            filterParams={{}}
            tableSetting={false}
          />
        </CCard>

        <CCard title="Daromad"></CCard>
      </div>
    </>
  );
};

export default Dashboard;
