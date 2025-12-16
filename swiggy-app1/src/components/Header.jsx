 import Theme from "./Theme.jsx";
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
        <li>Home</li>
        <li> About</li>
        <li>Contact</li>
        <li>Cart</li></ul>
    </div>
  </>

  );
}