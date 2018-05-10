import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import OrderSearcher from './containers/OrderSearcher'
import {connect} from 'react-redux'

class App extends Component {


    render() {
        const searcher = this.props.showSearch === true
            ? <div>
                <h1>clientOrderGuid Searcher</h1>
                <OrderSearcher/>
            </div>
            : 'showSearch is not set'

        return (
            <div className="App">
                {searcher}
                <h1>Users</h1>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    showSearch: state.display.showSearch
})

export default connect(
    mapStateToProps,
    null
)(App)
