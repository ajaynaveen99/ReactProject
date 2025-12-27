// import { Link } from "react-router-dom";

// export default function Users() {
//   const users = [
//     { id: 1, name: "Ajay" },
//     { id: 2, name: "Ravi" },
//     { id: 3, name: "Kiran" }
//   ];

//   return (
//     <>
//       <h2> Users Page</h2>
//       <p>Click on a user to see details</p>

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <Link to={`/users/${user.id}`}>
//               {user.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
//=======================
//Using API
//=======================
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <h2> Users (API)</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
