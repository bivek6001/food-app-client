import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { initiate } from '../../redux/auth/authSlice';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router-dom';
import Profile from '../profile/Profile';
export default function Signin() {
  const dispatch=useDispatch();
  const navigate= useNavigate();
  const [credentials,setCredentials] =useState({
    
    email:"",
    password:""
  })
function handleChange(e) {
  setCredentials({
    ...credentials,[e.target.name]:e.target.value
  })
  console.log(e.target.name)
}
async function handleSubmit(e) {
  e.preventDefault()
  console.log(credentials)
  const response= await axios.post("http://localhost:8000/user/signin",credentials)
  console.log(response)

  
  const {data}=response;
  if(data.success){
    toast.success(data.message)
    dispatch(initiate(data.data))
  } 
  else{
    toast.error(data.message)
  }
 ;


    // navigate("/signin")
  
}
const user= useSelector((state)=>state.user.user)

  return (<>
{user ? <Profile/> :     <div className='signin  h-[100vh] flex justify-center items-center '>

   

<div className="container max-w-[1100px]  mx-auto  flex justify-center items-center shadow-xl p-10 rounded"> 



<div className="input-container flex justify-center flex-col items-center ">
  
    <h1 className='font-bold text-[#F21A05] text-xl'>Sign in</h1>
    <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgG55RWk-DqOX2JcASiooVCoyhBt4Y7tdngVPixA7_g&s" alt="" className='hover:rotate-180  transition ease-in-out w-[100px] rounded-full h-[100px]' /></Link> 
    <form  className="flex justify-center items-center flex-col">
<div className="m-2 flex justify-between md:mx-4 seach-wrapper border w-[240px] h-[44px] items-center rounded-lg bg-[#F8F8F8]">
  <input className=" text-sm bg-[#F8F8F8] mx-2 w-[80%] outline-none border-none "  type="text" name="email" placeholder='Enter your email address ' onChange={handleChange}/>
</div>
<div className="m-2 flex justify-between md:mx-4 seach-wrapper border w-[240px] h-[44px] items-center rounded-lg bg-[#F8F8F8]">
  <input className=" text-sm bg-[#F8F8F8] mx-2 w-[80%] outline-none border-none " name="password" type="text" placeholder='Enter your password ' onChange={handleChange} required />
</div>
<button  className="rounded-[5px] font-medium text-white h-10 bg-[#FF2247] w-[120px]" onClick={handleSubmit}>CONTINUE</button>
<Link to="/signup">   <p className='text-medium font-medium my-4 text-[#FF2247]' >or create an Account?</p></Link>
</form>
</div>
<div className="logo hidden sm:block">
<img src="https://media.licdn.com/dms/image/C5612AQG3GCx7VqgZXg/article-cover_image-shrink_720_1280/0/1619447176564?e=2147483647&v=beta&t=FJkj-glfZMxvG6PMt98C0yf5Xs00gvYxxBecG5j-lqQ" alt="" className='w-[500px] rounded'/>
</div>




</div>
<ToastContainer/>
</div>}

    </>
  )
}
