import { Router } from "@reach/router";
import { useState } from "react";
import Header from "./components/Header";
import Merchant from "./Merchant";
import MerchantSearch from "./MerchantSearch";
import { MerchantContext } from "./context";

function App() {
  const [merchant, setMerchant] = useState({});

  function updateMerchant(merchant) {
    setMerchant(merchant);
  }

  return (
    <div className="App">
      <Header />
      <MerchantContext.Provider value={{ merchant, updateMerchant }}>
        <Router>
          <MerchantSearch path="/" />
          <Merchant path="details" />
        </Router>
      </MerchantContext.Provider>
    </div>
  );
}

export default App;
