import { useState } from "react";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import CTable from "../../../components/CElements/CTable";
import AddButton from "../../../components/UI/Buttons/AddButton";
import { FilterFunctions } from "../../../components/UI/Filter/Logic";
import { Header } from "../../../components/UI/Header";
import { breadCrumbItems } from "./Logic";

const ServiceList = () => {
  const [filterParams, setFilterParams]: any = useState({});
  const { collectFilter, storeFilters } = FilterFunctions({
    store: true,
    filterParams,
    setFilterParams,
  });

  const handleFilterParams = (obj: any) => {
    setFilterParams(obj);
    storeFilters(obj);
  };

  const handleSearch = (value: any) => {
    collectFilter({ type: "q", val: value });
    handleFilterParams({ ...filterParams, q: value, page: 1 });
  };
  return (
    <>
      <Header
        extra={
          <CBreadcrumbs
            items={breadCrumbItems}
            progmatic={true}
            type="link"
            handleSearch={handleSearch}
            defaultValue={filterParams?.q}
          />
        }
      >
        <div>
          <AddButton text="Xizmat qo'shish" />
        </div>
      </Header>

      <div className="container">
        <CTable
          headColumns={[]}
          bodyColumns={[]}
          totalCount={1}
          count={1}
          isLoading={false}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
          clickable={true}
        />
      </div>
    </>
  );
};
export default ServiceList;
