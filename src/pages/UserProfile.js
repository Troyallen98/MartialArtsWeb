import React from 'react'
import { Container, Row, Col, Card, Button, Nav, Image } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export default function UserProfile({ token }) {



    return token.length > 0 ?
        <>
            <Container className='mb-5 mt-3'>
                <Row>
                    <Col>
                        <Col xs={3}>
                            <Image src="holder.js/171x180" roundedCircle />
                        </Col>
                    </Col>
                    <Col xs={9}>
                    Name
                    </Col>
                </Row>
            </Container>
            
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Upload Video</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">My Videos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#disabled">
                                   My Playlist
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>

                    {/* use react router dom to redner card components onscreen. will need 3. */}

                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>

                </Card>
            
        </>
        :
        <Navigate to='/' />

}
