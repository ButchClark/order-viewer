import React from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col} from 'reactstrap'
import OrderAttributes from "./OrderAttributes";

const OrderLine = props => {
    return (
        <Container className="border border-primary rounded-top">
            <Row> <Col className="text-left" xs="4">Id:</Col><Col className="text-left" xs="auto">{props.line.id}</Col> </Row>
            <Row> <Col className="text-left" xs="4">Type:</Col><Col className="text-left" xs="auto">{props.line.type}</Col> </Row>
            <Row><Col>Order Line Attributes</Col></Row>
            <Row>
                <OrderAttributes attributes={props.line.attributes}/>
            </Row>
        </Container>
    );
};

OrderLine.propTypes = {
    line: PropTypes.object
};

export default OrderLine;
