import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { breadCrumbItems } from "./Logic";

const Profile = () => {
  return (
    <>
      <Header
        extra={
          <CBreadcrumbs
            items={breadCrumbItems}
            progmatic={true}
            type="link"
  
          />
        }
      />
      <div className="container"></div>
    </>
  );
};

export default Profile;
