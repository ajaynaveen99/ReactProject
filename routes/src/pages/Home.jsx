import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    
      <h2> Home Page</h2>
      <h1>This is the home page of the app.</h1>
       <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/users">Users</Link>
        <br />
      </nav>
    </>
  );
}
