import React from 'react'
import Tilt from 'react-tilt'
import { BiBrain } from 'react-icons/bi'

const Logo = () => {
    return (
        <div className='m-8 mt-0'>
            <Tilt className='Tilt rounded-md shadow-lg bg-gradient-to-r from-green-400 to-blue-500' options={{ max: 55 }} style={{ height: 150, width: 150 }}>
                <div className='Tilt-inner'>
                    <BiBrain size={120} className='ml-4 pt-4' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
