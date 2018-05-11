import React from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col} from 'reactstrap'
import OrderLine from './OrderLine'

const OrderLineList = props => {

    console.log("> OrderLineList: props:")
    console.dir(props)

    let lines = (typeof props.lines === 'undefined')
        ? <Row>No order lines in this order</Row>
        : props.lines.map((l, index) => <Row key={index}><Col><OrderLine key={index} line={l}/></Col></Row> )
    return (
        <Container>
            {lines}
        </Container>
    );
};

OrderLineList.propTypes = {
    lines: PropTypes.array
};

export default OrderLineList;
