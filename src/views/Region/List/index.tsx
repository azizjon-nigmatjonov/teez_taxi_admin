import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { breadCrumbs } from "./Logic";

const RegionList = () => {
  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
        <div className="ml-5"></div>
      </Header>
    </>
  );
};

export default RegionList;
