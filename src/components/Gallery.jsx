import React, { useState } from 'react'
import axios from 'axios'

function Gallery() {
  const [image, setImage] = useState()

  const changeHandler=(e) =>{
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  const clickHandler=()=>{
    const formData = new FormData();
    formData.append('image', image)
    axios.post('https://nithya-render.onrender.com/gallery',formData).then((result)=>console.log(result)).catch((i)=> console.log(i))
  }
  
  return (
    <div className="min-h-screen" >
        
        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" onChange={changeHandler}/>
     <div>
        <button className='btn btn-primary' onClick={clickHandler}>Upload Photos</button>
      </div>
    </div>
  )
}

export default Gallery