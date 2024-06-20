import { FC, memo } from "react";
import { iconsList } from "./iconsList";

interface Props {
  icon: string;
  fill?: any
}

const IconGenerator: FC<Props> = ({ icon, fill, ...props }) => {
  
  const findedIcon = iconsList.find((el) => el.name === icon);  
  if (!findedIcon) return null;

  return <findedIcon.component  {...props} />;
  
};

export default memo(IconGenerator);
