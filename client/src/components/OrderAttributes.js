import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap'

const OrderAttributes = props => {
    let rows = []
    for (var key in props.attributes) {
        if (props.attributes.hasOwnProperty(key)) {
            rows.push(<Row key={key}><Col className="text-left" xs="4" >{key}</Col><Col className="text-left" >{JSON.stringify(props.attributes[key])}</Col></Row>)
        }
    }

    return (
        <Container className="border border-primary">
            {rows}
        </Container>
    );
};

OrderAttributes.propTypes = {
    attributes: PropTypes.object
};

export default OrderAttributes;
