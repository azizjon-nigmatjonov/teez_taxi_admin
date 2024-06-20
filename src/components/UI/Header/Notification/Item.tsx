import { NotificationIcon } from "../../../../components/UI/IconGenerator/Svg";

export const ListItem = ({ element }: { element: any }) => {
  return (
    <li className="flex items-center space-x-3 rounded-[12px] p-4 hover:bg-[var(--gray50)] cursor-pointer group relative">
      <div className="w-[40px]">
        <div className="bg-white group-hover:border border-[var(--gray20)] w-[40px] h-[40px] rounded-[8px] flex items-center justify-center">
          <NotificationIcon />
        </div>
      </div>
      <div>
        <h5 className="font-[600]">{element?.title}</h5>
        {/* <p className="text-[var(--gray60)] text-sm">{element?.description}</p> */}
        <span className="absolute right-2 top-2 text-[var(--gray60)]">
          {element?.time}
        </span>
      </div>
    </li>
  );
};
