
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx';
import Body from "./components/Body.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import NotFound from './components/NotFound';
import RestuarentMenu from './components/RestuarentMenu';
const router=createBrowserRouter([
  { 
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Body />
    },
    {
      path:"/home",
      element:<Home/>
    },
    { path:"/about",
      element:<About/>
    },  { path:"/contact",
      element:<Contact/>
    }, 
     { path:"/cart",
      element:<Cart/>
    },
    {
      path:"/restaurant/:id",
      element:< RestuarentMenu/>
    }

  ],
  errorElement:<NotFound/>

}
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
