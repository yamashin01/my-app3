import { useRouter } from "next/dist/client/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePost = () => {
    const router = useRouter();
    console.log(`router = ${router}`);
    const { data: post, error: postError } = useSWR (
        router.query.id 
          ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
          : null
        , fetcher);
    const {data: user, error: userError} = useSWR (
        post?.userId 
          ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
          : null
        , fetcher);
    console.log({user, userError});
    
    return {
        post, 
        user, 
        error: postError || userError,
        isLoading: !user  && !userError,
    }
}