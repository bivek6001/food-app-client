import React from 'react'
import { Link } from 'react-router-dom'
import { TbMessageChatbot } from "react-icons/tb";
import axios from 'axios';
import { useSelector } from 'react-redux';

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

}




const cart= useSelector((state)=>state.cart.cart)
console.log(cart)











  return (
    <div className="container ">
        <div className="header max-w-[1100px] mx-auto flex justify-between rounded shadow-xl items-center  ">
            <div className="logo">
            <Link to="/" >  <img src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg" alt="" className='w-[100px] bg-white rounded'/>
               </Link>
            </div>
            <h1 className='font-medium text-2xl'>SECURE CHECKOUT</h1>
        </div>
{/* unavailable render code */}
   {cart.length!==0 ? cart.map((p)=>(
     <div className="cart-details font-bold text-4xl max-w-[1100px] mx-auto flex justify-center  flex-col">
     <h1>MY CART</h1>
   <div className="right-and-left-part-container flex justify-center items-center gap-5">
   <div className="left-cart flex justify-start bg-gray-300 p-10 ">

<div className="product-img"><img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000995.jpg" alt="" className='w-[100px]'/></div>
<p className='text-base'>Indian Tandoori Zinger Meal</p>
<select name="quantity" id="" className='text-base'>
 <option value="">select quantity</option>
 <option value="1">1</option>
 <option value="2">2</option>
 <option value="3">3</option>
</select>

</div>
<div className="right-cart flex  justify-center  flex-col rounded-lg shadow-xl h-[300px] w-[450px]">
<h3 className='text-lg'>3 ITEMS</h3>
<p className='text-lg'>Subtotal $1000</p>
<p className='text-lg'>GST $45</p>
<button className='bg-red-500 m-10 text-white rounded-xl text-base flex-3 p-4 w-[260px]' onClick={()=>{
   checkoutHandler(56);
 }} >CHECKOUT</button>
</div>
   </div>

   
   </div>

   ))
  :  <div className="center my-10 flex justify-center items-center flex-col">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIVSn3YBu-HCmOSjlNaL8JR1v8CSQhSnuUesY-A2PoA&s" alt="" />
        <p className='font-bold'>Your cart is empty</p>
        <p className='text-xsm'>You can go to home page to view more restaurants</p>
    </div> } 
   
   {/* available render code */}
  


  








    <div className="contact max-w-[600px] mx-auto my-10">

      <h1 className='font-bold text-xl'> Still have a question?</h1>
      <button className=' flex justify-center items-center m-10  rounded-[27px] text-base flex-3 p-4 w-[260px] border-[1px] border-black  font-medium'><TbMessageChatbot /> CONTACT US</button>
    </div>

    </div>
  )
}
