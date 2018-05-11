import React, {Component} from 'react'
import {getRecentClientOrderGuids, loadEvents} from "../actions";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ListGroup, ListGroupItem, InputGroup, InputGroupAddon, Button, Input} from 'reactstrap'

class OrderSearcher extends Component{
    componentWillMount() {
        // this.props.getRecentClientOrderGuids()
    }

    handleClick = (e) => {
        this.props.loadEvents('798QN29WLs')
        //this.props.loadEvents(e.currentTarget.innerText)
    }

    handleLoadEvents=(e)=>{
        console.log(`> OrderSearcher.handlLoadEvents- e:`)
        console.dir(e)
    }

    render(){
        const guidList = this.props.guids.map(
            (guid,index) =><ListGroupItem key={index} tag="button" action onClick={e => this.handleClick(e)}>{guid}</ListGroupItem>
        )

        return(
            <div>
                <InputGroup onSubmit={this.handleLoadEvents} className="bg-info">
                    <InputGroupAddon addonType="append"><Button type="submit">Load Events</Button></InputGroupAddon>
                    <Input />
                </InputGroup>


                <h4>Click to load an order</h4>
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