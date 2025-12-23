import { useState } from 'react';

export default function Signup({ setSignupData,setSignIn}) {
  const [result, setResult] = useState({ name: '', email: '', num: '' });
  const [error, setError] = useState({});


//   function inputStyle(field) {
//      console.log("error",error[field])
//   return {
//     border: error[field] ? "2px solid red" : "1px solid #aaa"
   
//   };
// }


  function handleChange(e) {
    const { name, value } = e.target;
    setResult((prev) => ({ ...prev, [name]: value }));
    console.log(result);
    setError((prev)=>({...prev,[name]:""}))
  }
  function validate(){
    const temp = {};
            if (!result.name) temp.name = 'Name is required';
            if (!result.email) temp.email = 'Email is required';
            if (!result.num) temp.num = 'Phone number is required';
      return temp;
  }
  function handleSubmit(e){
            e.preventDefault();
             const temp=validate()

           // setError( );
            if (Object.keys(temp).length === 0) {
              setSignupData(result);
              setSignIn(true);
              alert('Signup Successful');
            }
            else{
              setError(temp)
            }
          }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input
          className={error.name?"input-error":""}
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
        className={error.email?"input-error":""}
          type="email"
          name="email"
          value={result.email}
          onChange={handleChange}
          
        />
        {!result.email &&<p>{error.email}</p> }
        <br />
        <label htmlFor="">Phone:</label>
        <input
          className={error.num?"input-error":""}
          type="number"
          name="num"
          onChange={handleChange}
          value={result.num}
            
      
        />
        {!result.num &&<p>{error.num}</p>}
        <button type="submit" className="signUpBtn"
        >
          SignUp
        </button> <br/><br/><span>Do you have Account?</span>
        <button className="login-btn" onClick={()=>setSignIn(true)}>Login</button>
      </form>
    </>
  );
}
