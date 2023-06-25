import Barchart from '@/components/Barchart'
import Header from '@/components/Header'
import RecentOrders from '@/components/RecentOrders'
import TopCart from '@/components/TopCart'
import Image from 'next/image'


export default function Home() {
  return (
    <main className=" bg-gray-100 min-h-screen">
      <Header/>
      <TopCart />
      <div className='p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Barchart/>
        <RecentOrders/>
      </div>

    </main>
  )
}
