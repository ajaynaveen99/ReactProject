import {createBrowserRouter,RouterProvider,Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Users from "./pages/Users"
import UserDetails from "./pages/UsersDetails"
import ProtectedRoute from "./auth/ProtectedRoute"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const router=createBrowserRouter([{
  path:"/",
 element:<App/>,
 errorElement:<NotFound/>,
 children:[
   { index: true, element: <Navigate to="/login" replace /> },

      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      {path:"home",
        element:(<ProtectedRoute><Home/></ProtectedRoute>)
      },
       {
        path: "users",
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "users/:id",
        element: (
          <ProtectedRoute>
            <UserDetails />
          </ProtectedRoute>
        ),
      },

 ]

 
}]
  
)

createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
