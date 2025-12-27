import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function Signup() {
  const { setSignupData } = useOutletContext();
  const navigate = useNavigate();

  const [result, setResult] = useState({ name: "", email: "", num: "" });
  const [error, setError] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setResult((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const temp = {};
    if (!result.name) temp.name = "Name is required";
    if (!result.email) temp.email = "Email is required";
    if (!result.num) temp.num = "Phone number is required";
    return temp;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const temp = validate();

    if (Object.keys(temp).length === 0) {
      setSignupData(result);
      alert("Signup Successful");
      navigate("/login"); // ✅ redirect
    } else {
      setError(temp);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <label>Name:</label>
      <input
        className={error.name ? "input-error" : ""}
        name="name"
        value={result.name}
        onChange={handleChange}
      />
      <p>{error.name}</p>

      <label>Email:</label>
      <input
        className={error.email ? "input-error" : ""}
        name="email"
        value={result.email}
        onChange={handleChange}
      />
      <p>{error.email}</p>

      <label>Phone:</label>
      <input
        className={error.num ? "input-error" : ""}
        name="num"
        value={result.num}
        onChange={handleChange}
      />
      <p>{error.num}</p>

      <button type="submit" className="signUpBtn">Sign Up</button>

      <br /><br />
      <span>Already have an account?</span>
      <button type="button" className="login-btn" onClick={() => navigate("/login")}>
        Login
      </button>
    </form>
  );
}
