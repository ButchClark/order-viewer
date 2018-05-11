import React, {Component} from 'react'
import {getRecentClientOrderGuids, loadEvents} from "../actions";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ListGroup, ListGroupItem} from 'reactstrap'

class OrderSearcher extends Component{
    componentWillMount() {
        console.log('>OrderSearcher.componentWillMount() - calling getRecentClientOrderGuids()')
        this.props.getRecentClientOrderGuids()
    }

    handleClick = (e) => {
        console.log(`*** ListGroupItem clicked: ${e.currentTarget.innerText}`)
        this.props.loadEvents(e.currentTarget.innerText)
    }

    render(){
        console.log('>OrderSearcher.render() - this.props.guids:')
        console.log(` .. this.props.guids: ${JSON.stringify(this.props.guids)}`)

        const guidList = this.props.guids.map(
            (guid,index) =><ListGroupItem key={index} tag="button" action onClick={e => this.handleClick(e)}>{guid}</ListGroupItem>
        )

        return(
            <div>
                <h4>Search for clientOrderGuid</h4>
                <ListGroup className="guidList">
                    {guidList}
                </ListGroup>
            </div>
    )
    }
}

const mapStateToProps = state => ({
    guids: state.display.recentGuids
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getRecentClientOrderGuids,
    loadEvents
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderSearcher)