import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface Props {
    value: string
    handleClick: (val: string) => void
}
export const TableSort = ({ value = "up", handleClick = () => {} }: Props) => {

  return (
    <div className={value === "down" ? 'rotate-[180deg]' : ''} onClick={() => handleClick(value === "up" ? 'down' : 'up')}>
      <ArrowUpwardIcon />
    </div>
  );
};
