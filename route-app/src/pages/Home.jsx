import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  }

  return (
    <>
      <h1>Welcome Home</h1>
      <p>This page is protected</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
