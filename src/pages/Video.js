import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import VideoRow from '../components/VideoRow'
import Comment from '../components/Comment'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col, Image, Form, Card, Button, Table, } from 'react-bootstrap';
export default function Video({ techniques, token, getTechniques}) {

    const { id } = useParams()
    const video = techniques.find(t => t.id === parseInt(id))
    const baseURL = 'https://laravel-troywagonera734279.codeanyapp.com/api/v1/';
    const [comment, setComment] = useState('')
   

  
    const postComment = (event) => {

        event.preventDefault()
        console.log(token)
        axios({
            method: 'post',
            url: baseURL + 'upload-positions-technique-comment',
            data: {
                content: comment,
                technique_id: video.id
            },

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Credentials': true,
                'Authorization': `Bearer ${token}`
            },

        })
            .then(res => {
                console.log(res);
                setComment('')
                getTechniques()

            })
            .catch(function (error) {
                console.log(error);
            });
    }




    return (
        <>
            <Row>
                <Col lg={8}>
                    <Card style={{ height: '90vh' }} >

                        <ReactPlayer
                            url={video?.video_url}
                            controls={true}
                            width='100%'
                            height='100%'
                            className='react-player mb-3'
                            as={Container}
                        />

                        <Card.Body>
                            <Card.Title>{video?.name}</Card.Title>
                            <Card.Text>{video?.user.name}</Card.Text>
                            <Card.Text>
                                <Form 
                                    className='ms-5'
                                    onSubmit={postComment}>
                                    <Form.Group as={Row} className='mt-5'>
                                        <Form.Label column sm="1">
                                            <Image
                                                src="holder.js/171x180"
                                                roundedCircle
                                            />
                                        </Form.Label>
                                        <Col sm="8">
                                            {/* set up state and submit button to run axios call to post the comment data to the database */}
                                            <Form.Control
                                                size="md"
                                                type="text"
                                                placeholder="Comment"
                                                // name='content'
                                                value={comment}
                                                onChange={e=>setComment(e.target.value)} />
                                        </Col>
                                        <Col sm="3" >
                                            <Button variant="primary" size='sm' type='submit'>Comment</Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                        
                             
                         
                                
                        
                    </Card>
                    <Card>
                         {video?.comments.map((item, index) =><Card.Footer> <Comment data={item} key={index}/></Card.Footer>)} 
                    </Card>

                </Col>

                <Col lg={4}>
                    <Table striped borderless hover  >
                        <tbody>
                            {techniques
                                //filter list to show position
                                //slice list to have just 10
                                .slice(0, 10)
                                .map((technique, index) => <VideoRow key={index} technique={technique} token={token} className="stretched-link" />)}

                        </tbody>
                    </Table>
                </Col>
            </Row>
            <inverseModal />
        </>
    )
}
