import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col p-5 justify-center h-dvh'>
        <div className='p-5 border-2 border-zinc-200 flex flex-col gap-5 rounded-2xl'>
            
            <div className='flex flex-col justify-center py-1/2 w-full my-10'>
                <form action="" 
                    className=''
                >
                    <h1 className='text-4xl mb-5 font-medium'>Login</h1>

                    <input 
                        className="block text-lg px-4 py-2 border-2 border-zinc-400 mb-3 rounded-md w-full focus:ring-0"
                        type="email"
                        required
                        placeholder='email' 
                    />

                    <input 
                        className='block text-lg px-4 py-2 border-2 border-zinc-400 mb-3 rounded-md w-full focus:ring-0'
                        type="password"
                        required
                        placeholder='password' 
                    />

                    <input 
                        className='bg-blue-500 text-lg font-semibold px-4 py-2 rounded-md w-full text-white'
                        type="submit" 
                        value={"Login"} 
                    />
                </form>
            </div>     
        </div>
    </div>
  )
}

export default Login