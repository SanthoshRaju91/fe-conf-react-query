import axios from "axios";
import { useMutation } from "react-query";
import { navigate } from "@reach/router";
import { useContext } from "react";
import { MerchantContext } from "./context";

async function search(merchant) {
  const response = await axios.post(
    "http://localhost:3000/merchant/search",
    {
      merchant,
    },
    {
      headers: {
        "Content-Type": "applicaiton/json",
      },
    }
  );
  return response.data;
}

export default function useMerchantSearch() {
  const { updateMerchant } = useContext(MerchantContext);
  const {
    mutate,
    data = {},
    isLoading,
  } = useMutation((merchant) => search(merchant), {
    onSuccess: (data) => {
      updateMerchant(data);
      navigate("details");
    },
  });

  return {
    isLoading,
    mutate,
    data,
  };
}
