import React from 'react'
import {Navbar, Button, } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function MainNavbar({
    token,
    handleShowOffCanvas,
    handleShowModal,
    removeToken,
}) {
    const baseURL = 'https://laravel-troywagonera734279.codeanyapp.com/';
    const signOut = (event) => {

        event.preventDefault()

        axios({
            method: 'get',
            url: baseURL + 'api/v1/user/logout',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Credentials': true,
                'Authorization': 'Bearer ' + token
            },

        })
            .then(function (response) {
                console.log(response);
                removeToken()
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    

    return (
        <Navbar className='bg-dark ps-5 pe-5 mb-3' onSubmit={signOut} id='sticky-nav'>
                <Navbar.Brand
                    className='text-white'
                    onClick={handleShowOffCanvas}
                    >
                        Martial Arts Origin
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    {token.length > 0 ?
                        <>
                            <Button
                                variant="outline-danger"
                                onClick={removeToken}
                            >
                                Log Out
                            </Button>
                            <Link 
                                to="/profile"
                                className='ms-2'
                                >
                                    Profile
                            </Link>
                            
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
            
        </Navbar>
    )
}
//(Ian)
//Do i have to use 'useContext' to lift state since Modal is a child of Navbar. 
//I dont Need a handleChange since information is changing but Do I need the information from the Login State?
//or Should create a Logout state? possibly add a boolean to the Login state and change to false for Logout

