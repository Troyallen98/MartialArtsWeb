import React , {useState} from 'react'
import {Row, Col, Card, Button, Nav, Image} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import VideoModal from '../components/VideoModal';

export default function UserProfile({ token }) {

    const [uploadVideoModal, setUploadVideoModal] = useState(false);
    const handleCloseVideoModal = () => setUploadVideoModal(false);
    const handleShowModal = () => setUploadVideoModal(true);  

    return token.length > 0 ?
        <>
            <Row className='mb-5 mt-5 '>
                <Col>
                    <Col sm={3}>
                        <Image src="holder.js/171x180" roundedCircle />
                    </Col>
                </Col>
                <Col sm={9}>
                    Name
                </Col>
            </Row>

            <Card className='mb-5'>
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

                <Card.Body className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
                    <Card.Title>Upload a video to get started</Card.Title>
                    <Card.Text>
                        Start sharing your story and connecting with viewers. Videos you upload will show up here.
                        </Card.Text>
                    <Button variant="primary" onClick={handleShowModal} > UPLOAD VIDEO</Button>
                </Card.Body>
            </Card>
            <VideoModal 
                show={uploadVideoModal}
                handleClose={handleCloseVideoModal}
                token={token}
                />
        </>
        :
        <Navigate to='/' />
}
