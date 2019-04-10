import React from "react";
import './Form.css';
const form = props => (
	<div className='shadow-5 Form pl-4 pt-3 pb-3 mx-5 mt-2'>
		<form onSubmit={props.weather}>
			<input type="text" name="city" placeholder="City..."/>
			<input type="text" name="country" placeholder="Country..."/>
			<button className="">Get Weather</button>
		</form>
	</div>

);

export default form;