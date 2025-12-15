import { useState } from 'react';

export default function Signup() {
  const [result, setResult] = useState({ name: '', email: '', num: '' });
  const [error, setError] = useState({});

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
        />
        {!result.email &&<p>{error.email}</p> }
        <br />
        <label htmlFor="">Phone:</label>
        <input
          type="number"
          name="num"
          onChange={handleChange}
          value={result.num}
        />
        {!result.num &&<p>{error.num}</p>}
        <button
          onClick={(e) => {
            e.preventDefault();
            const temp = {};
            if (!result.name) temp.name = 'Name is required';
            if (!result.email) temp.email = 'Email is required';
            if (!result.num) temp.num = 'Phone number is required';
            setError(temp);
          }}
        >
          SignUp
        </button>
      </form>
    </>
  );
}
