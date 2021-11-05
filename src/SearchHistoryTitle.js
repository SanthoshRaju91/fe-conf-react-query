import { useSearchHistory } from "./useSearchHistory";

export default function SearchHistoryTitle() {
  const { searchHistory } = useSearchHistory();

  return (
    <div className="w-11/12 mx-auto mt-12">
      <h1 className="text-xl font-bold text-gray-700">
        Search History - {searchHistory.length}
      </h1>
    </div>
  );
}
