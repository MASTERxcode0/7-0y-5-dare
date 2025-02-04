import React from 'react'
import useDarcState from '../store/Darc'

function LiteDarc() {
    const { darc, setDarc } = useDarcState()
    
    function hendalDarc() { 
        setDarc() 
    }

    return (
        <div style={{ backgroundColor: darc ? 'black' : 'white' }} className='w-100 p-5 text-center mt-5 mx-auto'>
            <h1 style={{ color: darc ? 'white' : 'black' }} >Salom</h1>
            <button className='border p-2' onClick={hendalDarc}>Dark</button>
        </div>
    )
}

export default LiteDarc
