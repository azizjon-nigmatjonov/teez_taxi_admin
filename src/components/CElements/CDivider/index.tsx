interface Props {
  title?: string;
  classes?: string
  column?: boolean
}

const CDriver = ({ title, classes}: Props) => {
  return (
    <div className={`flex items-center  ${classes} ${title ? 'space-x-3' : ''}`}>
      <div className="w-full h-[2px] bg-[var(--lightGray)]"></div>
      {title && <span className="font-medium whitespace-nowrap">{title}</span>}
      <div className="w-full h-[2px]  bg-[var(--lightGray)]"></div>
    </div>
  );
};

export default CDriver;
