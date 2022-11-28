import React from 'react'
// import VeiwAll from './VeiwAll'
import Allprops from '../Allprops'
export default function Cart() {
  return (
    <div className='ma'>
        <h2>You may like</h2>
<div className='ma'>
{Allprops.map((items) => (
    <Allprops key={items.description}
    Allprops ={items}/>
))}
</div>

    </div>
  )
}
