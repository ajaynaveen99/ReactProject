import { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  const [signupData, setSignupData] = useState({});
  const [isSignIn, setSignIn] = useState(false);
  const [isHome ,setHome]=useState(true)
  
 

  function IsHomepage({setHome,signupData}) {

    return (isHome?<Login signupData={signupData} setHome={setHome} setSignIn={setSignIn}/>:<div className="homePage">WellCome to Home Page</div>)
  
  }
  return (
    <>
      {isSignIn ?
        <IsHomepage setHome={setHome} signupData={signupData}/> : <Signup setSignupData={setSignupData} setSignIn={setSignIn} /> 

      }
    </>
  );
}

export default App;
