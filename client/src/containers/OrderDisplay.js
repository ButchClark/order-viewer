import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap'

class OrderDisplay extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        This is the order over here...
                    </Col>
                    <Col>
                        This is where the events will go...
                    </Col>
                </Row>
            </Container>
        );
    }
}

OrderDisplay.propTypes = {
};

export default OrderDisplay;
