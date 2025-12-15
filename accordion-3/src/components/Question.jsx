import { useState } from "react";

function Question({ title, info }) {
  // local state for each question
  const [isActive, setIsActive] = useState(false);

  // toggle open/close
  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="question">
      <header onClick={toggle}>
        <h4>{title}</h4>
        <button className="btn">{isActive ? "-" : "+"}</button>
      </header>
      {isActive && <p>{info}</p>}
    </div>
  );
}

export default Question;
