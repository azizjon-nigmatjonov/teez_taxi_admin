import cls from "./style.module.scss";

const CProgress = ({ percent = 0 }: { percent?: number }) => {
  return (
    <div className={cls.outer}>
      <div className={cls.inner} style={{ width: percent+'%' }}></div>
    </div>
  );
};

export default CProgress;
