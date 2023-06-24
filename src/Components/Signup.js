import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [Username, setUsername] = useState("")
    const [email, setemail] = useState("")
    const [Password, setPassword] = useState("")

    const SignupSubmit = (e) =>{
        e.preventDefault()
        const user = {Username,email,Password}
        console.log(user)
        navigate('/signin')
    }
  return (
    <div className='container w-50 mt-4'>
        <form>
            <input className='form-control mb-3' type="text" placeholder='@hoehoe' onChange={(e)=>{setUsername(e.target.value)}} value={Username}/>
            <input className='form-control mb-3' type="email" placeholder='hoe@hoe.com' onChange={(e)=>{setemail(e.target.value)}} value={email}/>
            <input className='form-control mb-3' type="password" placeholder='********' onChange={(e)=>{setPassword(e.target.value)}} value={Password}/>
            <button onClick={SignupSubmit} className='w-25 btn btn-primary'>SignUp</button>
        </form>
    </div>
  )
}

export default Signup