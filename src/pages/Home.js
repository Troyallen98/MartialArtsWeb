import React from 'react'
import Techniques from '../components/Techniques'
import {Container, Row} from 'react-bootstrap';

export default function Home({techniques}) {
    return (
        
        <Container>
            <Row>
                <Techniques techniques = {techniques}/>
            </Row>
        </Container>
        
    )
}

