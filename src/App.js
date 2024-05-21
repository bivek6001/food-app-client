
import './App.css';
import Foods from './components/food/Foods';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Test from './test';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import Footer from './components/footer/Footer';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import Details from './components/details/Details';
import Protected from './Protected';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Loading from './components/loading/Loading';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>   <> <Header/>
      <Foods/>
      <Footer/></></Protected>
   
   
    ),
  },
  {
    path: "/cart",
    element: <Protected><Cart/></Protected>,
  },
  {
    path:"/signin",
    element:<Signin/>
  },{
    path:"/signup",
    element:<Signup/>
  },{
    path:"/details/:id",

    element:  <Details/>
  },{
    path:"/test",
    element:<Test/>
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
