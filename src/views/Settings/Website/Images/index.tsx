import { useForm } from "react-hook-form";
import CCard from "../../../../components/CElements/CCard";
// import { HFImageUpload } from "../../../../components/HFElements/HFImageUpload";
import { CDriverImageUpload } from "../../../../components/CElements/CDriverImageUpload";

export const WebsiteImages = () => {
  const { control } = useForm();
  return (
    <div>
      <CCard>
        <CDriverImageUpload control={control} name="logo" />
      </CCard>
    </div>
  );
};
