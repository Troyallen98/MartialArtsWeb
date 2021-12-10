import React from 'react'
import { Offcanvas, ListGroup, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default function NavOffCanvas({show, handleClose, positions}) {

    

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
                        {positions.map((position, index)=>{
                            // console.log(position)
                            return (
                            <NavDropdown.Item 
                                key={index} 
                                as={Link} 
                                to={`/position/${position.name.split(' ').join('-')}`}>{position.name}</NavDropdown.Item>
                            )
                        })}
                    </NavDropdown>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
