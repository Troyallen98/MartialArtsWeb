import React, { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios'

export default function VideoModal({show, handleClose, token, positions}) {

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
            url: baseURL + 'api/v1/technique',
            data: {
                video_url: upload.video_url,
                name: upload.name,
                position : upload.position,
                technique_id: 2,

                
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
                                name='position'
                            >

                                <option>select a position</option>
                                    {positions.map((position, index)=>{
                                        console.log(position)
                                        return (
                                            <option key={index} value={position.id}>{position.name}</option>
                                        )
                                    })}
                                
                            </Form.Select>
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Technique</Form.Label>
                            <Form.Control 
                                
                                placeholder="Enter technique name"
                                name='name'
                                value={upload.name || ''}
                                onChange={saveUpload}  />
                            
                        </Form.Group>
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
