import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap'

const OrderHeader = props => {
    return (
        <Container className="border border-primary">
            <Row> <Col className="text-left" xs="4">dishCustomerId:</Col><Col xs="auto">{props.dishCustomerId}</Col> </Row>
            <Row> <Col className="text-left" xs="4">clientOrderGuid:</Col><Col xs="auto">{props.clientOrderGuid}</Col> </Row>
            <Row> <Col className="text-left" xs="4">timestamp:</Col><Col xs="auto">{props.timestamp}</Col> </Row>
            <Row> <Col className="text-left" xs="4">cft:</Col><Col xs="auto">{props.cft}</Col> </Row>
        </Container>
    );
};

OrderHeader.propTypes = {
    dishCustomerId: PropTypes.string,
    clientOrderGuid: PropTypes.string,
    timestamp: PropTypes.number,
    cft: PropTypes.string
};

export default OrderHeader;
