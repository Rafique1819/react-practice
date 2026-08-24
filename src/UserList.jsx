import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setUsers(data);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);
  if (loading) {
  return ("loading......");
  }
  if (error) {
    return ("error.......");
  }

  return <>
  
  {
    users.map((user)=>(
      <p key={user.id}>{user.name}</p>
    ))
  }
  </>;
}

export default UserList;
