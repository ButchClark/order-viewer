import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row} from 'reactstrap'
import OrderHeader from "./OrderHeader";
import OrderAttributes from "./OrderAttributes";
import OrderLineList from "./OrderLineList";

const CurrentOrder = props => {

    console.log(`>CurrentOrder props.currentOrder`)
    console.dir(props.currentOrder)
    // console.log(`CurrentOrder - props.currentOrder.lines: ${JSON.stringify(props.currentOrder.lines)}`)
    // console.log(`>CurrentOrder - sending line.count(): ${props.currentOrder.lines.count()}`)
    return (
        <Container className="border rounded border-warning">
            <Row className="bg-dark text-light">
                <h3>Order: {props.currentOrder.clientOrderGuid}</h3>
            </Row>
            <Row className="bg-secondary text-light">
                <h4>Order Header</h4>
            </Row>
            <Row>
                <OrderHeader
                    dishCustomerId={props.currentOrder.dishCustomerId}
                    clientOrderGuid={props.currentOrder.clientOrderGuid}
                    timestamp={props.currentOrder.timestamp}
                    cft={props.currentOrder.cft}
                />
            </Row>
            <Row className="bg-secondary text-light">
                <h4>Order Attributes</h4>
            </Row>
            <Row>
                <OrderAttributes attributes={props.currentOrder.attributes}/>
            </Row>
            <Row className="bg-secondary text-light">
                <h4>Order Lines</h4>
            </Row>
            <Row>
                <OrderLineList lines={props.currentOrder.lines}/>
            </Row>
        </Container>
    );
};

CurrentOrder.propTypes = {
    currentOrder: PropTypes.object
};

export default CurrentOrder;
