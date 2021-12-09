import React from 'react'
import ReactPlayer from 'react-player/youtube'
import VideoColumn from '../components/VideoColumn'

import {Container, Row, Col, Image, Form, Card, Button, Table} from 'react-bootstrap';
export default function Video() {
    return (
            <Row>
                <Col lg={8}>
                    <Card style={{height: '90vh'}} >
                        
                        <ReactPlayer
                        url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'//position.position_id.technique_id.techniques.video_url
                        controls = {true}
                        width='100%'
                        height='100%'
                        className='react-player mb-3'
                        as={Container}
                        />
                        
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>username</Card.Text>
                            <Card.Text>
                                <Form className='ms-5'>
                                    <Form.Group as={Row} className='mt-5'>
                                        <Form.Label column sm="1">
                                            <Image 
                                                src="holder.js/171x180" 
                                                roundedCircle 
                                                />
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control size="md" type="text" placeholder="Comment" />
                                        </Col>
                                        <Col sm="3" >
                                        <Button variant="primary" size='sm'>Comment</Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                             
                             <Col sm='2'>
                             <Image 
                                src="holder.js/171x180" 
                                roundedCircle 
                                />
                                </Col>
                                <Col sm='10'>
                                <Card.Text>
                                here is some example text
                                </Card.Text>
                                </Col>
                        </Card.Footer> */}
                    </Card>

                </Col>
                   
                <Col lg={4}>
                    <Table striped borderless hover >
                        <VideoColumn/>
                        <VideoColumn/>
                        <VideoColumn/>
                        <VideoColumn/>
                        <VideoColumn/>
                    </Table>
                </Col>
            </Row>
        
    )
}
