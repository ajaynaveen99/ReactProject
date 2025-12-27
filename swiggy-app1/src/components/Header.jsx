 import Theme from "./Theme.jsx";
 import {Link} from "react-router-dom"
 export default function Header({ buttonLabel, setButtonLabel, Class, setClass }) {

  return (<>
  
    <div className="header " >
      <img className="logo"
        src="https://i.pinimg.com/1200x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg"
        alt="Logo"
        width={100}
        height={100}
      />
      <Theme
        label={buttonLabel}
        setLabel={setButtonLabel}
        Class={Class}
        setClass={setClass}
      />
      <ul className="nav-items">
        <li><Link to="/home">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li></ul>
    </div>
  </>

  );
}