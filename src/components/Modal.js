
import React, { useState } from 'react'
import { Modal, Form, Button} from 'react-bootstrap';
import axios from 'axios'

// import Login from './Login'

export default function LoginModal({show, handleClose, saveToken}) {

      const baseURL = 'https://laravel-troywagonera734279.codeanyapp.com/';

    const [login, setLogin] = useState({})
    const handleChange = e => {
        setLogin(prevLogin => {
            return {
                ...prevLogin,
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

  return (
      <Modal show={show} onHide={handleClose} animation={false}>
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
                        onChange={handleChange} />
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
                        onChange={handleChange}
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary">
                Don't have an account?
                {/* todo: have it conditially render to be register */}
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
      </Modal>

  );
}