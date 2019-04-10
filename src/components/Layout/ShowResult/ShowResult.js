import React from "react";
import './ShowResult.css';
const Weather = props => {

	const temp = parseInt(props.nextState.temperature)-273;
	return(
		<div className='FormResult mx-5 mt-2'>
			<h2 className='ml-5'>Result</h2>

			{  props.nextState.temperature
			?
			<div>
			<p className='ml-3'>Temperature : {temp} °C</p>	
			<p className='ml-3'>Humidity    : {props.nextState.humidity}</p>	
			<p className='ml-3'>Description : {props.nextState.description}</p>
			</div>
			: null
			}

			
		</div>
	);
};

export default Weather;