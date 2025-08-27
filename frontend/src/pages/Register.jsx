import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col justify-center bg-zinc-900 text-white '>
        <h1>Register</h1>
        <div className='flex flex-col p-7 w-full h-screen '>
            <form action="" 
                className='flex items-center flex-col'
            >
                <input 
                    className='block text-md px-3 py-2 border-2 border-zinc-600 mb-3 rounded-md w-full focus:ring-0'
                    type="text"
                    placeholder='name' 
                />
                <input 
                    className="block text-md px-3 py-2 border-2 border-zinc-600 mb-3 rounded-md w-full focus:ring-0"
                    type="email"
                    placeholder='email' 
                />
                <input 
                    className='block text-md px-3 py-2 border-2 border-zinc-600 mb-3 rounded-md w-full focus:ring-0'
                    type="password"
                    placeholder='password' 
                />
                <input 
                    className='bg-blue-500 px-3 py-2 rounded-md w-full'
                    type="submit" 
                    value={"Create Admin"} 
                />
            </form>
        </div>
    </div>
  )
}

export default Register