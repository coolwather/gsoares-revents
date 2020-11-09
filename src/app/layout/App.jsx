import React, { Fragment } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import {ToastContainer} from 'react-toastify';
import EventDetailed from '../../features/events/eventDetailed/EventDetailed';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import Sandbox from '../../features/sandbox/Sandbox';
import ModalsManager from '../common/modals/ModalsManager';

const {
  default: EventDashboard,
} = require('../../features/events/eventDashboard/EventDashboard');

function App() {
  const {key} = useLocation();
  return (
    <Fragment>
      <ModalsManager />
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <Fragment>
          <NavBar />
          <Container className="main">
            <Route exact path='/events' component={EventDashboard} />
            <Route exact path='/sandbox' component={Sandbox} />
            <Route path='/events/:id' component={EventDetailed} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
          </Container>
        </Fragment>
      )} />
    </Fragment>
  );
}

export default App;
