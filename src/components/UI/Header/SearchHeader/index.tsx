import { SearchIcon } from "../../IconGenerator/Svg";
import { FC } from "react";
// import useDebounce from "../../../hooks/useDebounce";
// import CSearchInput from "../../CElements/CSearchInput";
import stl from "./style.module.scss";
// import UserInfo from "../UserInfo";

interface Props {
  //   handleSearch?: (val: any) => void;
  btns?: string[];
//   children?: ReactNode;
  extra?: any;
  //   delay?: number;
}

const SearchHeader: FC<Props> = ({ extra }) => {
  return (
    <div className={stl.wrapper}>
      <div className="flex items-center gap-2  w-full">
        <div className="">
          <SearchIcon />
        </div>
        <input
          //   onChange={(e) => debounce(e.target.value)}
          type="text"
          placeholder="Izlash..."
          className={`w-full  bg-transparent h-[40px] outline-none pr-5 text=[var(--black)] placeholder-gray focus:border-[var(--main)] rounded-[10px] `}
        />
      </div>

      {extra && <div>{extra}</div>}
      {/* <div className={stl.profile}><UserInfo userInfo={userInfo} /></div> */}
    </div>
  );
};

export default SearchHeader;
