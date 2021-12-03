import React,{ useState } from 'react'
import OffCanvas from './OffCanvas';
import Navbar from './Navbar'
import Modal from './Modal'
import {Outlet} from 'react-router-dom'

export default function Layout({token, saveToken}) {

    // for the offcanvas
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const handleCloseOffCanvas = () => setShowOffCanvas(false);
    const handleShowOffCanvas = () => setShowOffCanvas(true);

    // for the modal
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [isRegistered, setIsRegistered] = useState(true)
    const showRegister = () => setIsRegistered(false);
    const showLogin = () => setIsRegistered(true);

    return (
        <>
            <Navbar 
                handleShowOffCanvas={handleShowOffCanvas} 
                handleShowModal={handleShowModal} 
                token={token}  
            />
            <OffCanvas 
                show={showOffCanvas}
                handleClose={handleCloseOffCanvas} 
            />
            <Modal 
                show={showModal} 
                handleClose={handleCloseModal} 
                saveToken={saveToken} 
                isRegistered={isRegistered} 
                showRegister={showRegister}
                showLogin={showLogin}
            />
            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </>
    );
}