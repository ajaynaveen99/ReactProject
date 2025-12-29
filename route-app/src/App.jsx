import { Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">Login</Link>
      </nav>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
