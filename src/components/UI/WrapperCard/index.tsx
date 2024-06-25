import cls from './style.module.scss'

interface Props {
  classes?: string;
  children: any;
}

export const WrapperCard = ({ classes = '',children }: Props) => {
  return <div className={`bg-white rounded-[12px] mx-5 p-5 border border-[var(--border)] ${classes} ${cls.card}`}>{children}</div>;
};
