import cls from "./style.module.scss";

interface Props {
  title?: string;
  required?: boolean;
  styles?: any
}

const CLabel = ({ title = "", required, styles = {} }: Props) => {
  return (
    <p className={cls.label} style={{ ...styles }}>
      {required ? <span className={cls.required}>*</span> : ""}
      {title}
    </p>
  );
}

export default CLabel