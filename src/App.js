import Header from "./components/Header";
import SearchHistory from "./SearchHistory";
import SearchHistoryTitle from "./SearchHistoryTitle";
import SearchForm from "./SearchForm";
import useSearch from "./useSearch";

function App() {
  const { mutate } = useSearch();

  return (
    <div className="App">
      <Header />
      <SearchForm
        onSubmit={(urlInput, nodeInput) => mutate({ urlInput, nodeInput })}
      />
      <SearchHistoryTitle />
      <SearchHistory />
    </div>
  );
}

export default App;
