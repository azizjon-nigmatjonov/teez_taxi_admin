import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { breadCrumbs } from "./Logic";

const RegionAdd = () => {
  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
        <div className="ml-5"></div>
      </Header>
    </>
  );
};

export default RegionAdd;
