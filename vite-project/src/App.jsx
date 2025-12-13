import { useState } from "react";

import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";




export default function App() {
  const [buttonLabel, setButtonLabel] = useState("On");
  const [Class, setClass] = useState("app-light")
  return (
    <div className={Class} >

      <Header buttonLabel={buttonLabel}
        setButtonLabel={setButtonLabel}
        Class={Class}
        setClass={setClass} />
      <Body />
    </div>
  );
}
