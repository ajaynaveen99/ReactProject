import { useState } from 'react'
import './App.css'

function App() {
const [count, setIsLoggedIn] = useState(1);

  return (
    <div>
{count>0 && <p>you have {count} message{count>1? 's': ''}</p>}
    </div>
  );
}

export default App;
