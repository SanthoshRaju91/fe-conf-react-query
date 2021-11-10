import MerchantDetails from "./components/MerchantDetails";
import useMerchantSearch from "./useMerchantSearch";

export default function Merchant() {
  const { data } = useMerchantSearch();

  return <MerchantDetails details={data} />;
}
