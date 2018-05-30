import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem, Badge} from 'reactstrap'

const classNames = require('classnames')


const EventList = props => {

    const handleClick = e => {
        console.log(`Event clicked: ${e.target.dataset.guid}`)
        props.eventSelectedHandler(e.target.dataset.guid)
    }

    const CompareGuid = (guid1In, guid2In) => {

        let guid1 = String(guid1In)
        let guid2 = String(guid2In)
        console.log(` - guid1 type: ${guid1.constructor.name}`)
        console.log(` - guid2 type: ${guid2.constructor.name}`)

        if (guid1.replace(/[{}]/g, "").toLowerCase() == guid2.replace(/[{}]/g, "").toLowerCase()) {
            return true
        }
        else {
            return false
        }
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
        let bkgrnd = {}
        if (CompareGuid(props.selectedEventId , e.domoEvent.eventId )) {
            console.log(`** EventList - have selected Event: ${e.domoEvent.eventId}, props.selectedEvent: ${props.selectedEventId}`)
            bkgrnd = {backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}
        } else {
            console.log(`EventList - do not have selected Event: ${e.domoEvent.eventId}, props.selectedEvent: ${props.selectedEventId}`)
            bkgrnd = {backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center'}
        }
        return <ListGroupItem
            key={index}
            tag="button"
            style={bkgrnd}
            action
            onClick={e => handleClick(e)}
            data-guid={e.domoEvent.eventId}>{e.createdAt} - {e.domoEvent.type}
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
