import React from 'react'
import { Link } from 'react-router-dom'
export default function Cart() {
  return (
    <div className="container ">
        <div className="header max-w-[1100px] mx-auto flex justify-between rounded shadow-xl items-center ">
            <div className="logo">
            <Link to="/" >  <img src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg" alt="" className='w-[100px] bg-white rounded'/>
               </Link>
            </div>
            <h1 className='font-medium text-2xl'>SECURE CHECKOUT</h1>
        </div>

    <div className="center my-10 flex justify-center items-center flex-col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIVSn3YBu-HCmOSjlNaL8JR1v8CSQhSnuUesY-A2PoA&s" alt="" />
        <p className='font-bold'>Your cart is empty</p>
        <p className='text-xsm'>You can go to home page to view more restaurants</p>
    </div>

    </div>
  )
}
