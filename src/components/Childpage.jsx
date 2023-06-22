import React from 'react'
import {useEffect} from 'react'

function Childpage({child,child1,setChild1}) {


    


  return (
 <div>
    
    <h4>{child1.name}</h4>
    <img src={child1.photo} alt="Shoes" className="rounded-xl" />
 </div>
 
  )
}

export default Childpage