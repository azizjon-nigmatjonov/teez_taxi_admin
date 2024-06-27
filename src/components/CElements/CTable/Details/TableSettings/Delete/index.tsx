import { useState } from "react";
import { DeleteIcon } from "../../../../../UI/IconGenerator/Svg";
import { PopoverDelete } from "../../Actions/EditDelete/PopOver";

export const DeleteElements = ({
  filterParams = {},
  tableActions,
}: {
  filterParams: any;
  tableActions: (el: any, status: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const closePopOver = (type: string) => {
    if (type === "delete") {
      tableActions(filterParams?.multiple_ids, "multiple_delete");
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      {filterParams?.settings?.multiple && filterParams?.multiple_ids?.length ? (
        <button onClick={() => setOpen(true)}>
          <DeleteIcon />
        </button>
      ) : (
        ""
      )}

      {open ? (
        <PopoverDelete
          title="Belgilangan ma'lumotlarni o'chirmoqchimisiz?"
          closePopover={closePopOver}
          classes="right-[1x0px] top-[20px] z-[98]"
        />
      ) : (
        ""
      )}
    </div>
  );
};
