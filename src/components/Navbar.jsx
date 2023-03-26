import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
    <span className='logo'>Open Chat Room</span>
      <div className='user'>
      <img src="https://imgs.search.brave.com/z6CVILcAFwbx_jZfpaTlYrzExkd0bHJHtm1Tw1PS_4o/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL2Vu/dHJpZXMvaWNvbnMv/ZmFjZWJvb2svMDAw/LzAxMi81NDkvR2ls/Z2FtZXNoLmZ1bGwu/MTQxNzAyOS5qcGc" alt="" />
      <span>Oussama</span>
      <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
