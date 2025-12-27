import { Outlet,Link } from "react-router-dom";
import { useState, } from "react";

export default function App() {
  const [signupData, setSignupData] = useState({});
  return (
    <>
      <h1> Data Router</h1>   
      

      <hr />
     <Outlet context={{ signupData, setSignupData }} />
    </>
  );
}
