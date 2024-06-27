import CBreadcrumbs from "../../components/CElements/CBreadcrumbs";
import CCard from "../../components/CElements/CCard";
import CTable from "../../components/CElements/CTable";
import { Header } from "../../components/UI/Header";
import { DashboardCard } from "./CardUI";
import { FetchFunction, TableData, breadCrumbItems } from "./Logic";

const Dashboard = () => {
  const { headColumns } = TableData();
  const { bodyData } = FetchFunction();
  console.log(bodyData);

  return (
    <>
      <Header
        sticky={true}
        extra={<CBreadcrumbs items={breadCrumbItems} progmatic={true} />}
      >
        {/* <div className="ml-5"></div> */}
      </Header>
      <div className="container">
        <DashboardCard data={bodyData?.data_informaton?.dashboard} />
      </div>
      <div className="container grid grid-cols-2 gap-x-5 mt-5">
        <CCard title="Oxirgi so'rov">
          <CTable
            headColumns={headColumns}
            bodyColumns={bodyData?.recent_riderequest}
            handleFilterParams={() => {}}
            filterParams={{}}
            tableSetting={false}
            disablePagination={true}
          />
        </CCard>

        <CCard title="Daromad"></CCard>
      </div>
    </>
  );
};

export default Dashboard;
