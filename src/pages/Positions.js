import React, { useEffect, setState } from 'react'

import PositionTechniques from '../components/PositionTechnique'
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export default function Positions({ token, techniques, positions }) {

    // const [name, setName] = setState('')

    // const params = useParams()

    // useEffect(() => {
    //     setName(params.name)
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [params])

    return (

        <Container>
            <Row>
                <PositionTechniques token={token} techniques={techniques} positions={positions} />
            </Row>
        </Container>
        // <>
        // this is the {name} postion 
        // </>

    )
}

