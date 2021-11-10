import React from "react";

export const MerchantContext = React.createContext({
  merchant: {},
  updateMerchant: (merchant) => {},
});
