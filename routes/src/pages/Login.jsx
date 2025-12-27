import { useState } from "react";
import { Navigate, useNavigate ,useOutletContext} from "react-router-dom";
    
export default function Login({ }) {
  const { signupData} = useOutletContext();
  const navigate = useNavigate();

  const [result, setResult] = useState({ email: "", num: "" });
  const [error, setError] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setResult((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  }

  function handleLogin(e) {
    e.preventDefault();

    const temp = {};
    if (!result.email) temp.email = "Email is required";
    if (!result.num) temp.num = "Phone is required";
    setError(temp);

    if (Object.keys(temp).length === 0) {
      if (
        result.email === signupData.email &&
        result.num === signupData.num
      ) {
        alert("Login successful");
        setLoggedIn(true);
      } else {
        alert("Invalid login details");
      }
    }
  }

  // ✅ Redirect after login
  if (loggedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <label>Email:</label>
      <input name="email" value={result.email} onChange={handleChange} />
      <p>{error.email}</p>

      <label>Phone:</label>
      <input name="num" value={result.num} onChange={handleChange} />
      <p>{error.num}</p>

      <button className="signUpBtn">Login</button>

      <br /><br />
      <span>Don’t have an account?</span>
      <button type="button" className="login-btn" onClick={() => navigate("/signup")}>
        Signup
      </button>
    </form>
  );
}
