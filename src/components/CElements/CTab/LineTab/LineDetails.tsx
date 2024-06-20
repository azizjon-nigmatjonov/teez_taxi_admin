import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../style.scss";
import { ColorConstants } from "../../../../constants/website";
import { useTranslation } from "react-i18next";
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Props {
  tabList: any;
  value: any;
  customStyles?: any;
  handleCustomClick?: (val?: any) => void;
}

export default function LTab({
  tabList,
  value = 0,
  handleCustomClick = () => { },
  customStyles
}: Props) {
  const { t } = useTranslation();

  const customization = {
    "&": {
      width: 'auto'
    },
    "& .MuiButtonBase-root": {
      background: "#white",
      borderRadius: "10px",
      color: "#111",
      textTransform: "none",
      fontSize: "14px",
      fontWight: "500",
      padding: "0 20px",
      textAlign: "left",
    },
    "& .MuiButtonBase-root, & .MuiTab-root": {
      maxWidth: "100%",
    },
    "& .Mui-selected": {
      transition: "0.3s",
      color: `${ColorConstants.main} !important`,
    },
    "& .MuiTabs-indicator": {
      backgroundColor: 'transparent',
      borderBottom: `2px solid ${ColorConstants.main}`,
      color: 'black',
      height: "100%",
    },
    ...customStyles
  };

  return (
    <Box sx={{ width: "100%" }} >
      <Box sx={customization}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            variant="scrollable"
            scrollButtons={"auto"}
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            {tabList?.map((tab: any, ind: number) => (
              <Tab
                disableRipple
                key={ind}
                onClick={() => handleCustomClick(tab)}
                sx={{
                  "& .MuiButtonBase-root, & .MuiTab-root": {
                    maxWidth: "auto",
                  },
                }}
                label={<p className="text">{t(tab?.name)} <span className="text-xs p-2 rounded-full ">{tab?.count}</span> </p>}
                {...a11yProps(tab.id)}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
