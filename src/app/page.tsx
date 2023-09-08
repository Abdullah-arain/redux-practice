import React from 'react'
import CounterView from '@/Counter'
export default function page() {
  return (
    <div className='bg-black opacity-80 h-screen w-screen grid place-items-center'>
      <div className='text-2xl font-semibold text-white'>Counter App</div>
      <CounterView/>
    </div>
  )
}
