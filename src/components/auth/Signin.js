import React from 'react'
import { Link } from 'react-router-dom'
export default function Signin() {
function handleChange() {}
function handleSubmit() {}

  return (
    <div className='signin  h-[100vh] flex justify-center items-center '>

   

        <div className="container max-w-[1100px]  mx-auto  flex justify-center items-center shadow-xl p-10 rounded"> 



        <div className="input-container flex justify-center flex-col items-center ">
          
            <h1 className='font-bold text-[#F21A05] text-xl'>Sign in</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgG55RWk-DqOX2JcASiooVCoyhBt4Y7tdngVPixA7_g&s" alt="" className='w-[100px] rounded-full h-[100px]' />
            <form action="/auth/login" method="POST" className="flex justify-center items-center flex-col">
      <div className="m-2 flex justify-between md:mx-4 seach-wrapper border w-[240px] h-[44px] items-center rounded-lg bg-[#F8F8F8]">
          <input className=" text-sm bg-[#F8F8F8] mx-2 w-[80%] outline-none border-none "  type="text" name="email" placeholder='Enter your email address ' onChange={handleChange}/>
        </div>
        <div className="m-2 flex justify-between md:mx-4 seach-wrapper border w-[240px] h-[44px] items-center rounded-lg bg-[#F8F8F8]">
          <input className=" text-sm bg-[#F8F8F8] mx-2 w-[80%] outline-none border-none " name="passsword" type="text" placeholder='Enter your password ' onChange={handleChange} required />
        </div>
      <button type="submit" className="rounded-[5px] font-medium text-white h-10 bg-[#FF2247] w-[120px]" onClick={handleSubmit}>CONTINUE</button>
      <Link to="/signup">   <p className='text-medium font-medium'>or create an Account?</p></Link>
      </form>
        </div>
    <div className="logo">
        <img src="https://media.licdn.com/dms/image/C5612AQG3GCx7VqgZXg/article-cover_image-shrink_720_1280/0/1619447176564?e=2147483647&v=beta&t=FJkj-glfZMxvG6PMt98C0yf5Xs00gvYxxBecG5j-lqQ" alt="" className='w-[500px] rounded'/>
    </div>




       </div>


    </div>
  )
}
