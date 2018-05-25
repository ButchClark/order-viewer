import React, {Component} from 'react'
import {getRecentClientOrderGuids, loadEvents} from "../actions";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ListGroup, ListGroupItem, Form, FormGroup, Button, Input} from 'reactstrap'

class OrderSearcher extends Component {
    componentWillMount() {
        // this.props.getRecentClientOrderGuids()
    }


    render() {
        const handleClick = (e) => {
            e.preventDefault()
            console.log('--> OrderSearcher.handleClick(e)')
            console.dir(e)
            if (e.target.inpoot) console.log(` .. e.target.inpoot.value: ${e.target.inpoot.value}`)
            else console.log(` .. e.target.inpoot is NULL/undefined`)

            if (!e.target.inpoot || !e.target.inpoot.value){
                console.log('loading default event set')
                this.props.loadEvents('Rl7FO3FxXj')
            } else {
                console.log(`loading event set for: ${e.target.inpoot.value}`)
                this.props.loadEvents(e.target.inpoot.value)
            }
        }
        const guidList = this.props.guids.map(
            (guid, index) => <ListGroupItem key={index} tag="button" action
                                            onClick={e => handleClick(e)}>{guid}</ListGroupItem>
        )
        const defaultButton = (!this.props.guids || this.props.guids.length === 0)
            ? <Button onClick={(e) => handleClick(e)}>Load Sample Event set</Button>
            : <p/>

        return (
            <div>
                <Form onSubmit={(e) => { handleClick(e) }} className="bg-info">
                    <Input id="inpoot" placeholder="clientOrderGuid"/>
                    <Button type="submit">Load Events for clientOrderGuid:</Button>
                </Form>
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