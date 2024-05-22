import React from 'react'
import { Link } from 'react-router-dom'
import { TbMessageChatbot } from "react-icons/tb";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from '../header/Header';
// import { FaRegStar } from "react-icons/fa";
export default function Cart() {
  async function checkoutHandler(amount){

    const {data}= await axios.post("http://localhost:9000/checkout",{amount})
    console.log(data)
    console.log(window)
    const{id}=data



    const options = {
      "key": "rzp_test_LsygMd0iSR9OoZ", // Enter the Key ID generated from the Dashboard
      "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Blinkit",
      "description": "Test Transaction",
      "image": "https://play-lh.googleusercontent.com/kXJYGrvy4pvHwzw6tMgf-KPthnPDg4RvvoOTgffwSuHCUL63WVxaj3ojX3ADBS0UiD0",
      "order_id": id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#E0ED2C"
      }
  };


  let rzp1 = new window.Razorpay(options);
  rzp1.open()
toast.success("done")
}




const cart= useSelector((state)=>state.cart.cart)
console.log(cart)











  return (

    <div className="container ">
      <ToastContainer/>
     <Header/>
{/* unavailable render code */}
   {cart.length!==0 ? cart.map((p)=>(
    
    <>
    <div className="cart-box-container">
    <div className="item-pic max-w-[1100px] mx-auto flex gap-4 items-center p-5 border-b-[1px]">
      <img src={p.url} alt="item photo" className='w-[100px] h-[100px] object-contain' />
      <div className="details font-bold">
      {p.item}
    </div>
    <div className="quantity mx-10"> Quantity {1}
    <select name="" id="">
    <option value="1">1</option>  <option value="1">1</option>  <option value="1">1</option>
    </select>
    
    
    </div>

  

    </div>
    <div className="btn">
    <button onClick={()=>{
      toast("deleted successfully")
    }
    }>Delete</button>

    </div>
   
 


    </div>
    
    
    
    </>

    )) 
  :  <div className="center my-10 flex justify-center items-center flex-col"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIVSn3YBu-HCmOSjlNaL8JR1v8CSQhSnuUesY-A2PoA&s" alt="" />
        <p className='font-bold'>Your cart is empty</p>
        <p className='text-xsm'>You can go to home page to view more restaurants</p>
     </div> }  
   
   {/* available render code */}
  


  


  


   <div className="checkout mx-auto max-w-[1100px]  ">
        <button className='bg-yellow-900 ' onClick={()=>{
          toast.success("initiating order")
          checkoutHandler(56);
        }}>CHECKOUT</button>
      </div>


    <div className="contact max-w-[600px] mx-auto my-10">

      <h1 className='font-bold text-xl'> Still have a question?</h1>
      <button className=' flex justify-center items-center m-10  rounded-[27px] text-base flex-3 p-4 w-[260px] border-[1px] border-black  font-medium'><TbMessageChatbot /> CONTACT US</button>
    </div>
 
    </div>
  )
}
