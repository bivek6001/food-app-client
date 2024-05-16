import React from 'react'
import { data } from './data'
export default function Foods() {
  return (
    <div className='food-banner'>


        <div className="data max-w-[1100px] mx-auto font-bold text-2xl">
            <h1>Restaurants with online food delivery in your City</h1>

            <div className="foods flex justify-start flex-wrap">

          
{data.map((d)=>{
    return (
        <div className="card w-[400px] h-[300px] border-3 rounded-lg">
                <img src={d.url} alt="" className=' transition ease-in-out w-[200px] h-[132px] object-cover rounded hover:scale-90 ' />
                <p className='text-sm'>Axomiya Randhoni Xaal
4.4 • 50-60 mins
Bengali, Thalis, Assamese, Naga, Salads, Home Food, North Eastern, Healthy Food
Azara</p>
 
        </div>    
       
    )
})}
  </div>
        </div>






    </div>
  )
}
