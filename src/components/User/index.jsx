const { useUser } = require("src/hooks/useUser");

export const UsersComponent = () => {
    const {data, error, isLoading} = useUser();
  
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
          <li>{data.username}</li>
          <li>{data.address.city}</li>
          <li>{data.phone}</li>
          <li>{data.website}</li>
          <li>{data.company.name}</li>
        </ul>
      </div>
    )
  }
  
  