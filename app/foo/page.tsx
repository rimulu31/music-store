import React from 'react'
import Link from 'next/link'

const Foo = () => {
  return (
    <>
    <div className='bg-red-300 text-center h-[100vh] flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-3xl font-bold'>Foo Page</h1>
        <Link
          href="/foo/bar"
          className="border border-amber-300 w-fit mb-4 p-3 rounded bg-violet-300 text-gray-900"
        >
          Go to Foo Bar
        </Link>
    </div>
    </>
  )
}

export default Foo