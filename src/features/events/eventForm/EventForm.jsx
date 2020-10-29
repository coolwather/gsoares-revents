import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

function EventForm({setFormOpen}) {
    return (
        <Segment clearing>
            <Header content="Create new event" />
            <Form>
                <Form.Field>
                    <input type="text" placeholder="Event title" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue" />
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date" />
                </Form.Field>
                <Button floated="right" type="submit" positive content="Submit" />
                <Button floated="right" type="submit" content="Cancel" onClick={() => setFormOpen(false)} />
            </Form>
        </Segment>
    )
}

export default EventForm
