import { usePosts } from "src/hooks/usePosts";

export const Posts = () => {
  const { data, error , isLoading, isEmpty } = usePosts();

  if (isLoading) {
      return <div>ローディング中</div>
  }
  if (error) {
      return <div>{error.message}</div>
  }
  if (isEmpty) {
      return <div>データはありません</div>
  }

  return (
      <ol>
          {data.map(post => {
              return (
                  <li key={post.id}>{post.title}</li>
              )
          })}
      </ol>
  )
}
