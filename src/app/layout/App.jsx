import React, {Fragment, useState} from 'react';
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";

const { default: EventDashboard } = require("../../features/events/eventDashboard/EventDashboard");

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Fragment>
      <NavBar setFormOpen={setFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </Fragment>
  );
}

export default App;
