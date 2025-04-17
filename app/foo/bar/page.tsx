import React from 'react'
import Link from 'next/link'

const Bar = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-cyan-400 to-blue-500 text-center h-[100vh] flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-3xl font-bold'>Bar Page</h1>
        <Link
          href="/"
          className="border border-amber-300 w-fit mb-4 p-3 rounded bg-slate-300 text-gray-900"
        >
          Back to Home
        </Link>
    </div>
    </>
  )
}

export default Bar