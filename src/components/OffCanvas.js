import React from 'react'
import { Offcanvas, ListGroup, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function NavOffCanvas({show, handleClose}) {
    return (
         <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><h2>Explore Techniques</h2></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup variant="flush">
                    <Link to="home"><ListGroup.Item>Home</ListGroup.Item></Link>
                    <Link to="about"><ListGroup.Item>About</ListGroup.Item></Link>
                    <NavDropdown
                        id="offcanvas-dropdown"
                        title="Positions"
                        menuVariant="dark"
                        >
                        <NavDropdown.Item href="#action/3.1">Mount</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Side Control</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Back</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Guard</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Takedown</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Drill</NavDropdown.Item>
                    </NavDropdown>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
