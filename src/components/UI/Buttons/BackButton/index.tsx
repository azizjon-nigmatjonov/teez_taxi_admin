// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WidgetsIcon from '@mui/icons-material/Widgets';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";
import "./style.scss";

const BackButton = ({ link }: { link: string }) => {
  const navigate = useNavigate();

  return (
    <button type="button" className="BackButton" onClick={() => navigate(link)}>
      <WidgetsIcon className="icon" />
      <ArrowForwardIosIcon className='arrow'/>
    </button>
  );
};

export default BackButton;
