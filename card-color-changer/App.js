import React, { useState } from 'react';
import Hello from './sayhello';
import './App.css';

function App() {
	const [Users] = useState([
		{ name: 'brian', message: 'skkkkrt' },
		{ name: 'stevo', message: 'yoooooo' },
	]);

	return (
		<div className="app">
			<div className="flex">
				{Users.map((user) => {
					return <Hello name={user.name} message={user.message} />;
				})}
			</div>
		</div>
	);
}

export default App;
