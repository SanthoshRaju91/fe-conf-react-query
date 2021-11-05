import SearchHistoryTable from "./components/SearchHistoryTable";
import { useSearchHistory } from "./useSearchHistory";

export default function SearchHistory() {
  const { isFetching, searchHistory } = useSearchHistory();

  return <SearchHistoryTable data={searchHistory} loading={isFetching} />;
}
