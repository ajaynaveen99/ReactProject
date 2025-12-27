// import { useParams } from "react-router-dom";

// export default function UserDetails() {
//   const {id}=useParams()

//   return (
//     <>
//       <h2> User Details Page</h2>
//       <p>User ID from URL: {id}</p>
//     </>
//   );
// }
// ================
//Using API
//================
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </>
  );
}
