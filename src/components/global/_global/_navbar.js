import React from 'react'
import {Container, Navbar, Form, Button} from 'react-bootstrap'

const navbar = () =>{
    <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="seacrch">
                <Form.Control type="email" placeholder="search" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
    </Form>
    <h1>Hello</h1>
    </Container>
  </Navbar>
</Container>
}

export default navbar

