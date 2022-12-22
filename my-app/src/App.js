import './App.css';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './Login';
import Register from './Register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },{
      path: "/signup",
      element: <Register/>,
    },{
      path: "/login",
      element: <Login/>,
    },
    
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
