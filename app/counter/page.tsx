import React from 'react'
import Button from './Button'
import Person from './Person'

const Counter = () => {
  return (
    <div>
        <h1 className=' text-2xl font-bold my-5'>Counter</h1>
        <div className='flex flex-col items-center my-5'>
            <Button />
        </div>
        <Person />
    </div>
  )
}

export default Counter