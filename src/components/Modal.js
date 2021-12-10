
import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios'

export default function LoginModal({ 
    show, 
    handleClose, 
    saveToken, 
    isRegistered, 
    toggleModal, 
}) 
    {
    const baseURL = 'https://laravel-troywagonera734279.codeanyapp.com/';
    const [login, setLogin] = useState({})
    const [register, setRegister] = useState({})

    const handleChangeLogin = e => {
        setLogin(prevLogin => {
            return {
                ...prevLogin,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleChangeRegister = e => {
        setRegister(prevRegister => {
            return {
                ...prevRegister,
                [e.target.name]: e.target.value
            }
        })
    }

    const signIn = e => {

        e.preventDefault()

        axios({
            method: 'post',
            url: baseURL + 'oauth/token',
            data: {
                username: login.email,
                password: login.password,
                client_id: '2',
                client_secret: 'WM0C75VxnfCP22qCK4e8K4lK9shP6SRYQO7jBREj',
                grant_type: 'password',
                scope: ''
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Credentials': true,
            },

        })
            .then(function (response) {
                console.log(response);
                saveToken(response.data.access_token)
                handleClose()
                setLogin({})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const signUp = (event) => {

        event.preventDefault()

        axios({
            method: 'post',
            url: baseURL + 'api/v1/register',
            data: {
                name: register.name,
                email: register.email,
                password: register.password
            },

            header: {
               'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Credentials': true,
            },

        })
            .then(res => {
                console.log(res);
                saveToken(res.data.data.token)
                handleClose()
                setRegister({})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    

    return (
        <Modal 
            show={show} 
            onHide={handleClose} 
            animation={false}
            >
            {isRegistered ?
                <>
                    <Form onSubmit={signIn}>
                        <Modal.Header closeButton>
                            <Modal.Title>Login</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                                >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name='email'
                                    value={login.email || ""}
                                    onChange={handleChangeLogin} 
                                    />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                                >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name='password'
                                    value={login.password || ""}
                                    onChange={handleChangeLogin}
                                    />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                                >
                                <Form.Text
                                    className="text-muted"
                                    >
                                </Form.Text>
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                variant="danger"
                                onClick={handleClose}
                                >
                                    Close
                            </Button>
                            
                            <Button
                                variant="secondary"
                                onClick={toggleModal}
                                >
                                    Don't have an account?
                            </Button>

                            <Button
                                className="mb-1"
                                variant="primary"
                                type="submit"
                                >
                                    Login
                            </Button>
                        </Modal.Footer>
                    </Form>
                </>
                :
                <>
                    <Form onSubmit={signUp}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign Up</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicUsername"
                                >
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="username"
                                    placeholder="name"
                                    name='name'
                                    value={register.name||""}
                                    onChange={handleChangeRegister}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                                >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name='email'
                                    value={register.email || ""}
                                    onChange={handleChangeRegister}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                                >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name='password'
                                    value={register.password || ""}
                                    onChange={handleChangeRegister}
                                />
                            </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button 
                                variant="danger" 
                                onClick={handleClose}
                                >
                                    Close
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={toggleModal}
                                >
                                    Already Registered?
                            </Button>

                            <Button
                                className="mb-1"
                                variant="success"
                                type="submit"
                                >
                                    Register
                            </Button>
                        </Modal.Footer>
                    </Form>
                </>
            }
        </Modal>
    )
}

                                                                                                                                                                                                                            