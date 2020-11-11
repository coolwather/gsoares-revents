import React, { Fragment } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import Calendar from 'react-calendar';

function EventFilters() {
  return (
    <Fragment>
      <Menu vertical size="massive" style={{ widt: '100%' }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All Events" />
        <Menu.Item content="I'm going" />
        <Menu.Item content="I'm hosting" />
      </Menu>
      <Menu vertical size='massive' style={{ widt: '100%' }}>
        <Header icon="calendar" attached color="teal" content="Select Date" />
        <Calendar />
      </Menu>
    </Fragment>
  );
}

export default EventFilters;
