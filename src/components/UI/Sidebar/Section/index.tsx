import { memo, useState } from "react";
import IconGenerator from "../../IconGenerator";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowIcon } from "../../IconGenerator/Svg";
import cls from "./style.module.scss";
import { SectionData } from "../Logic";
import { DropDown, OneDropdown } from "./DropDown";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../../store/filterParams";

interface Props {
  list: any;
  collapsed: boolean;
}

const SidebarSection = ({ list, collapsed = false }: Props) => {
  const location = useLocation();
  const { getParentName } = SectionData();

  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(getParentName());

  const toggleAccordion = (key: string) => {
    setActiveIndex(activeIndex === key ? "" : key);
  };

  const clearFilter = () => {
    dispatch(filterActions.clearFilterData());
  };

  const dispatch = useDispatch();
  return (
    <div className={`${cls.section} ${collapsed ? "py-[10px]" : "p-[10px]"}`}>
      <div className="flex flex-col justify-between w-full">
        <div>
          {Object.entries(list)?.map(([key, value]: [string, any], index) => {
            const visibleSidebarItems: any = value.filter(
              (el: any) => el.sidebar
            );
            if (!visibleSidebarItems?.length) return "";

            const isLastItem = index === Object.entries(list).length - 1;

            return visibleSidebarItems?.length > 1 ? (
              <div className={collapsed ? "" : ""}>
                <button
                  className={`accordion group ${
                    activeIndex === key ? "active" : ""
                  } flex justify-between items-center w-full`}
                  onClick={() => toggleAccordion(key)}
                >
                  <div
                    className={`flex items-center ${
                      collapsed ? "justify-center w-full" : "space-x-3"
                    }`}
                  >
                    <IconGenerator
                      icon={value?.[0]?.parent_icon || value[0].icon}
                    />
                    {!collapsed && (
                      <span className="text-[var(--black)] font-medium">
                        {t(key)}
                      </span>
                    )}
                  </div>
                  {!collapsed && (
                    <div>
                      <ArrowIcon isOpen={activeIndex === key} />
                    </div>
                  )}

                  {collapsed && <DropDown title={key} value={value} />}
                </button>

                {!collapsed && (
                  <div
                    className={`panel ${
                      activeIndex === key && !collapsed ? "show" : ""
                    }`}
                  >
                    {Object.values(value as keyof typeof value)?.map(
                      (el: any, i, arr) => {
                        const isLastItem = i === arr.length - 1;

                        if (el.title && el.title.trim() !== "") {
                          return (
                            el.sidebar && (
                              <>
                                <NavLink
                                  key={el.id}
                                  to={el.path}
                                  className={`${
                                    i < 100
                                      ? "steps__item steps__item--active"
                                      : "steps__item"
                                  } menu_link2 flex items-center steps ${
                                    location.pathname.startsWith(el.path)
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <p
                                    onClick={() => clearFilter()}
                                    className={`${
                                      isLastItem ? "mb-2" : ""
                                    } flex gap-2 capitalize menu_link cursor-pointer text-sm font-medium text-[#151515] `}
                                  >
                                    <IconGenerator icon={el.icon} />
                                    <span>{el.title}</span>
                                  </p>
                                </NavLink>
                              </>
                            )
                          );
                        } else {
                          return null;
                        }
                      }
                    )}
                  </div>
                )}

                {!isLastItem && <div className="accordion-line"></div>}
              </div>
            ) : (
              <div
                className="menus group"
                onClick={() => clearFilter()}
              >
                 {collapsed ? (
                  <OneDropdown
                    title={t(key)}
                    path={visibleSidebarItems?.[0]?.path}
                    icon={visibleSidebarItems?.[0]?.icon}
                    // sidebarCounts={sidebarCounts}
                    clearFilter={clearFilter}
                  />
                ) : (
                  ""
                )}
                <NavLink
                  to={visibleSidebarItems?.[0]?.path}
                  className={`menu_link3 w-full h-[40px] flex items-center capitalize ${
                    collapsed ? "justify-center" : "gap-x-3 pl-3 ml-[-11px]"
                  }`}
                >
                  <IconGenerator icon={visibleSidebarItems?.[0]?.icon} />
                  {!collapsed && <>{t(visibleSidebarItems?.[0]?.title)}</>}
                </NavLink>
                {!collapsed && <div className="accordion-line"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(SidebarSection);
