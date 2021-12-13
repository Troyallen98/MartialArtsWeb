import React from 'react'

import PositionTechniques from '../components/PositionTechnique'
import { Container, Row } from 'react-bootstrap';


export default function Positions({ token, techniques, positions }) {

    
    return (

        <Container>
            <Row>
                <PositionTechniques token={token} techniques={techniques} positions={positions} />
            </Row>
        </Container>

    )
}

