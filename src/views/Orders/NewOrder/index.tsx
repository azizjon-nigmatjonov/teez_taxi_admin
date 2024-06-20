import { useForm } from "react-hook-form";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import CCard from "../../../components/CElements/CCard";
import { Header } from "../../../components/UI/Header";
import { breadCrumbs } from "./Logic";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./Logic/validate";
import HFTextField from "../../../components/HFElements/HFTextField";
import HFInputMask from "../../../components/HFElements/HFInputMask";
import HFSelect from "../../../components/HFElements/HFSelect";

const NewOrder = () => {
  const schema = Validation();
  const { control, setValue, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
        <div className="ml-5"></div>
      </Header>

      <form onSubmit={handleSubmit(onSubmit)} className="container">
        <CCard
          title="Yangi buyurtma."
          extra={
            <button className="custom-btn" type="button">
              Haydash so'rovi ro'yxati
            </button>
          }
          footer={
            <div className="flex justify-end">
              <div>
                <button type="submit" className="custom-btn">
                  Hozir band qilish
                </button>
              </div>
            </div>
          }
        >
          <div className="grid grid-cols-3 gap-5">
            <HFInputMask
              name="phone"
              control={control}
              label={`Telefon raqam`}
              placeholder="enter_phone"
              mask={"+\\9\\9\\8 99 999 99 99"}
              required={true}
              //   defaultValue={defaultValues?.phone}
            />
            <HFTextField
              name="start"
              control={control}
              label="Manzil"
              placeholder="enter_info"
              setValue={setValue}
              required={true}
              //   defaultValue={defaultValues?.name}
            />
            <HFTextField
              name="end"
              control={control}
              label="Manzil"
              placeholder="enter_info"
              setValue={setValue}
              required={true}
              //   defaultValue={defaultValues?.name}
            />
            <HFSelect
              name="service"
              label="Xizmat tanlang"
              options={[]}
              placeholder="Tanlang"
              control={control}
              clear={true}
            />
            <HFSelect
              name="driver"
              label="Haydovchi tanlang"
              options={[]}
              placeholder="Tanlang"
              control={control}
              clear={true}
            />
          </div>
        </CCard>
      </form>
    </>
  );
};

export default NewOrder;
