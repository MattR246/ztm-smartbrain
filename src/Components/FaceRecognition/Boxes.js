import React from 'react';
import './FaceRecognition.css';

const Boxes = ({ boxes }) => {
    return (
        <div>
            {
                boxes.map((box, index) => {
                    return (
                        <div 
                            key={index}
                            className='bounding-box'
                            style={
                                {
                                    top:box.topRow,
                                    right:box.rightCol,
                                    bottom:box.bottomRow,
                                    left:box.leftCol
                                }
                            }>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Boxes;