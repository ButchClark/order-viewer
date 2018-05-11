import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem} from 'reactstrap'

const EventList = props => {
    // console.log(">EventList - first event: ")
    // console.dir(props.events[0])

    const handleClick=e=>{
        console.log(`Event clicked: ${e.target.dataset.guid}`)
        props.eventSelectedHandler(e.target.dataset.guid)
    }

    const eventlist = props.events.map((e,index)=> <ListGroupItem key={index} tag="button" action onClick={e=>handleClick(e)} data-guid={e.domoEvent.clientOrderGuid}>{e.createdAt} - {e.domoEvent.type}</ListGroupItem>)
    return (
        <ListGroup>
            {eventlist}
        </ListGroup>
    );
};

EventList.propTypes = {
    events: PropTypes.array,
    eventSelectedHandler: PropTypes.function
};

export default EventList;
