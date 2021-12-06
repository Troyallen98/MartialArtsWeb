import React, { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios'

export default function VideoModal({show, handleClose, token}) {

    const baseURL = 'https://laravel-troywagonera734279.codeanyapp.com/';
    
    const [upload, setUpload] = useState({})

    const saveUpload = e => {
        setUpload(prevUpload => {
            return {
                ...prevUpload,
                [e.target.name]: e.target.value
            }
        })
    }

    const uploadVideo = e => {

        e.preventDefault()

        axios({
            method: 'post',
            url: baseURL + 'api/v1/video',
            data: {
                video_url: upload.video_url
            },
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Credentials': true,
                'Authorization' : `Bearer ${token}`
            },
        })
            .then(res => {
                console.log(res);
                // saveUpload(res.data.data.upload)
                handleClose()
                setUpload({})
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Form  onSubmit={uploadVideo}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload a technique</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                        <Form.Control 
                            className='mb-4' 
                            type="text" 
                            placeholder="URL link to video"
                            name='video_url'
                            value={upload.video_url || ''}
                            onChange={saveUpload} 
                            />
                        <FloatingLabel
                            controlId="floatingSelect"
                            label="position of technique"
                            className='ps-1'
                            >
                            <Form.Select 
                                aria-label="Floating label select example"
                                onChange={saveUpload} 
                            >
                                <option>select a position</option>
                                <option value="1">Mount</option>
                                <option value="2">Side Control</option>
                                <option value="3">Back</option>
                                <option value="4">Takedown</option>
                                <option value="5">Drills</option>
                            </Form.Select>
                        </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={handleClose}
                        >
                            Close
                    </Button>
                    <Button 
                        variant="primary" 
                        type='submit'
                        >
                            Upload
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
