import React, { useState } from 'react'
import axios from 'axios';
const Create = () => {
    const [task, setTask]=useState();
    const handleAdd = () =>{
        /* eslint-disable no-restricted-globals */
        axios.post('http://localhost:3001/add',{task:task})
        .then(result => {location.reload()})
        .catch(err => console.log(err))
        /* eslint-enable no-restricted-globals */
    }
  return (
    <div className='create_form'>
      <input type='text' name='' placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
