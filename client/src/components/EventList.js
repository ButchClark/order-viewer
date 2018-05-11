import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem, Badge} from 'reactstrap'

const EventList = props => {

    const handleClick = e => {
        console.log(`Event clicked: ${e.target.dataset.guid}`)
        props.eventSelectedHandler(e.target.dataset.guid)
    }

    const eventlist = props.events.map((e, index) => {
        const pill =
            (
                e.domoEvent.type === "order-accepted-event" ||
                e.domoEvent.type === "order-preprocessed-event" ||
                e.domoEvent.type === "task-completed-event" ||
                e.domoEvent.type === "task-failed-event"
            )
                ? <Badge color="info" pill>may update order</Badge>
                : ""
        return <ListGroupItem
            key={index}
            tag="button"
            action
            onClick={e => handleClick(e)}
            data-guid={e.domoEvent.clientOrderGuid}>{e.createdAt} - {e.domoEvent.type}
            {pill}
        </ListGroupItem>
    })
    return (
        <div className="border border-warning">
            <h3>Events:</h3>
            <ListGroup>
                {eventlist}
            </ListGroup>
        </div>
    );
};

EventList.propTypes = {
    events: PropTypes.array,
    eventSelectedHandler: PropTypes.func
};

export default EventList;
