import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
  const { data, error , isLoading, isEmpty } = useComments();

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
          {data.map((comment) => {
              return (
                  <li key={comment.id}>
                    <Link href={`/comments/${comment.id}`}> 
                        <p>{comment.body}</p>
                    </Link>
                  </li>
              )
          })}
      </ol>
  )
}
