import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			newItem: '',
			count: 0,
		};
	}
	addItem(newValue) {
		if (newValue !== '') {
			const count = this.state.count + 1;
			const newItem = {
				id: count,
				value: newValue,
			};
			const currentList = [...this.state.list];
			currentList.push(newItem);

			this.setState({
				list: currentList,
				newItem: '',
				count: count,
			});
		}
	}

	deleteItem(id) {
		const currentList = [...this.state.list];
		const newList = currentList.filter((item) => item.id !== id);
		this.setState({
			list: newList,
		});
	}

	updateItem(input) {
		this.setState({ newItem: input });
	}
	render() {
		return (
			<div className="app-body">
				<h1>Todo App</h1>
				<div className="app-header">
					<input
						type="text"
						placeholder="Enter data"
						required
						value={this.state.newItem}
						onChange={(e) => this.updateItem(e.target.value)}
					></input>
					<button
						className="btn"
						onClick={() => this.addItem(this.state.newItem)}
						disabled={!this.state.newItem.length}
					>
						submit
					</button>
				</div>
				<div className="app-content">
					<ul>
						{this.state.list.map((item) => (
							<li className="content">
								<p>{item.value}</p>
								<button
									className="btn"
									onClick={() => this.deleteItem(item.id)}
								>
									delete
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
