import React from 'react';
import ReactDOM from 'react-dom';
import HamburgerMenu from '../src/HamburgerMenu';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			open: [false, true, false, true]
		};
  }
	handleClick(id) {
		let { open } = this.state;
    this.setState({
			open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
		});
	}
	render() {
		return (
			<div className='menu-row'>
				<HamburgerMenu
					isOpen={this.state.open[3]}
					menuClicked={this.handleClick.bind(this, 3)}
					width={18}
					height={15}
					strokeWidth={1}
					rotate={0}
					color='black'
					borderRadius={0}
					animationDuration={0.5}
				/>
			  <HamburgerMenu
		      isOpen={this.state.open[0]}
		      menuClicked={this.handleClick.bind(this, 0)}
		      width={36}
					height={30}
					strokeWidth={2}
					rotate={0}
		      color='black'
					borderRadius={5}
		      animationDuration={0.3}
		    />
				<HamburgerMenu
					isOpen={this.state.open[1]}
					menuClicked={this.handleClick.bind(this, 1)}
					width={54}
					height={45}
					strokeWidth={3}
					rotate={0}
					color='black'
					borderRadius={5}
					animationDuration={0.4}
				/>
				<HamburgerMenu
					isOpen={this.state.open[2]}
					menuClicked={this.handleClick.bind(this, 2)}
					width={72}
					height={60}
					strokeWidth={3}
					rotate={0}
					color='black'
					borderRadius={5}
					animationDuration={0.75}
				/>
			</div>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('root'));
