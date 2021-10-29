import { useComment } from "src/hooks/useComment";

const { useUser } = require("src/hooks/useUser");

export const Comment = () => {
    const {data, error, isLoading} = useComment();
  
    if(isLoading) {
      return (
        <div>Loading...</div>
      )
    }
    if (error) {
      return (
      <div>{error.message}</div>
      )
    }
    return (
      <div>
        <h1>{data.name}</h1>
        <ul>
          <li>{data.email}</li>
          <li>{data.body}</li>
        </ul>
      </div>
    )
  }
  
  