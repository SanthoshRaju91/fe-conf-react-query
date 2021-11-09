import SearchHistoryTable from "./components/SearchHistoryTable";
import { useSearchHistory } from "./useSearchHistory";

export default function SearchHistory() {
  const { isFetching, searchHistory, page, pages, handlePageChange } =
    useSearchHistory();

  return (
    <SearchHistoryTable
      data={searchHistory}
      loading={isFetching}
      showPagination={true}
      page={page}
      pages={pages}
      handlePageChange={handlePageChange}
    />
  );
}
