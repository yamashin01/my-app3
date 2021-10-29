import { useRouter } from "next/dist/client/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR (
    router.query.id 
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null
    , fetcher);
  return {
    data, 
    error, 
    isLoading: !data && !error,
  };
}
