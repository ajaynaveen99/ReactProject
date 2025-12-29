import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [form, setForm] = useState({ email: "", phone: "" });
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    if (user && form.email === user.email && form.phone === user.phone) {
      localStorage.setItem("loggedIn", "true");
      setSuccess(true);
    } else {
      alert("Invalid credentials");
    }
  }

  if (success) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <button>Login</button>
      </form>
      <p onClick={() => navigate("/signup")} className="link">Create account</p>
    </div>
  );
}
