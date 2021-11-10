import { Router } from "@reach/router";
import Header from "./components/Header";
import Merchant from "./Merchant";
import MerchantSearch from "./MerchantSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <MerchantSearch path="/" />
        <Merchant path="details" />
      </Router>
    </div>
  );
}

export default App;
