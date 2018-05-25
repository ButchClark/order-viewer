import React, {Component} from 'react'
import {getRecentClientOrderGuids, loadEvents} from "../actions";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ListGroup, ListGroupItem, InputGroup, InputGroupAddon, Button, Input} from 'reactstrap'

class OrderSearcher extends Component {
    componentWillMount() {
        // this.props.getRecentClientOrderGuids()
    }

    handleClick = (e) => {
        console.log('--> OrderSearcher.handleClick(e)')
        // this.props.loadEvents('798QN29WLs')
        if (!e.currentTarget.innerHTML) {
            console.log('loading default event set')
            this.props.loadEvents('hey')
        } else {
            console.log(`loading event set for: ${e.currentTarget.innerHTML}`)
            this.props.loadEvents(e.currentTarget.innerText)
        }
    }

    handleLoadEvents = (e) => {
        console.log(`> OrderSearcher.handlLoadEvents- e:`)
        console.dir(e)
    }

    render() {
        const guidList = this.props.guids.map(
            (guid, index) => <ListGroupItem key={index} tag="button" action
                                            onClick={e => this.handleClick(e)}>{guid}</ListGroupItem>
        )
        const defaultButton = (!this.props.guids || this.props.guids.length === 0)
            ? <Button onClick={(e)=>this.handleClick(e)}>Load Sample Event set</Button>
            : <p/>

        return (
            <div>
                <InputGroup onSubmit={(e)=>this.handleClick(e)} className="bg-info">
                    <InputGroupAddon addonType="append"><Button type="submit">Load Events for clientOrderGuid:</Button></InputGroupAddon>
                    <Input placeholder="clientOrderGuid"/>
                </InputGroup>


                <h4>Click to load events for a sample order</h4>
                {defaultButton}
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