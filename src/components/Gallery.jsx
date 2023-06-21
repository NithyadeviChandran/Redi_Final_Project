import React from 'react'

function Gallery() {

  
  return (
    <div className="min-h-screen" >
        
        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
     <div>
        <button className='btn btn-primary'>Upload Photos</button>
      </div>
    </div>
  )
}

export default Gallery