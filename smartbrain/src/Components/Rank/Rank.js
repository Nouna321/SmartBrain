import React from 'react'

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='text-white text-2xl'>{`${name}, your current rank is...`}</div>
            <div className='text-white text-4xl'>{entries}</div>
        </div>
    )
}

export default Rank
