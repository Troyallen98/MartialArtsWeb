import React from 'react'
import { Container, Navbar, Button,} from 'react-bootstrap';


export default function MainNavbar({
    token,
    // offcanvas props
    // showOffCanvas,
    // handleCloseOffCanvas,
    handleShowOffCanvas,

    // modal props  
    // showModal,
    // handleCloseModal,
    handleShowModal
 }) {
    return (
        <Navbar className='bg-dark'>
            <Container>
                <Navbar.Brand 
                    className='text-white' 
                    href="#home"
                    onClick={handleShowOffCanvas}>
                    Martial Arts Library
                </Navbar.Brand>
                <Navbar.Toggle />
                
                <Navbar.Collapse 
                    className="justify-content-end">
                   {token.length > 0 ?
                        <>
                            <Button 
                                className="me-3" 
                                variant="outline-success">
                                Upload Video
                            </Button>
                            <Button 
                                variant="outline-danger">
                                Log Out
                            </Button>
                        </>
                        :
                        <>
                            <Button 
                                variant="outline-success"
                                onClick={handleShowModal}
                                >
                                Sign-In
                            </Button>
                        </>
                    }
               </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
