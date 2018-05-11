import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CurrentOrder from '../components/CurrentOrder'
import {Container, Row, Col} from 'reactstrap'
import {connect} from 'react-redux'
import EventList from "../components/EventList";

class OrderDisplay extends Component {
    constructor(props){
        super(props)
        this.state={ order: {}}
    }

    constructOrder = (eventId) =>{
        const theOrder = {
            dishCustomerId: "DISH581641099720",
            clientOrderGuid: "5JANUARY",
            cft: "AMDOCS",
            attributes: {},
            lines: [
                {
                    id: "1",
                    type: "customer",
                    attributes: {
                        partyType: "PERSON",
                        firstName: "Jim",
                        middleName: "L",
                        lastName: "Unicorn",
                        salutation: "Mr",
                        phoneContacts: [
                            {
                                phonePosition: 1,
                                phoneNumber: "3035551212"
                            }
                        ],
                        relations: [
                            {
                                providerId: "AMDOCS-CUS",
                                extRefNum: "AMD9870769"
                            }
                        ]
                    }
                },
                {
                    id: "2",
                    type: "returnDbsEquipment",
                    attributes: {
                        requestType: "ADVANCE EXCH",
                        smartCardNumber: "S2300872005",
                        circuitAccountNumber: "R1947849176",
                        shipVia: "Standard",
                        failureCode: "Power Failure",
                        warrantyType: "DOA",
                        detailLineType: "IN BOUND",
                        type: "REPAIR",
                        payTerms: "NO CHARGE",
                        shipping: {
                            address: {
                                firstName: "Jim",
                                lastName: "Unicorn",
                                addressLine1: "1234 Main St",
                                addressLine2: "APT 2",
                                city: "Denver",
                                state: "CO",
                                zip: "80111",
                                zip4: "1111"
                            }
                        }
                    }
                },
                {
                    id: "3",
                    type: "returnDbsEquipment",
                    attributes: {
                        requestType: "ADVANCE EXCH",
                        smartCardNumber: "S2300872005",
                        circuitAccountNumber: "R1947849176",
                        shipVia: "Standard",
                        failureCode: "Power Failure",
                        warrantyType: "DOA",
                        detailLineType: "OUT BOUND",
                        type: "REPAIR",
                        payTerms: "NO CHARGE",
                        shipping: {
                            "address": {
                                firstName: "Jim",
                                lastName: "Unicorn",
                                addressLine1: "1234 Main St",
                                addressLine2: "APT 2",
                                city: "Denver",
                                state: "CO",
                                zip: "80111",
                                zip4: "1111"
                            }
                        }
                    }
                }
            ]
        }
        return theOrder
    }
    eventSelected = (eventId) =>{
        console.log(`OrderDisplay.eventSelected for id: ${eventId}`)
        const odr = this.constructOrder(eventId)
        this.setState({order: odr})
    }

    render() {
        console.log(`OrderDisplay - this.props.order: ${JSON.stringify(this.props.order)}`)
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
    order: PropTypes.object,
    events: PropTypes.array
};

const mapStateToProps = state =>({
    order: state.order,
    events: state.events
})

export default connect(
    mapStateToProps,
    null
)(OrderDisplay)
