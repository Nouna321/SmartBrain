import React from 'react'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='flex flex-col'>
            <p className='text-2xl'>{'Will detect facesin your pictures. Give it a try'}</p>
            <div className='flex flex-row rounded-md shadow-2xl bg-green-300 mt-4 space-x-0 justify-center p-6 ml-80 mr-80'>
                <input className='text-3xl' type='text' onChange={onInputChange} />
                <button className='text-white transition duration-500 ease-in-out bg-blue-600 hover:bg-green-300 cursor-pointer w-24' onClick={onButtonSubmit}>
                    Detect
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm
