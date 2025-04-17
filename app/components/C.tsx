import React from 'react'

const C = ({ bar, person }: { bar: string; person: { name: string; age: number } }) => {
    return (
      <>
        C Component : {bar}
        <div>Name: {person.name}</div>
        <div>Age: {person.age}</div>
      </>
    )
  }

export default C