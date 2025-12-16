import { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  const [signupData, setSignupData] = useState({});
  const [isSignIn, setSignIn] = useState(false);
  
 // const [isSignUpPage, setSignUpPage] = useState(true);

  // function SignUpButton() {

  //   return !isSignUpPage ? <Signup setSignupData={setSignupData} setSignIn={setSignIn} /> : <div><button onClick={() => setSignUpPage(false)}>SignUpPage</button></div>
  // }

  return (
    <>
      {isSignIn ?
        <Login signupData={signupData} /> : <Signup setSignupData={setSignupData} setSignIn={setSignIn} /> 

      }
    </>
  );
}

export default App;
