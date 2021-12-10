import React from 'react'
import ReactPlayer from 'react-player/youtube'
import VideoRow from '../components/VideoRow'
import {useParams} from 'react-router-dom'


import {Container, Row, Col, Image, Form, Card, Button, Table, } from 'react-bootstrap';
export default function Video({technique, techniques}) {

    const {id} = useParams()
    const video = techniques.find(t => t.id === parseInt(id))
    


    return (
        <>
            <Row>
                <Col lg={8}>
                    <Card style={{height: '90vh'}} >
                        
                        <ReactPlayer
                        url = {video?.video_url}
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
                                        {/* set up state and submit button to run axios call to post the comment data to the database */}
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
                         <tbody>
                            {techniques
                            //filter list to show position
                            //slice list to have just 10
                            .map((technique)=> <VideoRow technique={technique}/>)}
                            
                         </tbody>
                    </Table>
                </Col>
            </Row>
            <inverseModal/>
        </>
    )
}
