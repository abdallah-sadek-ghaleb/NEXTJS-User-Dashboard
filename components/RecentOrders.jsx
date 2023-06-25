import { data } from '@/date/data';
import React from 'react'
import { FiShoppingBag } from "react-icons/fi";

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 h-[50vh] m-auto relative lg:h-[70vh] rounded-lg p-4 bg-white overflow-y-auto border '>
      <h1 className='font-bold'>RecentOrders</h1>
      <ul>
        {data.map( (order, id)=>(
          <li key ={id} className='bg-gray-50 hover:bg-gray-100 my-3 cursor-pointer flex items-center p-2 rounded-lg'>
            <div className='bg-purple-100 rounded-lg p-3'>
            <FiShoppingBag className='text-purple-800'/>
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>{order.total}</p>
              <p className='text-gray-400 text-sm'>{order.name.first}</p>
            </div>
            <p className=' absolute lg:flex md:hidden text-sm right-6'>{order.date}</p>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default RecentOrders