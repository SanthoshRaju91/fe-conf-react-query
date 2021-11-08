import axios from "axios";
import { useQuery } from "react-query";

async function getSearchHistory() {
  const response = await axios.get(" http://localhost:3000/queries");
  return response.data;
}

export function useSearchHistory() {
  const { isFetching, data = [] } = useQuery("history", getSearchHistory);

  // const [isFetching, setIsFetching] = useState(false);
  // const [searchHistory, setSearchHistory] = useState([]);

  // useEffect(() => {
  //   async function fetchNow() {
  //     setIsFetching(true);
  //     const data = await getSearchHistory();
  //     setSearchHistory(data);
  //     setIsFetching(false);
  //   }

  //   fetchNow();
  // }, []);

  return {
    isFetching,
    searchHistory: data,
  };
}
