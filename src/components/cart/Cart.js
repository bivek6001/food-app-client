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
        {/* <ToastContainer className="block" position="bottom-center"/> */}
      <ToastContainer  position="bottom-center"/>
     <Header/>
     <h1 className='max-w-[1100px] mx-auto text-center font-bold text-3xl my-3 '>Your <span className='text-[#65B99E] text-3xl'>CART</span></h1>
{/* unavailable render code */}
   {cart.length!==0 ? cart.map((p)=>(
    
    <>
    <div className="cart-container">

    <div className="wrapper mx-auto max-w-[1100px] flex justify-start items-center border-b-[1px] p-6 gap-2">

      <div>
        <img src={p.url} alt="" className='w-[60px] h-[60px] object-cover rounded-lg'/>
      </div>
      <div className="item font-bold">{p.item} by {p.restaurant}</div>
      <div className="price font-bold mx-9">Price ₹{p.price}</div>


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
        <button className='bg-[#FB7087] text-white font-semibold p-2 rounded-lg' onClick={()=>{
          toast.success("order successful!");
          
        }}>CHECKOUT</button>
      </div>


    <div className="contact max-w-[600px] mx-auto my-10">

      <h1 className='font-bold text-2xl'> Still have a question?</h1>
      <button className=' hover:scale-125 transition ease-in-out flex justify-center items-center m-10  rounded-[27px] hover:bg-[#ED2736] hover:text-white font-bold text-base flex-3 p-4 w-[260px] border-[1px] border-black  '><TbMessageChatbot className='mx-3 ' /> CONTACT US</button>
    </div>
 
    </div>
  )
}
