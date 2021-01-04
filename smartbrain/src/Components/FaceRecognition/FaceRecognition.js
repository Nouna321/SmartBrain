import React from 'react'
import './FaceRocognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='flex justify-center'>
            <div className='absolute mt-2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                <div className='bounding-box' style={{ top: box.topRow, right: box.rightRow, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition
