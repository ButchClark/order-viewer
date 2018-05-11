import React from 'react';
import PropTypes from 'prop-types';

const CurrentOrder = props => {

    console.log(`CurrentOrder - props.currentOrder: ${JSON.stringify(props.currentOrder)}`)
    return (
        <div>
            <p>Order passed in: {JSON.stringify(props.currentOrder)}</p>
        </div>
    );
};

CurrentOrder.propTypes = {
    currentOrder: PropTypes.object
};

export default CurrentOrder;
