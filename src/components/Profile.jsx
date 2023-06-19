import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../data.json'

function Profile({user}) {
const navigate = useNavigate()
console.log(data.users)
   useEffect(()=>{
    if(!user){
        navigate('/')
    }
   },[]) 
  return (
    <div>
    <h1>Welcome{data.users.name}</h1>
    </div>
  )
}

export default Profile