import React from 'react'

const Navigation = ({ onRouteChange, isSignin }) => {
    if (isSignin) {
        return (
            <nav className='flex justify-end'>
                <p onClick={() => onRouteChange('signout')} className='text-2xl underline p-6 cursor-pointer text-black'>
                    Sign out
                </p>
            </nav>
        )
    } else {
        return (
            <nav className='flex justify-end'>
                <p onClick={() => onRouteChange('signin')} className='text-2xl underline p-6 cursor-pointer text-black'>
                    Sign in
                </p>
                <p onClick={() => onRouteChange('register')} className='text-2xl underline p-6 cursor-pointer text-black'>
                    Resister
                </p>
            </nav>
        )
    }
}

export default Navigation
