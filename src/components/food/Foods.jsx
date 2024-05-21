import React from 'react'
import { data } from './data'
import { FaRegStar } from "react-icons/fa";
import { useEffect,useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../redux/product/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Foods() {

 
const dispatch = useDispatch();
useEffect(() => {
dispatch(fetchAllProducts())



},[]);

const products= useSelector((state)=>state.product.products)



  return (
    <div className='food-banner'>


        <div className="data max-w-[1100px] mx-auto font-bold text-2xl">
            <h1>Restaurants with online food delivery in your City</h1>

            <div className="foods flex justify-start flex-wrap">

{products.map((d)=>{
    return (
       <Link to={`/details/${d._id}`}> <div className=" flex justify-center m-5 flex-col card w-[300px] h-[260px] border-3 rounded-lg transition ease-in-out hover:scale-90 shadow-xl">
                <img src={d.url} alt="" className='  w-[150px] h-[132px] object-cover rounded  ' />
                <p className='text-2xl font-bold' >{d.restaurant}</p>
                <p className='text-xl font-medium'>{d.item}</p>
                <p className='text-base flex justify-center items-center bg-[#1F943B] w-[50px]  rounded-full text-white font-bold'><FaRegStar style={{display:"inline"}} /> {d.rating}</p> <span>51Mins</span>
                <p className='text-[#676A6D] text-base font-normal truncate'>{d.region}</p>
        </div>    
        </Link>
    )
})}
  </div>
        </div>






    </div>
  )
}
