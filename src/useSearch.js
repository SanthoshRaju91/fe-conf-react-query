import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

function performSearch(urlInput, nodeInput) {
  return axios.post("http://localhost:3000/queries", {
    query: urlInput,
    nodes: nodeInput,
  });
}

export default function useSearch() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    ({ urlInput, nodeInput }) => performSearch(urlInput, nodeInput)
    //, {
    //   onSettled: () => {
    //     queryClient.invalidateQueries("history");
    //   },
    // }
  );

  return {
    isLoading,
    mutate,
  };
}
