interface Props {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}

export const FoldButton = ({ collapsed, setCollapsed = () => {} }: Props) => {
  return (
    <div className="fixed z-[97]" style={{ top: 'calc(100vh - 70px - 50vh)', left: `${collapsed ? "70px" : "281px"}` }}>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="group w-[12px] h-[40px] flex items-center justify-center"
      >
        <div className="relative h-20px">
          <div
            className={`w-[3px] h-[11.5px] bg-[var(--gray)] absolute left-0 top-0 duration-200 ${
              !collapsed
                ? "group-hover:rotate-[30deg]"
                : "group-hover:rotate-[-30deg]"
            }`}
          ></div>
          <div
            className={`w-[3px] h-[11.5px] bg-[var(--gray)] absolute left-0 bottom-0 duration-200 ${
              !collapsed
                ? "group-hover:rotate-[-30deg]"
                : "group-hover:rotate-[30deg]"
            }`}
          ></div>
        </div>
      </button>
    </div>
  );
};
