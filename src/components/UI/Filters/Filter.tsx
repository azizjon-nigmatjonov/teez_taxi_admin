import { Closer } from "../Closer";

interface Props {
  toggle: () => void;
  children?: any;
}

const Filters = ({ toggle = () => {}, children }: Props) => {
  return (
    <div className="absolute shadow-lg rounded-[10px] right-0 top-[50px] z-[99]">
      <div className="p-[14px] relative z-[99] w-[240px] border border-[var(--lineGray)] rounded-[10px] bg-white">
        {children}
      </div>
      <Closer handleClose={() => toggle()}/>
    </div>
  );
};

export default Filters;
