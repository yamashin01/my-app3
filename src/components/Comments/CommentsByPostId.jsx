import Link from 'next/link';
import { useCommentsByPostId } from 'src/hooks/useFetchArray';

export const CommentsByPostId = (props) => {
    const {data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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