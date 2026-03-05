import React, { useContext, useState } from 'react'
import useAxios from '../utils/useAxios'
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../context/AuthContext'


const Dashboard = () => {

  const[res, setRes] = useState("")
  const api = useAxios()
  const token = localStorage.getItem("authTokens")

  if (token) {
    const decode = jwtDecode(token)

    var user_id = decode.user_id
    var username = decode.username
    var full_name = decode.full_name
    var image = decode.image
    var email = decode.email
  }

  return (
    <div>
      <div className='grid p-20 grid-cols-3'>
        <div> This is my {username}</div>
        <div> This is my {email}</div>
       
      </div>
    </div>
  )
}

export default Dashboard
