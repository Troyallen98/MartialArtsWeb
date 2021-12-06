import React from 'react'
import Techniques from './Techniques'
import {Container, Row} from 'react-bootstrap';

export default function Home() {
    return (
        
        <Container>
            <Row>
                <Techniques/>
                <Techniques/>
                <Techniques/>
                <Techniques/>
                <Techniques/>
                <Techniques/>
            </Row>
        </Container>
        
    )
}

