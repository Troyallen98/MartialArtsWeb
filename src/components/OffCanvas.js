import React from 'react'
import { Offcanvas, ListGroup } from 'react-bootstrap';

export default function NavOffCanvas({show, handleClose}) {
    return (
         <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><h2>Explore Techniques</h2></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Mount</ListGroup.Item>
                    <ListGroup.Item>Side Control</ListGroup.Item>
                    <ListGroup.Item>Back</ListGroup.Item>
                    <ListGroup.Item>Guard</ListGroup.Item>
                    <ListGroup.Item>Drills</ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
