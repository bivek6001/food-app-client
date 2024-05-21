import React from 'react'
// import { FaOpencart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from 'react-redux';
export default function Header() {
  const user= useSelector((state)=>state.user.user)
  console.log(user)
  return (
    <div className='p-[15px] shadow-xl sticky top-0 z-10 bg-white'>
        <div className=" header max-w-[1100px] mx-auto flex justify-between">
     <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVY1YmsHqGHkoKaP5x8Ri21DfqwXHlw3mIuGxze9dbQ&s" alt="logo" className='hover:scale-125 transition ease-in-out w-[100px]' /></div>
<div className="right flex justify-center items-center gap-4">
<div className="cart">
        
        <Link to="/cart">
        <GiShoppingCart className='text-3xl font-bold text-blue-500 hover:scale-125 transition ease-in-out' />
        </Link>
       
       </div>
       <Link to="/signin">
         <div className="login flex flex-col justify-center items-center">
         <img src="https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child-thumbnail.png" alt="" className='h-[40px] hover:scale-125 transition ease-in-out' />
         <div>{user ? `hello ${user.name}` : `Hello`}</div>
        </div></Link> 
</div>
  
        </div>
        </div>
  )
}
