import HFTextarea from "../../../components/FormElements/HFTextarea";
import HFTextField from "../../../components/FormElements/HFTextField";
import CCard from "../CCard";

interface Props {
  control: any;
}

const CText = ({ control }: Props) => {
  return (
    <>
      <h4 className="text-lg font-[600]">Matn o'zbek tilida</h4>
      <CCard style={{ minHeight: 0 }}>
        <div className="grid gap-y-5">
          <HFTextField
            control={control}
            name="title_uz"
            label="Sarlovha"
            placeholder="Yozing..."
            required={true}
          />
          <HFTextarea
            control={control}
            name="body_uz"
            placeholder="Yozing..."
            label="Ma'lumot"
            required={true}
          />
        </div>
      </CCard>
      <h4 className="text-lg font-[600]">Матн крилчада</h4>
      <CCard style={{ minHeight: 0 }}>
        <div className="grid gap-y-5">
          <HFTextField
            control={control}
            name="title_oz"
            label="Сарловҳа"
            placeholder="Ёзинг..."
            required={true}
          />
          <HFTextarea
            control={control}
            name="body_oz"
            placeholder="Ёзинг..."
            label="Маълумот"
            required={true}
          />
        </div>
      </CCard>
      <h4 className="text-lg font-[600]">Текст на русском языке</h4>
      <CCard style={{ minHeight: 0 }}>
        <div className="grid gap-y-5">
          <HFTextField
            control={control}
            name="title_ru"
            label="Заголовок"
            placeholder="Писать..."
            required={true}
          />
          <HFTextarea
            control={control}
            name="body_ru"
            placeholder="Писать..."
            label="Информация"
            required={true}
          />
        </div>
      </CCard>
    </>
  );
};

export default CText;
