import React from 'react'
import ReactPlayer from 'react-player/youtube'
import {Card, Image} from 'react-bootstrap';

export default function Techniques(controls) {
    return (
        
        <Card border='light' className='col-12 col-md-6 col-lg-4 col-xl-3 text-center'>
            <ReactPlayer
                url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
                controls = {true}
                width='100%'
                height='100%'
                />
            <Card.Body>
                <Card.Title>'Description'</Card.Title>
                <Card.Text>
                    <Image 
                        src="holder.js/171x180" 
                        roundedCircle 
                        />
                    'Username'
                </Card.Text>
                <Card.Text>
                    'Views' 'Uploaded Date' 'Link to inverse if there is'
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
