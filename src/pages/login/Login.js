import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

import './login.css'
function login() {
    return (

       
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox" >
                                <Form.Text class="text-muted">
                                <Form.Check type="checkbox"  label="Keep me signed in" />
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                         
                                Submit
  </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
  
    )
}

export default login