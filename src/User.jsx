import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then(response => response.json())
  //       .then(data => setUsers(data))
  //       .catch(error => console.log(error));
  //   },[]);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if(loading){
    return <h1>Loading.......</h1>

  };
  if(error){
    return <h1>Error........</h1>
  }
  return (
    <>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
}

export default User;
