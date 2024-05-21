import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { FcHome } from "react-icons/fc";
import { useEffect,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { FaRegStar } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import { fetchProductById } from '../../redux/product/productSlice';
import { addItem } from '../../redux/cart/cartSlice';
export default function Details() {

    // const [product,setProduct]= useState([])
    const {id}= useParams()
   const dispatch= useDispatch()

const dipatch=useDispatch()
useEffect(() =>{
    //
    dipatch(fetchProductById(id));
  
},[]);




const product= useSelector((state)=>state.product.products)
const user= useSelector((state)=>state.user.user)


function handleCart(product,user){
        const cartItem={
            product:{product},
            user:user
        }
console.log(cartItem)
dispatch(addItem(cartItem))

}


  return (
<>

<div className="header shadow-xl">
    <div className="max-w-[1100px] mx-auto flex justify-between items-center">

 
<div className="img">
<img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="" className='w-[130px] h-[110px]' />
</div>

<div className="btn">
<Link to="/"><button className='bg-white border-[1px] p-5  rounded-[16px] w-[150px] h-[60px ] hover:bg-[#FAFAFA] transition-all ease-in-out'> <FcHome className='text-2xl ' style={{display:"inline"}}/> Home</button></Link> 
</div>





    </div>




</div>
<div className="box-container flex justify-evenly items-center">
{product.map((p)=>{
        return(
            <>
            <div className="box1">


  
<div className="photo">

    <img src={p.url} alt="" className='h-[350px] object-contain w-[700px]' />
</div>

</div>
<div className="box2 flex justify-center flex-col gap-2">


    <h1 className='font-bold text-4xl' >{p.item}</h1>
    <p className='font-medium text-2xl' >Restaurant: {p.restaurant}</p>
    <p className='font-medium text-2xl'>Price: ₹{p.price}</p>
    <p className='text-base flex justify-center items-center bg-[#1F943B] w-[50px]  rounded-full text-white font-bold'><FaRegStar style={{display:"inline"}} /> {p.rating}</p>

    <button className='p-3 bg-[#FFBB10] text-[#796030] rounded-xl w-[134px] font-bold'
    onClick={()=>{
toast.success("item added to cart")
handleCart(product,user);
    }}>ADD TO CART</button>
    
    <p>Speciality: {p.region}</p>
  
</div>

<ToastContainer/>
            </>
        )
    })}




</div>



</>

    
  )
}
