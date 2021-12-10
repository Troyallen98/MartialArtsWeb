import React from 'react'
import Techniques from '../components/Techniques'
import {Container, Row} from 'react-bootstrap';

export default function Home({token, techniques}) {
    return (
        
        <Container>
            <Row>
            {/* random Videos from database. */}
                <Techniques token = {token} techniques = {techniques}/>
            </Row>
        </Container>
        
    )
}

