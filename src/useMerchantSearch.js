import axios from "axios";
import { useMutation } from "react-query";
import { navigate } from "@reach/router";

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
  const {
    mutate,
    data = {},
    isLoading,
  } = useMutation((merchant) => search(merchant), {
    onSuccess: () => {
      navigate("details");
    },
  });

  return {
    isLoading,
    mutate,
    data,
  };
}
