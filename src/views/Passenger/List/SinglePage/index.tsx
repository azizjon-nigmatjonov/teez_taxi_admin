import { useForm } from "react-hook-form";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import CCard from "../../../../components/CElements/CCard";
import { Header } from "../../../../components/UI/Header";
import { breadCrumbItems } from "./Logic";
import { HFImageUpload } from "../../../../components/HFElements/HFImageUpload";
import HFTextField from "../../../../components/HFElements/HFTextField";
import { HFDatePicker } from "../../../../components/HFElements/HFDatePicker";

const PassengerInner = () => {
  const { control } = useForm();
  return (
    <>
      <Header
        extra={
          <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
        }
      />

      <div className="container">
        <form>
          <CCard
            title="Yo'lovchi ma'lumotlari"
            footer={
              <div className="flex justify-end">
                <div>
                  <button className="custom-btn">Tasdiqlash</button>
                </div>
              </div>
            }
          >
            {" "}
            <HFImageUpload name="image" control={control} />
            <div className="mt-5 grid grid-cols-3 gap-x-5">
              <HFTextField name="name" control={control} placeholder="Ism" />
              {/* <HFDatePicker
                name="birthday"
                label="Tug'ilgan sana"
                control={control}
                required={true}
                placeholder="Tug'ilgan sana"
              /> */}
            </div>
          </CCard>
        </form>
      </div>
    </>
  );
};

export default PassengerInner;
