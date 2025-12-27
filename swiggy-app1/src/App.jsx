import { useState } from "react";
import Header from "./components/Header.jsx";
import {Outlet}from 'react-router-dom'


export default function App() {
  const [buttonLabel, setButtonLabel] = useState("On");
  const [Class, setClass] = useState("app-green");
  return (
    <div className={Class} >

      <Header buttonLabel={buttonLabel}
        setButtonLabel={setButtonLabel}
        Class={Class}
        setClass={setClass} />
        <Outlet/>
     
    </div>
  );
}
