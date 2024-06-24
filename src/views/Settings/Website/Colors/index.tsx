import {
    blackColorContants,
  grayColorConstants,
  mainColorConstants,
  primaryColorConstants,
} from "../../../../constants/website";
import { CardWrapper } from "./Card";

export const WebsiteColors = () => {
  return (
    <div className="space-y-5">
      <CardWrapper title="Asosiy ranglar" list={mainColorConstants} />
      <CardWrapper title="Primaray ranglar" list={primaryColorConstants} />
      <CardWrapper title="Qora ranglar" list={blackColorContants} />
      <CardWrapper title="Kulrang ranglar" list={grayColorConstants} />
    </div>
  );
};
