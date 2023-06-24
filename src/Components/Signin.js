import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    const SigninHandler = (e)=>{
        e.preventDefault();
        navigate('/signin/profile')
    }
    const UserHandler = (e)=>{
        e.preventDefault();
        navigate('/signin/user')
    }
  return (
    <>
        <form>
            <input className='form-control mb-3' type="text" placeholder='@hoehoe'  />
            <input className='form-control mb-3' type="password" placeholder='*****' />
            <button onClick={SigninHandler} className='w-25 btn btn-primary' >Signin</button>
            <button onClick={UserHandler} className='w-25 btn btn-primary' >Go to user</button>
        </form>
        <hr />
        <Outlet/>
    </>

  )
}

export default Signin