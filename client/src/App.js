import React, {Component} from 'react';
import './App.css';
import OrderSearcher from './containers/OrderSearcher'
import {connect} from 'react-redux'
import OrderDisplay from "./containers/OrderDisplay";
import {bindActionCreators} from 'redux'
import {toggleShowSearch} from "./actions";
import {Button} from 'reactstrap'

class App extends Component {

    handleClick = (e) =>{
        this.props.toggleShowSearch()
    }

    render() {
        const searcher = this.props.showSearch === true
            ? <div>
                <OrderSearcher/>
            </div>
            : <Button onClick={this.handleClick} color="warning">Show Search</Button>

        return (
            <div className="App">
                {searcher}
                { this.props.showOrderDisplay && <OrderDisplay/>}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    showSearch: state.display.showSearch,
    showOrderDisplay: state.display.showOrderDisplay
})
const mapDispatchToProps = dispatch => bindActionCreators({
    toggleShowSearch
},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
