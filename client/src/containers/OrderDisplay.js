import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CurrentOrder from '../components/CurrentOrder'
import {Container, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'
import EventList from "../components/EventList";
import OrderBuilder from '../helpers/OrderBuilder'

class OrderDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {order: {}, selectedEventId: 0} // set default
    }


    componentWillReceiveProps(nextProps) {
        console.log("@@@@@@componentWillReciveProps ---")
        console.dir(nextProps)

        if (!nextProps) {
            console.log("!!! OrderDisplay.componentWillReceiveProps() got nextProps===undefined/null")
            return
        }
        const oaeIdEvents = nextProps.events
            .filter(ev => ev.domoEvent.type === "order-accepted-event")
            .map(oaEvent => {
                return oaEvent.domoEvent.eventId
            })
        const oaeId = oaeIdEvents[0]
        const firstOrder = OrderBuilder(nextProps.events, oaeId)

        this.setState({order: firstOrder})
    }

    eventSelected = (eventId) => {
        console.log(`OrderDisplay.eventSelected for id: ${eventId}`)
        const odr = OrderBuilder(this.props.events, eventId)
        this.setState({order: odr, selectedEventId: eventId})
    }

    render() {
        console.log(`OrderDisplay - this.state.order: ${JSON.stringify(this.state.order)}`)
        return (
            <Container>
                <Row>
                    <Col>
                        <CurrentOrder currentOrder={this.state.order}/>
                    </Col>
                    <Col>
                        <EventList events={this.props.events} selectedEventId={this.state.selectedEventId} eventSelectedHandler={this.eventSelected}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

OrderDisplay.propTypes = {
    events: PropTypes.array
};

const mapStateToProps = state => ({
    events: state.events
})

export default connect(
    mapStateToProps,
    null
)(OrderDisplay)
