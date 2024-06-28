import CBreadcrumbs from "../../components/CElements/CBreadcrumbs";
import CTable from "../../components/CElements/CTable";
import AddButton from "../../components/UI/Buttons/AddButton";
import {
  FilterFunctions,
  getStoredFilters,
} from "../../components/UI/Filter/Logic";
import { Header } from "../../components/UI/Header";
import { breadCrumbItems } from "./Logic";

const PopularPlaces = () => {
  const { filterParams } = getStoredFilters({});
  const { collectFilter, storeFilters } = FilterFunctions({
    store: true,
    filterParams,
  });

  const handleFilterParams = (obj: any) => {
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
          <AddButton text="Mashhur joylar joylashuvi qo'shish" />
        </div>
      </Header>

      <div className="container">
        <CTable
          headColumns={[]}
          bodyColumns={[]}
          isLoading={false}
          filterParams={filterParams}
          handleFilterParams={handleFilterParams}
          clickable={true}
        />
      </div>
    </>
  );
};
export default PopularPlaces;
