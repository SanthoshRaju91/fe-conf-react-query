import { useState } from "react";
import { Form, Input } from "reactjs-ui-components";
import LoaderButton from "./LoaderButton";

export default function MerchantSearchForm({ onSubmit, isLoading }) {
  const [searchInput, setSearchInput] = useState("");
  const [isSearchDisabled, setIsSearchDisabled] = useState(true);
  const [isSearchInputError, setIsSearchInputError] = useState(false);

  function handleSearchInputChange(e) {
    const input = e.target.value;
    setSearchInput(input);
    setIsSearchDisabled(!input);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!searchInput || !searchInput.trim()) {
      setIsSearchInputError(true);
      return;
    }

    onSubmit(searchInput);
  }

  return (
    <div className="w-11/12 mx-auto mt-12">
      <div className="h-48 bg-gray-100 shadow-xs rounded flex justify-center">
        <Form className="w-full" onSubmit={handleFormSubmit}>
          <div className="flex justify-center items-center py-12">
            <div className="w-4/12">
              <Input
                type="text"
                label="Enter Merchant ID / Merchant URL"
                className="pl-2 w-full"
                value={searchInput}
                error={isSearchInputError}
                onChange={handleSearchInputChange}
              />
            </div>
            <div className="mt-6">
              <LoaderButton
                isFetching={isLoading}
                kind="positive"
                className="ml-6 text-white"
                icon="MdSearch"
                disabled={isSearchDisabled}
              >
                Search
              </LoaderButton>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
