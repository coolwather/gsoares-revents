import React, { Fragment } from 'react';
import EventListItem from './EventListItem';

function EventList({ events }) {
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </Fragment>
  );
}

export default EventList;
