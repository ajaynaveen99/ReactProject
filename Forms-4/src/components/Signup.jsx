import { useState } from 'react';

export default function Signup({ setSignupData,setSignIn}) {
  const [result, setResult] = useState({ name: '', email: '', num: '' });
  const [error, setError] = useState({});


  function inputStyle(field) {
  return {
    border: error[field] ? "2px solid red" : "1px solid #aaa",
  };
}


  function handleChange(e) {
    const { name, value } = e.target;
    setResult((prev) => ({ ...prev, [name]: value }));
    console.log(result);
  }
  return (
    <>
      <form action="">
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          value={result.name}
          onChange={handleChange}
          style={inputStyle("name")}
        />
        {(!result.name && <p>{error.name}</p> )}

        <br />
        <label htmlFor="" onChange={handleChange}>
          email:
        </label>
        <input
          type="email"
          name="email"
          value={result.email}
          onChange={handleChange}
            style={inputStyle("email")}
        />
        {!result.email &&<p>{error.email}</p> }
        <br />
        <label htmlFor="">Phone:</label>
        <input
          type="number"
          name="num"
          onChange={handleChange}
          value={result.num}
            style={inputStyle("num")}
      
        />
        {!result.num &&<p>{error.num}</p>}
        <button  className="signUpBtn"
          onClick={(e) => {
            e.preventDefault();
            const temp = {};
            if (!result.name) temp.name = 'Name is required';
            if (!result.email) temp.email = 'Email is required';
            if (!result.num) temp.num = 'Phone number is required';
            setError(temp);
            if (Object.keys(temp).length === 0) {
              setSignupData(result);
              setSignIn(true);
              alert('Signup Successful');
            }
          }}
        >
          SignUp
        </button> <span>OR</span>
        <button className="login-btn" onClick={()=>setSignIn(true)}>Login</button>
      </form>
    </>
  );
}
