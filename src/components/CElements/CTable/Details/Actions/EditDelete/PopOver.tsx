import { Closer } from "../../../../../UI/Closer";
import { WarningIcon } from "../../../../../UI/IconGenerator/Svg";

export const PopoverDelete = ({
  title = "Ma'lumotni aniq o'chirib tashlamoqchimisiz?",
  text = "",
  classes = "",
  closePopover = () => {},
}: {
  title?: string;
  text?: string;
  classes?: string;
  closePopover: (val: string) => void;
}) => {
  return (
    <>
      <div
        className={`absolute left-[-400px] top-[-40px] bg-white p-16px border border-[var(--gray20)] z-[91] rounded-[8px] common-shadow ${classes}`}
      >
        <p className="whitespace-nowrap flex items-start space-x-5">
          <WarningIcon />{" "}
          <div>
            <p className="font-[600] text-lg">{title}</p>
            <p>{text}</p>
          </div>
        </p>

        <div className="flex items-center justify-end space-x-2 mt-4">
          <button
            className="bg-[var(--lightestGray)] common-shadow px-4 py-2 rounded-[8px]"
            onClick={() => closePopover("")}
          >
            Yo'q
          </button>
          <button
            className="bg-[var(--main)] common-shadow px-4 py-2 rounded-[8px] text-white"
            onClick={() => closePopover("delete")}
          >
            Ha
          </button>
        </div>
      </div>
      <Closer handleClose={() => closePopover("")} classes="z-[97]" />
    </>
  );
};
