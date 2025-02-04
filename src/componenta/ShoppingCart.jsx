import React from 'react'
import { useState } from 'react'
import useShoppingCardState from '../store/shoppingCard'

function ShoppingCart() {
  const [items, setItems] = useState('')
  const { shoppingCard, add, remove, edite, clear } = useShoppingCardState()

  const hendalAdd = (e) => {
    e.preventDefault()
    let data = {
      items,
      id: Date.now(),
  }
   add(data)

}

  return (
    <div className='container mx-auto mt-10 mb-10 '>
        <form className='flex flex-col items-center  justify-center mt-10 mb-10 gap-5  sheadow-lg p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
          <h1>Shopping Carzinka</h1>
          <input onChange={(e)=>{setItems(e.target.value)}} type="text" className='border-2' />
          <button onClick={hendalAdd} >ADD</button>
        </form>
        <div className='flex flex-col items-center justify-center gap-5 mt-10 mb-10 '>
          {
            shoppingCard.map((item, index) => (
              <div key={index} className='flex flex-col items-center justify-center gap-5 border border-black p-5'>
                <h1>{item.items}</h1>
                <button onClick={() => remove(item.id)} className='border-2'>DELETE</button>
                <button className='border-2'>edit </button>
              </div>
            ))
          }
        <button className='border-2' onClick={clear()}>cleare</button>

        </div>
    </div>
  )
}

export default ShoppingCart