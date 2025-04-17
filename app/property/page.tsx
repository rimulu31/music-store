import React from 'react'
import B from '../components/B'
import C from '../components/C'

const Property = () => {
    const person = {
        name: 'John',
        age: 30,
    }
    return (
      <div>
          <h1>Property</h1>
          <div>This is <A foo="foo" fooNumber={20} bar="bar" person={person}/></div>
          <div>This is <B /></div>
      </div>
    )
}

export default Property

function A({ foo, fooNumber, bar, person }: { foo: string; fooNumber: number; bar: string;   person: { name: string; age: number }
}) {
    return (
        <>
            A Component {foo} {fooNumber}
            <div><C bar={bar} person={person} /></div>
        </>
    )
}