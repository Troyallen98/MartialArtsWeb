import React from 'react'
import { Container, Form, Button, Card} from 'react-bootstrap';

export default function Login() {
    return (
        <Container>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="mb-3"><h2>Sign In</h2></Card.Title>
                    <Form>
                        <Form.Group className="mb-3" 
                                    controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control   type="username" 
                                            placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" 
                                    controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control   type="email" 
                                            placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" 
                                    controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control   type="password" 
                                            placeholder="Password" />
                        </Form.Group>

                        <Button className="mb-1" 
                                variant="primary" 
                                type="submit">
                                    Sign Up
                        </Button>

                        <Form.Group className="mb-3" 
                                    controlId="formBasicPassword">
                            <Form.Text 
                                className="text-muted">
                                    Already have an account?
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
