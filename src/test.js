import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,fetchAllProducts } from './redux/product/productSlice'
export default function Test() {
    const amount= useSelector((state)=>state.product.amount)
    const dispatch= useDispatch()
  return (
    <div>
    <button className='border-2 p-4 rounded-xl ' onClick={()=>{
        dispatch(fetchAllProducts())
        console.log(amount)
    }}>ADD</button>
    <button className='border-2 p-4 rounded-xl'>decrease</button>
    <p className='text-black'>{amount}</p>
    </div>
  )
}
