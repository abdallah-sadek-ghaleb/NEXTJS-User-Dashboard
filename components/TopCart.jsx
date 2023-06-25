import React from 'react'

const TopCart = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full rounded-lg border p-4'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$7,846</p>
                <p className='text-gray-600'>Daily Revenue</p>
            </div>
            <p className='bg-green-200 flex  justify-center items-center p-2 rounded-lg '>
            <span className='text-green-700 text-lg '>+18%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full rounded-lg border p-4'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$1,437,897</p>
                <p className='text-gray-600'>YTD Revenue</p>
            </div>
            <p className='bg-green-200 flex  justify-center items-center p-2 rounded-lg '>
            <span className='text-green-700 text-lg '>+12%</span>
            </p>
        </div>
        <div className=' bg-white flex justify-between w-full rounded-lg border p-4 '>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$12,346</p>
                <p className='text-gray-600'>Customers</p>
            </div>
            <p className='bg-green-200 flex  justify-center items-center p-2 rounded-lg '>
            <span className='text-green-700 text-lg '>+17%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCart