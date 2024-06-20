import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CustomNavButton = (props: any) => {
  return ( <IconButton color="primary" onClick={props.handleClick} >
    {props.direction === 'right' ? <ArrowForwardIos /> : <ArrowBackIosNew />}
  </IconButton> );
}

export default CustomNavButton;