import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react'

function ErrorComponent() {
    const {error} = useSelector((state) => state.async);
    const message = error?.message || 'oops - we have an error';
    return (
        <Segment placeholder>
            <Header textAlign='center'  content={message} />
            <Button as={Link} to='/events' primary stype={{marginTop: 20}} content='Return to events page' />
        </Segment>
    )
}

export default ErrorComponent
