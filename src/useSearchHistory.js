import axios from "axios";
import { useEffect, useState } from "react";

async function getSearchHistory() {
  const response = await axios.get(" http://localhost:3000/queries");
  return response.data;
}

export function useSearchHistory() {
  const [isFetching, setIsFetching] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    async function fetchNow() {
      setIsFetching(true);
      const data = await getSearchHistory();
      setSearchHistory(data);
      setIsFetching(false);
    }

    fetchNow();
  }, []);

  return {
    isFetching,
    searchHistory,
  };
}
