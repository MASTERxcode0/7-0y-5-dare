import React from 'react'
import {useState} from 'react'
import useCounterState from  '../store/useCounterStore'
function Todolist() {   
    const {counter,add , remove,edite , clear}= useCounterState()
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    
    function addProduct(e){
      e.preventDefault()
  
      let data = {
        name , 
        id: Date.now(),
        price 
      }
      add(data)
    }
  
    function hendalEdit(id){
      let data = {
        name: prompt('new name'),
        id,
        price: +prompt('new price')
      }
      edite(data)
    }
  
    return (
      <div className='container mx-auto mt-10 mb-10 '>
       <form className='flex flex-col items-center  justify-center mt-10 mb-10 gap-5  sheadow-lg p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <input  className='border border-black p-2 raunded-md' onChange={(e)=>setName(e.target.value)} type="text" placeholder='Ismingizni kiriting' />
        <input className='border border-black p-2 raunded-md' onChange={(e)=>setPrice(e.target.value)} type="text" placeholder='Narhni kiriting' />
        <button className='border border-black p-2 raunded-md' onClick={addProduct}>ADD</button>
        <button className='border border-black p-2 raunded-md' onClick={clear}>Cleare</button>
       </form>
  
       <div className='flex flex-col items-center justify-center gap-5 mt-10 mb-10 '>
          {
            counter.map((item,index)=>(
              <div key={index} className='flex flex-col items-center justify-center gap-5 border border-black p-5'>
                <h1 className='text-2xl font-bold'>{item.name}</h1>
                <p>{item.price}</p>
                <button className='border border-black p-2 raunded-md' onClick={()=>remove(item.id)}>DELETE</button>
                <button className='border-2' onClick={()=>{hendalEdit(item.id)}}>EDIT</button>
              </div>
            ))  }
       </div>
      </div>
    )
  }

export default Todolist