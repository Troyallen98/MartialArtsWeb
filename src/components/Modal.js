
import React, { useState } from 'react'
import { Modal, Form, Button} from 'react-bootstrap';
import axios from 'axios'

// import Login from './Login'

export default function LoginModal({show, handleClose, saveToken, isRegistered, showLogin, showRegister}) {

    const baseURL = 'https://laravel-troywagonera734279.codeanyapp.com/';

    const [login, setLogin] = useState({})
    const [Register, setRegister] = useState({})
    
    
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

    
    
    const signIn = (event) => {

        event.preventDefault()

        axios({
            method: 'post',
            url: baseURL + 'oauth/token',
            data: {
                username: login.email,
                password: login.password,
                client_id: '2',
                client_secret: 'YJjVDOPASMOact6YoSPYZOsVMyKei8WRxoN2ECSS',
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
                // 'Authorization': 'Bearer ' + 'token'
            },

        })
            .then(function (response) {
                console.log(response);
                saveToken(response.data.access_token)
                handleClose()
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const signUp = (event) => {

        event.preventDefault()

        axios({
            method: 'post',
            url: baseURL + 'api/register',
            data: {
                name: Register.name,
                email: Register.email,
                password: Register.password
            },

            header: {
                // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNGJhY2FmZDNmNmM0ODk1MmEzMTRkZjFkNWQ1YjY2NThkNDNlMGM2MjI2NDZiYjgwZTYxMzM4NzZhNTdlYTQ5NmIzZWVmODZmMWQ3OTk1NTYiLCJpYXQiOjE2MzgzMTg2MDYuMzM1MzM2LCJuYmYiOjE2MzgzMTg2MDYuMzM1MzQsImV4cCI6MTY2OTg1NDYwNi4zMjU3Nywic3ViIjoiMSIsInNjb3BlcyI6W119.oKekwvzaT4ZjnbBz5lyc-OcjH1cNxh1P-HxbJWCkP_3CbPoCpEnmDmAh1LoXeqVV0_fHnWcah3-2eYVrdux-BvM-YZxi567KP_ZR03bteErPdz3PnvALa2EjT8_S4VQzWpToRNVzGvSK2BJpAPticlIRlBEVsNJFA_xvVHZtjb8YHluQbWKfMu1Ib5HW5zE2uhRYxIWGT4m47tWJsSr5O-KbUu9UVF_E3tn5qQ2I-UVgUHNR89KmK6TFFO7NsS__6iaM0a7pPRXb4Y-vKBj39npk04eCS-Ouu2826tZ1nkfjmMk0z6jwkTykJFpTbdXlq3o1j2jXLP5nzWRyhAp3i5JDpoHYs1b08rwwG2DSEi2nHl08dPyZpuoz3QooOtKcml2nN0RAmmvoi464lVWVtUF1VgRL0IBMtumQNRL_roQlyeleDre04cs2biGi4LVODq8kGxQ_Ih6V4n4BYy5_u67Y9T3aIjx67GOyPef6O_SrRIKZPxVIdpCe5c0kpmZrkmc-c5xa98_1VQ7nDsKUu7aIcewD8MJXvDGTqxXgW1q2qhTT2dopOVCicd-VQHqOcGpYVlcQLoD6iJ7xzcZVNN7ErjRRcuN8WtwZlnFtZ_2Wda9_6kS5jXRgAHefEtSY81hl8L5ARxE890r5f5Oy0j9DWQ2bVLOBnY5AJZfFAS4',
                'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                'Content-Length': '<calculated when request is sent>',
                'Host': '<calculated when request is sent>',
                'User-Agent': 'PostmanRuntime/7.28.4',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive'
            },

        })
            .then(function (response, data) {
                console.log(response);
                // localStorage.setItem('token', JSON.stringify(response.data.client_secret));
                //signIn()
                handleClose()
            })
            .catch(function (error) {
                console.log(error);
            });
    }



  return (
    <Modal show={show} onHide={handleClose} animation={false}>
        
        {isRegistered ?
            <>
                <Form onSubmit={signIn}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>         
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name='email'
                                value={login.email ||""}
                                onChange={handleChangeLogin} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword">
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
                            controlId="formBasicPassword">
                            {/* link to CreateAccount */}
                            <Form.Text
                                    className="text-muted">
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
                            onClick={showRegister}
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
                            controlId="formBasicUsername">

                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="name" 
                                name='name'
                                value={Register.name}
                                onChange={handleChangeRegister}
                                />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail">

                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name='email'
                                value={Register.email}
                                onChange={handleChangeRegister}
                                />

                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword">

                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name='password'
                                value={Register.password}
                                onChange={handleChangeRegister}
                                />
                        </Form.Group>
                    </Modal.Body> 
                        
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button 
                            variant="secondary"
                            onClick={showLogin}
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

  );
}