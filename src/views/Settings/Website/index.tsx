import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import { breadCrumbItems } from "./Logic";
import { useState } from "react";
import CTabs from "../../../components/CElements/CTab";
import { WebsiteColors } from "./Colors";
import { WebsiteImages } from "./Images";

const tabList = [
  {
    name: "Rasmlar",
    id: "images",
  },
  {
    name: "Ranglar",
    id: "colors",
  },
];

const WebsiteSettings = () => {
  const [tab, setTab] = useState({ id: "images" });

  const currentTabComponent = (tab: string) => {
    switch (tab) {
      case "images":
        return <WebsiteImages />;
      case "colors":
        return <WebsiteColors />;
      default:
        return ""
    }
  };

  return (
    <>
      <Header
        extra={
          <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
        }
      />

      <div className="container">
        <div className="inline-block">
          <CTabs
            tabList={tabList}
            currentTab={tab}
            setCurrentTab={setTab}
            passRouter={false}
          />
        </div>

        {currentTabComponent(tab.id)}
      </div>
    </>
  );
};

export default WebsiteSettings;
