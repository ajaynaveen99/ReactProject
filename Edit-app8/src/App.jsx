import { useState } from 'react';
//import EditFromGpt from './components/EditFromGpt';

function SimpleEdit() {

  const [user, setUser] = useState({ name:"",email:"" ,number:""});
  const [update, setUpdate] = useState(false);
 const [inputValue, setInputValue] = useState({name:"",email:"" ,number:""});


  function handleEdit() {
    setUser({...inputValue})
    setUpdate(true);
  }
  function handleSave() {
       setInputValue({...user});
       setUser({name:"",email:"",number:""});

  }
  function handleUpdate() {
   setInputValue({...user})
   setUser({name:"",email:"",number:""});
    setUpdate(false);
    
  }
  function handleChange(e) {
    const {name,value}=e.target;
    setUser((prev)=>({...prev,[name]:value}))
  }


  return (
    <>
      <h3>Edit Example </h3>

      <input
        type="text"
        name="name"
        placeHolder="Enter Name"
        value={user.name}
        onChange={handleChange}
      />
      
      <input
        type="email"
        name="email"
        placeHolder="Enter Email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="number"
        placeHolder="Enter Number"
        value={user.number}
        onChange={handleChange}
      />


      <br />
      <br />

      {update? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={handleSave}>save</button>

      <hr />

      <p>
        <strong>Object value:</strong>{JSON.stringify(inputValue)}
      </p>
    </>
  );
}

function App() {
  return (
    <>
      {/* <Test /> */}
      <SimpleEdit />
      {/* <EditFromGpt /> */}
    </>
  );
}

export default App;
