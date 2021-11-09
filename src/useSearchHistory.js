import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

async function getSearchHistory(page) {
  const response = await axios.get(
    `http://localhost:3000/queries/paginate?page=${page - 1}&limit=10`
  );
  return response.data;
}

export function useSearchHistory() {
  const [page, setPage] = useState(1);
  const { isFetching, data = {} } = useQuery(
    ["history", page],
    () => getSearchHistory(page),
    {
      keepPreviousData: true,
    }
  );

  function handlePageChange(selectedPage) {
    setPage(selectedPage);
  }

  return {
    isFetching,
    searchHistory: data.queries || [],
    page,
    pages: data.metadata && data.metadata.pages,
    handlePageChange,
  };
}
