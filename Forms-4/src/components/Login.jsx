import { useState } from "react";

export default function Login({ signupData }) {
  const [result, setResult] = useState({ email: "", num: "" });
  const [error, setError] = useState({});


  function inputStyle(field) {
  return {
    border: error[field] ? "2px solid red" : "1px solid #aaa",
  };
}


  function handleChange(e) {
    const { name, value } = e.target;
    setResult((prev) => ({ ...prev, [name]: value }));
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
      } else {
        alert("Invalid login details ");
      }
    }
  }

  return (
    <>
      <h2>Login</h2>

      <form>
        <label>Email:</label>
        <input name="email" value={result.email} onChange={handleChange} style={inputStyle("email")} />
        {!result.email && <p>{error.email}</p>}

        <br />

        <label>Phone:</label>
        <input name="num" value={result.num} onChange={handleChange}  style={inputStyle("num")}/>
        {!result.num && <p>{error.num}</p>}


        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  );
}
