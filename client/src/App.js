import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderSearcher from './containers/OrderSearcher'

class App extends Component {
  state = {users: []}

  componentDidMount(){
	console.log('App.componentDidMount() -- going to load users from API server')
	console.log(` .. this.state: ${this.state.users}`)
	console.dir(this.state)

	fetch('/users')
		.then( res => res.json())
		.then( users => this.setState({ users }))
 }

  render() {
    return (
      <div className="App">
          <h1>clientOrderGuid Searcher</h1>
            <OrderSearcher/>
	<h1>Users</h1>
	<ul>
		{this.state.users.map( u => <li key={u.id}>{u.username}</li> )}
 	</ul>
      </div>
    );
  }
}

export default App;
