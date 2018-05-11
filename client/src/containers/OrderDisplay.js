import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CurrentOrder from '../components/CurrentOrder'
import {Container, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'
import EventList from "../components/EventList";
import OrderBuilder from '../helpers/OrderBuilder'

class OrderDisplay extends Component {
    constructor(props){
        super(props)
        this.state={ order: {}}
    }


    eventSelected = (eventId) =>{
        console.log(`OrderDisplay.eventSelected for id: ${eventId}`)
        const odr = OrderBuilder(this.props.events, eventId)
        this.setState({order: odr})
    }

    render() {
        console.log(`OrderDisplay - this.state.order: ${JSON.stringify(this.state.order)}`)
        return (
            <Container>
                <Row>
                    <Col>
                        <CurrentOrder currentOrder={this.state.order} />
                    </Col>
                    <Col>
                        <EventList events={this.props.events} eventSelectedHandler={this.eventSelected}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

OrderDisplay.propTypes = {
    events: PropTypes.array
};

const mapStateToProps = state =>({
    events: state.events
})

export default connect(
    mapStateToProps,
    null
)(OrderDisplay)
