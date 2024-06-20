import { CircularProgress } from "@mui/material";
import { EyeIcon, PhotoIcon } from "../../../UI/IconGenerator/Svg";

export const ImageData = () => {
  const customIcon: any = (loading: boolean, url: string) => {
    if (loading) {
      return <CircularProgress style={{ color: "var(--main)" }} />;
    }
    if (url) {
      return <EyeIcon fill="white" width={24} />;
    }
    return <PhotoIcon />;
  };
  return { customIcon };
};
