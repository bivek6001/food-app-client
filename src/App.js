
import './App.css';
import Foods from './components/food/Foods';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import Footer from './components/footer/Footer';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <> <Header/>
      <Foods/>
      <Footer/></>
   
    ),
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path:"/signin",
    element:<Signin/>
  },{
    path:"/signup",
    element:<Signup/>
  }
]);
function App() {
  return (
    <>
    <RouterProvider router={router} />

  </>
   
  );
}

export default App;
