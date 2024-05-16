import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
function handleChange() {}
function handleSubmit() {}

  return (
    <div className='signin  h-[100vh] flex justify-center items-center '>

   

        <div className="container max-w-[1100px]  mx-auto  flex justify-center items-center shadow-xl p-10 rounded"> 



        <div className="input-container flex justify-center flex-col items-center ">
          
            <h1 className='font-bold text-[#F21A05] text-xl'>Sign Up</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgG55RWk-DqOX2JcASiooVCoyhBt4Y7tdngVPixA7_g&s" alt="" className='w-[100px] rounded-full h-[100px]' />
            <form action="/auth/login" method="POST" className="flex justify-center items-center flex-col">
            <div className="m-2 flex justify-between md:mx-4 seach-wrapper border w-[240px] h-[44px] items-center rounded-lg bg-[#F8F8F8]">
          <input className=" text-sm bg-[#F8F8F8] mx-2 w-[80%] outline-none border-none "  type="text" name="email" placeholder='Enter your Name ' onChange={handleChange}/>
        </div>
      <div className="m-2 flex justify-between md:mx-4 seach-wrapper border w-[240px] h-[44px] items-center rounded-lg bg-[#F8F8F8]">
          <input className=" text-sm bg-[#F8F8F8] mx-2 w-[80%] outline-none border-none "  type="text" name="email" placeholder='Enter your email address ' onChange={handleChange}/>
        </div>
        <div className="m-2 flex justify-between md:mx-4 seach-wrapper border w-[240px] h-[44px] items-center rounded-lg bg-[#F8F8F8]">
          <input className=" text-sm bg-[#F8F8F8] mx-2 w-[80%] outline-none border-none " name="passsword" type="text" placeholder='Enter your password ' onChange={handleChange} required />
        </div>
      <button type="submit" className="rounded-[5px] font-medium text-white h-10 bg-[#FF2247] w-[120px]" onClick={handleSubmit}>CONTINUE</button>
    <Link to="/signin">  <p className='text-medium font-medium'>Existing User? Sign in</p></Link>
      </form>
        </div>
    <div className="logo">
        <img src="https://www.shutterstock.com/image-vector/free-delivery-service-logo-badge-600nw-1505236334.jpg" alt="" className='w-[500px] rounded'/>
    </div>




       </div>


    </div>
  )
}
