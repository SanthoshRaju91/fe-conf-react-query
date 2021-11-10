import MerchantSearchForm from "./components/MerchantSearchForm";
import useMerchantSearch from "./useMerchantSearch";

export default function MerchantSearch() {
  const { isLoading, mutate } = useMerchantSearch();

  return <MerchantSearchForm onSubmit={mutate} isLoading={isLoading} />;
}
