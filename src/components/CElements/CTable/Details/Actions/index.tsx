import propTypes from "prop-types";
// import CDropdown from "../../../CDropdown";
import {
  DeleteIcon,
  EditIcon,
  EyeIcon,
  LockIcon,
} from "../../../../UI/IconGenerator/Svg";
import cls from "./style.module.scss";
import Element from "./Element";
import { ColorConstants } from "../../../../../constants/website";
import { useState } from "react";
import { PopoverDelete } from "./EditDelete/PopOver";

interface Props {
  element: any;
  actions: string[];
  rowIndex: number;
  checkPermission: any;
  handleActions: (obj?: any, status?: any) => void;
  currentIndex: any;
  setCurrentIndex: (newIndex?: any) => void;
}

const TabbleActions = ({
  element,
  rowIndex,
  actions = [],
  currentIndex,
  checkPermission = [],
  handleActions = () => {},
  setCurrentIndex = () => {},
}: Props) => {
  const [deletePopover, setDeletePopover]: any = useState(null);

  const handleClick = (element: any, status?: string, active?: boolean) => {
    if (checkPermission(status)) {
      if (status === "delete") {
        setDeletePopover(rowIndex);
        setCurrentIndex(null);
      } else {
        if (active) {
          handleActions(element, status);
          setCurrentIndex(null);
        }
      }
    }
  };
  
  return (
    <div>
      {currentIndex === rowIndex ? (
        <div
          className={`absolute top-8 right-10 bg-[var(--black)] z-[99] rounded-[10px] border border-[var(--darkerGray)] ${cls.card}`}
        >
          <Element
            text="view"
            active={element?.is_view && checkPermission('view')}
            onClick={() => handleClick(element, "view", element?.is_delete)}
            icon={
              <EyeIcon
                fill={element?.is_view ? "white" : ColorConstants.gray}
              />
            }
            show={actions.includes("view")}
          />
          <Element
            text="freez"
            active={element?.is_freez && checkPermission('freez')}
            onClick={() => handleClick(element, "freez", element?.is_freez)}
            icon={
              <LockIcon
                fill={element?.is_freez ? "white" : ColorConstants.gray}
              />
            }
            show={actions.includes("freez")}
          />
          <Element
            text="edit"
            active={element?.is_edit && checkPermission('edit')}
            onClick={() => handleClick(element, "edit", element.is_edit)}
            icon={
              <EditIcon
                fill={element?.is_edit ? "white" : ColorConstants.gray}
              />
            }
            show={actions.includes("edit")}
          />
          <Element
            text="delete"
            active={element?.is_delete && checkPermission('delete')}
            onClick={() => handleClick(element, "delete", element.is_delete)}
            icon={
              <DeleteIcon
                fill={
                  element?.is_delete
                    ? ColorConstants.error
                    : ColorConstants.gray
                }
              />
            }
            border={false}
            show={actions.includes("delete")}
          />
        </div>
      ) : (
        ""
      )}

      {currentIndex === rowIndex ? (
        <div
          className="w-full h-full fixed left-0 top-0 z-[98]"
          onClick={() => setCurrentIndex(999)}
        ></div>
      ) : (
        ""
      )}

      {deletePopover === rowIndex && (
        <PopoverDelete
          closePopover={(status) => {
            setDeletePopover(null);
            if (status) handleActions(element, status);
          }}
        />
      )}
    </div>
  );
};

TabbleActions.propTypes = {
  item: propTypes.object,
  handleActions: propTypes.func,
  actionList: propTypes.array,
};

export default TabbleActions;
