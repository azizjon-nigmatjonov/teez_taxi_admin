import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./style.scss";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import BackButton from "../../UI/Buttons/BackButton";
import CSearchInput from "../CSearchInput";
// import { NotificationIcon } from "../../UI/IconGenerator/Svg";

interface Props {
  icon?: any;
  withDefautlIcon?: any;
  size?: number;
  className?: string;
  items?: any;
  type?: string;
  progmatic?: boolean;
  defaultValue?: any;
  delay?: number;
  handleSearch?: (val: any) => void;
}

const CBreadcrumbs = ({
  icon,
  withDefautlIcon,
  size,
  className,
  items,
  type = "element",
  defaultValue,
  handleSearch,
  delay = 500,
  progmatic = false,
}: Props) => {
  const navigate = useNavigate();

  const navigateLink = useMemo(() => {
    if (items[0]?.link) return items[0]?.link;
    if (progmatic) return -1;
  }, [progmatic, items]);

  const navigateHandler = (link: string, index: number) => {
    if (index === items?.length - 1) return null;
    navigate(link);
  };

  return (
    <div className="flex items-center justify-between w-full z-[99] relative">
      <div className="CBreadcrumbs-wrapper mr-5">
        {navigateLink && <BackButton link={navigateLink} />}
        <Breadcrumbs
          className={`CBreadcrumbs ${size} ${className}`}
          separator={<NavigateNextIcon fontSize="small" color="disabled" />}
        >
          {items?.map((item: any, index: number) => (
            <div
              key={index}
              className={`breadcrumb-item ${item?.link ? "" : "last"} ${type}`}
            >
              {icon}
              {withDefautlIcon && <FolderIcon />}
              {type === "link" && item?.link ? (
                <div
                  onClick={() => navigateHandler(item.link, index)}
                  className="breadcrumb-label"
                >
                  {item.label}
                </div>
              ) : (
                <div className="breadcrumb-label">{item.label}</div>
              )}
            </div>
          ))}
        </Breadcrumbs>
      </div>
      {handleSearch ? (
        <CSearchInput
          handleChange={handleSearch}
          classes="bg-white"
          delay={delay}
          defaultValue={defaultValue}
        />
      ) : ""}
    </div>
  );
};

export default CBreadcrumbs;
