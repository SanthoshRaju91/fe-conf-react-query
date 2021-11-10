import { useContext } from "react";
import MerchantDetails from "./components/MerchantDetails";
import { MerchantContext } from "./context";

export default function Merchant() {
  const { merchant } = useContext(MerchantContext);

  return <MerchantDetails details={merchant} />;
}
