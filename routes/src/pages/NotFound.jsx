
import { useRouteError } from "react-router-dom";
export default function NotFound() {



   const error=useRouteError()
    console.log(error)
   
  return (
    <> 
    <h1>{error.status}</h1>
    <h1>{error.statusText}</h1>
    <h1>{error.data}</h1>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </>
  );
}
