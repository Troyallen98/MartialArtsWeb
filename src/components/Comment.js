import React from 'react'
import { Col, Card} from 'react-bootstrap';

export default function Comment({data}) {
    return (
    <>
        <Col sm='2'>
        <Card.Text>
           {data.user.name}
           </Card.Text>
        </Col>
        <Col sm='10'>
           <Card.Text>
           {data.content}
           </Card.Text>
        </Col>
    </>
    )
}
