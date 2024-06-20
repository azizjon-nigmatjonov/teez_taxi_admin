import { useMemo } from "react";
import LTab from "./LineDetails";
import cls from "../style.module.scss";
import {
    createSearchParams,
    useSearchParams,
    useNavigate,
    useLocation,
} from "react-router-dom";

interface Props {
    passRouter?: boolean,
    currentTab?: any,
    setCurrentTab?: (val?: any) => void,
    tabList?: any,
    handleTabClick?: (val?: any) => void,
    extra?: any,
    customStyles?: any;
    slug?: string
}

export default function LTabs({
    passRouter = true,
    currentTab = {},
    setCurrentTab = () => { },
    tabList = [],
    handleTabClick = () => { },
    extra,
    customStyles,
    slug = "status"
}: Props) {
    const location = useLocation();
    const pathname = location.pathname;
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries(searchParams.entries());
    const navigate = useNavigate();

    const optimizedTabList = useMemo(() => {
        return tabList?.map((i: any, index: number) => ({
            ...i,
            index,
        }));
    }, [tabList]);


    function handleTabAction(i: any) {
        handleTabClick(i);
        if (!passRouter) {
            setCurrentTab(i);
            return;
        }
        const newQuery = {
            ...query,
            [slug]: i?.slug,
        };
        const queryParams = createSearchParams(newQuery);
        navigate({
            pathname: pathname,
            search: queryParams.toString(),
        });
    }

    

    const value = useMemo(() => {
        if (currentTab?.index) return currentTab.index;
        if (!query?.[slug]) return 0;
        const tab = optimizedTabList.find((tab: any) => tab.slug === query?.[slug]);
        return tab?.index;
    }, [optimizedTabList, query, currentTab, slug]);


    return (
        <div className={cls.wrapper}>
            <LTab
                value={value}
                tabList={optimizedTabList}
                handleCustomClick={handleTabAction}
                customStyles={customStyles}
            />
            {extra && <>{extra}</>}
        </div>
    );
}
