import React from 'react'

const ImageLinkForm = () => {
    return (
        <div className='flex flex-col'>
            <p className='text-2xl'>{'Will detect facesin your pictures. Give it a try'}</p>
            <div className='p-4 ml-96 mr-96 rounded-md shadow-2xl bg-green-300 mt-4'>
                <input className='text-3xl w-60 center  ' type='text' />
                <button className='pt-3 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 w-32 cursor-pointer'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm
