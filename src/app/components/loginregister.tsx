import React from 'react'

export default function loginregiter() {
  return (
    <div className='justify-between items-center'>
      <div >
        
        <h1 className="text-2xl ">Log in</h1>
        <h4>Username or E-mail address</h4>
        <input
          type="text"
          placeholder="E-mail"
          className="p-3 border-solid rounded-md bg-slate-100 px-4"
        />
      </div>
      <div className="mt-3">
        <h1>Password</h1>

        <input
          type="text"
          placeholder="password"
          className="p-3 border-solid rounded-md bg-slate-100"
        />
      </div>
      <div className="flex flex-row space-x-5">
        <input type="checkbox" />
        <h1>Remember</h1>
      </div>
      <div className="flex flex-row ">
        <input
          type="text"
          placeholder="Login"
          className="text-center hover:bg-yellow-200 text-black rounded-md border border-solid"
        />
        <h3 className="text-sm text-blue-500 space-y-6"> Forgot password</h3>
      </div>

      <div className='justify-around items-center'>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Register</h1>
          <h3>Email Address</h3>
          <input type="text" className="px-4 py-2 border-solid bg-slate-100" />
          <p className='text-sm'>A link to set a new password will be sent to
             your email address.</p>
          <p className='text-sm text-justify'>Your personal data will be used to support 
            your experience throughout this website, to manage access 
            to your account, and for other purposes described in our privacy policy.</p>
        </div>
        <button className='p-3 bg-slate-100 px-8 text-xl text-center rounded-md hover:bg-yellow-400 '>Register</button>
      </div>
    </div>
  )
}
