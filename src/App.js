import Header from "./components/Header";
import SearchHistory from "./SearchHistory";
import SearchHistoryTitle from "./SearchHistoryTitle";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchHistoryTitle />
      <SearchHistory />
    </div>
  );
}

export default App;
