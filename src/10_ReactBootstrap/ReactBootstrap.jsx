import React from 'react';
import { Button, Card } from 'react-bootstrap'

const ReactBootstrap = () => {
  return (
    <div>
        <h1>Button</h1>
        <Button variant='primary' >Primary</Button>

        <br />
        <br />

        <h1>Card</h1>
        {/* Compound component */}
        <Card className='w-25'>
            <Card.Img src="https://i.picsum.photos/id/466/200/300.jpg?hmac=_8Qj7TNFwkiL8YxUhAgf6TvYTucTPN-IIT0yy-4F9AE" />
            <Card.Body >
                <Card.Title>Photo</Card.Title>
                <Card.Text>Awasome photo</Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
};

export default ReactBootstrap;