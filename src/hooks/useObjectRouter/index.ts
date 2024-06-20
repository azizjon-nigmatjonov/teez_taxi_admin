import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export default function usePageRouter() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  const navigateTo = (path: string, state?: object) => {
    const link = path;
    if (state) {
      navigate(link, { state: state });
      return;
    }
    navigate(link);
  };

  const navigateQuery = (obj?: any, check?: boolean) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "" && key in query && !check) {
        delete query[key];
        delete obj[key];
      }
    });

    const newQuery = {
      ...query,
      ...obj,
    };

    const queryParams = createSearchParams(newQuery);
    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  };

  const getQueries = () => query;

  const progmatic = () => navigate(-1);


  return { navigateTo, progmatic, navigateQuery, getQueries };
}
