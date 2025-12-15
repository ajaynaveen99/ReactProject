import { useState } from 'react';

export default function Login() {
  const [result, setResult] = useState({ name: '', email: '', onPhone: '' });
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target, 'hi');
    console.log(name, 'hi');
    console.log(value, 'hi');
    setResult((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: value ? '' : `${labelFor(name)} is required`,
    }));
  }
  function labelFor(field) {
    if (field === 'onPhone') return 'Phone number';
    return field.charAt(0).toUpperCase() + field.slice(1);
  }

  function validateAll(data) {
    const temp = {};
    if (!data.name) temp.name = 'Name is required';
    if (!data.email) temp.email = 'Email is required';
    if (!data.onPhone) temp.onPhone = 'Phone number is required';

    return temp;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const tempErrors = validateAll(result);
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }
    setUser({ ...result });
    console.log('saved user:', result);
    alert('submitted');
  }

  const inputStyle = (field) => ({
    borderColor: errors[field] ? 'red' : '',
  });

  return (
    <form>
      <h2>Form</h2>

      <label>
        Enter Name :
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={result.name}
          onChange={handleChange}
          style={inputStyle('name')}
        />
      </label>
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

      <br />

      <label>
        Enter Email :
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={result.email}
          onChange={handleChange}
          style={inputStyle('email')}
        />
      </label>
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <br />

      <label>
        EnterPhoNo :
        <input
          name="onPhone"
          type="number"
          placeholder="Phone"
          value={result.onPhone}
          onChange={handleChange}
          style={inputStyle('onPhone')}
        />
      </label>
      {errors.onPhone && <p style={{ color: 'red' }}>{errors.onPhone}</p>}

      <button onClick={handleSubmit} type="submit">
          Login
      </button>
      <br/>
      <br/>
      <br/>
    </form>
  
  );
}
