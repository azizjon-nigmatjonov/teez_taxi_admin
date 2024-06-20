import { Alert, AlertTitle } from "@mui/material";
import useCountDown from "../../../hooks/useCoundDown";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { websiteActions } from "../../../store/website";

export default function CAlert({ data = {} }: { data: any }) {
  const { t } = useTranslation(data?.translation || "common");
  const dispatch = useDispatch();
  const timeClose = useCountDown("secunds", data?.timer || 8);


  const handleAlertActions = () => {
    dispatch(websiteActions.setAlertData({}));
  };

  useEffect(() => {
    if (timeClose < 1) {
      handleAlertActions();
    }
  }, [timeClose]);

  return (
    <div className={`fixed top-[70px] right-6 text-[#fff] rounded-xl w-[393px] z-[9999] border ${data?.type == 'error' ? 'bg-[#FDEBE8] border-[#E82F0F]' : 'bg-[#D1F9E6]  border-[#0BD976]'}`} id="calert">
      <Alert
        severity={data?.type || "success"}
        onClose={() => handleAlertActions()}
      >
        <AlertTitle className={`font-semibold text-base ${data?.type == 'error' ? 'text-[#DD431F]' : 'text-[#0F855B]'}`}>{data?.mainTitle}</AlertTitle>
        <p className={`font-normal ${data?.type == 'error' ? 'text-[#DD431F]' : 'text-[#0F855B]'} `}>{t(data?.title)}</p>
      </Alert>
    </div>
  );
}
