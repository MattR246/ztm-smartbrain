import React from 'react';
import Boxes from './Boxes'
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
	return (
	<div className='center ma'>
		<div className='absolute mt2'> 
		<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
		<Boxes boxes={boxes} />
		</div>
	</div>
	);
}

export default FaceRecognition;