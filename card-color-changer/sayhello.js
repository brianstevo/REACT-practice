import React, { useState } from 'react';
import './App.css';

function Hello({ name, message }) {
	const [isRed, setRed] = useState(false);

	const sayhello = () => {
		setRed(!isRed);
		console.log('im fine');
	};
	return (
		<div className="tweet">
			<h2 className={isRed ? 'red' : ''}> {name} </h2>
			<h3 className={isRed ? 'red' : ''}>{message}</h3>
			<button onClick={sayhello}> how are you?</button>
		</div>
	);
}
export default Hello;
