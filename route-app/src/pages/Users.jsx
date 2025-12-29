import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 10)));
  }, []);

  return (
    <>
      <h2>Users List</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
